import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development' ? '/apis' : process.env.BASE_API
const service = axios.create({
  baseURL,
  timeout: 15 * 1000,
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  },
)

export default service
