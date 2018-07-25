import Vue from 'vue'
import Router from 'vue-router'
import { mapMutations } from 'vuex'
import Blog from '@/pages/blog/Blog'
import Save from '@/pages/save/Save'
import markPreview from '@/pages/preview/markPreview'
import Home from '@/pages/home/home'
import signIn from '@/pages/sign/signIn'
import signUp from '@/pages/sign/signUp'
import error from '@/pages/error/error'
import notFound from '@/pages/error/404'
import jsList from '@/pages/type/jsList'
import cssList from '@/pages/type/cssList'
import vueList from '@/pages/type/vueList'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Blog },
        { path: '/save', component: Save },
        { path: '/markPreview', component: markPreview },
        { path: '/home', component: Home },
        { path: '/login', component: signIn },
        { path: '/register', component: signUp },
        { 
            path: '/error', 
            component: error, 
            children: [
                { path: '404', component: notFound }
            ]
        },
        { path: '/javascript', component: jsList },
        { path: '/css', component: cssList },
        { path: '/vue', component: vueList }
    ]
})

router.beforeEach((to, from, next) => {
    // 判断是否匹配到路由，如果不匹配则跳转到home路由，反则继续跳转到当前的路由
    if (to.matched.length == 0) {
        from.name ? next({name: from.name}) : next('/error/404') 
    } else {
        next()
    }

    const type = to.path.replace(/\//ig, '')
    router.app.$options.store.state.selectType = type
})

export default router
