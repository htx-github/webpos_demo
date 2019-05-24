import axios from 'axios'
import {
  Message
} from 'element-ui'
let baseURL = ''
if (process.env.NODE_ENV == 'development') {
  baseURL = 'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican'
}
if (process.env.NODE_ENV == 'production') {
  baseURL = process.env.VUE_BASEURL
}
console.log(process.env.NODE_ENV)
console.log(process.env)
const service = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
service.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
