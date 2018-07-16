import {request} from '@/config/axios'

export const navType = () => request.get('/apis/home/navlist')

export const pageList = (type = '') => request.post('/apis/home/list', {
    type
})