import axios from 'axios'
import {
  Message
} from 'element-ui'
const service = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican',
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
