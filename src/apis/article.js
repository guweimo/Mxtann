import request from '../config/request'

// 获取文章详情
export const getArticleDetail = id => {
    return request({
        url: '/article/detail',
        method: 'get',
        params: {
            id,
        }
    })
}

// 保存文章
export const operateArticle = data => {
    return request({
        url: '/home/addArticle',
        method: 'post',
        data,
    })
}

// 搜索文章
export const searchArticle = title => {
    return request({
        url: '/home/searchArticle',
        method: 'post',
        data: {
            title
        }
    })
}

// 获取menu
export const getMenus = () => {
    return request({
        url: '/home/navlist',
        method: 'get',
    })
}

// 获取列表
export const getList = (type = '') => {
    return request({
        url: '/home/list',
        method: 'post',
        data: {
            type,
        }
    })
}
