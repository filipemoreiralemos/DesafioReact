<h1 align="center"> React Challenge </h1>

<div align="center">

  
  ![Website preview](/.github/webSite.png)

</div>

## Description

Front End Developer Challenge. A version made with React and Next.js.
## Features

  - React + Next.js, delivering blazing fast server-side rendered pages;
  - Form validation using React Hook Forms and React's Context API, displaying clear response messages to the user;
  - Mobile first development, fully responsive.
  - Made focusing on SEO ;
  - Easy and fast deploy w/ Docker;

##  Instructions

### Development

#### Installing dependencies

```sh
# using npm
npm install

# using yarn
yarn
```
#### Running the dev server

```sh
# using npm
npm run dev

# using yarn
yarn dev
```

### Production

There are many ways to deploy this application.

The first one is building the application and starting it using Next's custom server, which is powered.

##### Installing dependencies


```sh
# using npm
npm install

# using yarn
yarn
```

##### Building the application

```sh
# using npm
npm run build

# using yarn
yarn build
```

##### Running the custom server

```sh
# using npm
npm run prod:start

# using yarn
yarn prod:start
```

#### Docker

To run this application using Docker, you can either build and run it from Docker itself, or just use Compose to start with a single command.

Keep in mind that Docker will start the server at port 3000 and map the server to the host's 443 port by default.

You may also provide your own ```key.pem``` and ```cert.pem``` files in the project's root here, the container will copy it and start with HTTPS normally.

##### Docker build/run

```sh
# might need to run as sudo
docker build . -t jungle-devs-react-challenge
# make sure to provide 443:3000, as these are the default ports
docker run -p 443:3000 jungle-devs-react-challenge
```

You can run this with --env-file, for example:

```sh
# you can use the -d flag if you want to run it detached (as a background process)
docker run --env-file .env.production.local --name jd-react-challenge -p HOST_PORT:SERVER_PORT jungle-devs-react-challenge
```

##### Compose

```sh
# might need to run as sudo
docker-compose up
```

You can also run this one with --env-file:

```sh
# make sure to re-build if you ran up before, for example:
docker-compose --env-file .env.production.local build --no-cache
docker-compose --env-file .env.production.local up
```

## Resources

**Design**: [Figma](https://www.figma.com/file/iBxoiuoSXy3SiOAnwXo2Np/Frontend-%E2%80%93-Challenge-1)
