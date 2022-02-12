import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL,
})

const handleRequestConfig = config => {
  // append a trailing slash if it's a POST request
  if (config.method === 'post') {
    return {
      ...config,
      url: `${config.url}/`,
    }
  }

  return config
}

const handleResponseError = error => {
  // the status code can be destructured here too,
  // to be thrown along with the data
  const { data } = error.response

  // the error can be catched on any component/context
  throw data
}

api.interceptors.request.use(handleRequestConfig)
api.interceptors.response.use(config => config, handleResponseError)

export default api
