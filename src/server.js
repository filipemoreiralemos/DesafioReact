const next = require('next')
const express = require('express')
const { loadEnvConfig } = require('@next/env')

const cacheableResponse = require('cacheable-response')
const compression = require('compression')

const fs = require('fs')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'

// expose .env variables to process.env
const { combinedEnv } = loadEnvConfig('./', dev)

// constants used to start the server
const isDocker = fs.existsSync('/.dockerenv')
const serverPort = combinedEnv.SERVER_PORT || 3000
const mappedPort = combinedEnv.HOST_PORT || 443
const hostPort = isDocker ? mappedPort : serverPort

const certificatesPath = path.resolve(__dirname, `${isDocker ? '.' : '..'}/`)
const certificatePath = `${certificatesPath}/cert.pem`
const privateKeyPath = `${certificatesPath}/key.pem`
const certificatesExist =
  fs.existsSync(certificatePath) && fs.existsSync(privateKeyPath)

// next app instance
const nextApp = next({ dev })

const handle = nextApp.getRequestHandler()

const ssrCache = cacheableResponse({
  // the ttl can be changed to prevent users
  // from cleaning the brower's local storage to receive
  // a new title variant; this will also work for
  // web crawlers or when JS is disabled on browser side,
  // meaning the user can refresh the page and still get
  // the same response from the server
  // 1000 * 60 * 60 = 1 hour
  ttl: 10,
  get: async ({ req, res }) => {
    const rawResEnd = res.end
    const data = await new Promise(resolve => {
      res.end = payload => {
        resolve(res.statusCode === 200 && payload)
      }
      nextApp.render(req, res, req.path, {
        ...req.query,
        ...req.params,
      })
    })
    res.end = rawResEnd
    return { data }
  },
  send: ({ data, res }) => res.send(data),
})

const logStartMessage = () => {
  console.log(
    `> Access the server @ ${
      certificatesExist ? 'https' : 'http'
    }://localhost:${hostPort} [Server port: ${serverPort}]`
  )
}

// dynamic import the https module to start the server
// when a certificate exists
const startHttpsServer = async expressApp => {
  const https = await import('https')
  const certificate = fs.readFileSync(certificatePath)
  const privateKey = fs.readFileSync(privateKeyPath)

  const httpsServer = https.createServer(
    {
      key: privateKey,
      cert: certificate,
    },
    expressApp
  )

  httpsServer.listen(serverPort, logStartMessage)
}

// if there's no certificate, then start a normal HTTP
// server through Express itself
const startHttpServer = async expressApp => {
  expressApp.listen(serverPort, logStartMessage)
}

// main server start flow
nextApp
  .prepare()
  .then(async () => {
    const expressApp = express()

    if (!dev) {
      expressApp.use(compression())
    }

    // handle index w/ SSR caching and all routes w/ Next
    expressApp.get('/', (req, res) => ssrCache({ req, res }))
    expressApp.get('*', (req, res) => handle(req, res))

    // if the certificates folder exists and there's a cert.pem there,
    // start the HTTPS server
    if (certificatesExist) {
      await startHttpsServer(expressApp)
      return
    }

    await startHttpServer(expressApp)
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
