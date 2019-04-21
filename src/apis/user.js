import request from '../config/request'

// 登录
export const login = data => {
  return request({
    url: '/sign/loginUser',
    method: 'post',
    data,
  })
}

// 注册
export const registerUser = data => {
  return request({
    url: '/sign/registerUser',
    method: 'post',
    data,
  })
}

// 获取用户信息
export const getUser = id => {
  return request({
    url: '/home/getUserInfo',
    method: 'get',
    params: {
      id,
    }
  })
}
