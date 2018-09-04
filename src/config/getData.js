import {request} from './axios'

// test
export const getList = () => request.post('/apis/home/list')

export const getUser = () => request.get('/apis/home/getUserInfo')
