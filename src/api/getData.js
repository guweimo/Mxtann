import {
  request
} from './axios'
import {
  getStore
} from './unit'

// 获取当前用户信息
export const getUser = () => {
  let result = null
  let userinfo = getStore('userinfo', true)
  if (userinfo) {
    result = request.get('/apis/home/getUserInfo', {
      id: getStore('userinfo', true).id
    })
  }
  return result
}

export const navType = () => request.get('/apis/home/navlist')

export const pageList = (type = '') => request.post('/apis/home/list', {
  type
})
