import axios from 'axios'
import messageVue from '../components/message/index'

const baseURL =
  process.env.NODE_ENV === 'development' ? '/apis' : `//api.guweimo.com`
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
  response => {
    let status = response.data.status
    if (status != 2000) {
      messageVue({
        type: 'error',
        content: response.data.message,
      })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  },
)

export default service
