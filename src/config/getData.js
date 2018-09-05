import {request} from './axios'
import { getStore } from './unit'

// test
export const getList = () => request.post('/apis/home/list')

// 获取当前用户信息
export const getUser = () => request.get('/apis/home/getUserInfo', { 
    id:  getStore('userinfo')
})
