import request from '../utils/request'

// 获取文章详情
export const getArticleDetail = id => {
  return request({
    url: '/article/detail',
    method: 'get',
    params: {
      id,
    },
  })
}

// 保存文章
export const addBlog = data => {
  return request({
    url: '/app/save',
    method: 'post',
    data,
  })
}

// 搜索文章
export const getTypeList = () => {
  return request({
    url: '/app/getType',
    method: 'get',
  })
}
