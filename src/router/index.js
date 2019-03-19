import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/pages/blog/Blog'
import Save from '@/pages/save/Save'
import markPreview from '@/pages/preview/markPreview'
import Home from '@/pages/home/home'
import Main from '@/pages/home/main'
import signIn from '@/pages/sign/signIn'
import signUp from '@/pages/sign/signUp'
import error from '@/pages/error/error'
import notFound from '@/pages/error/404'
import jsList from '@/pages/type/jsList'
import cssList from '@/pages/type/cssList'
import vueList from '@/pages/type/vueList'
import search from '@/pages/type/search'
import detail from '@/pages/detail/detail'
import test from '@/pages/test/test'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Blog
    },
    {
      path: '/login',
      component: signIn
    },
    // { path: '/register', component: signUp },
    {
      path: '/main',
      component: Main,
      children: [{
          path: '/home',
          component: Home
        },
        {
          path: '/markPreview',
          component: markPreview
        },
        {
          path: '/save',
          component: Save
        },
        {
          path: '/error',
          component: error,
          children: [{
            path: '404',
            component: notFound
          }]
        },
        {
          path: '/javascript',
          component: jsList
        },
        {
          path: '/css',
          component: cssList
        },
        {
          path: '/vue',
          component: vueList
        },
        {
          path: '/search/:title',
          component: search
        },
        {
          name: 'article',
          path: '/article/:id',
          component: detail
        },
        {
          path: '/test',
          component: test
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$message({
    close: true,
  })

  // 判断是否匹配到路由，如果不匹配则跳转到home路由，反则继续跳转到当前的路由
  if (to.matched.length == 0) {
    from.name ? next({
      name: from.name
    }) : next('/error/404')
  } else {
    next()
  }

  const type = to.path.replace(/\//ig, '')
  router.app.$options.store.state.selectType = type
})

export default router
