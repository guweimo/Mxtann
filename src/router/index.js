import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/pages/blog/Blog'
import Save from '@/pages/save/Save'
import markPreview from '@/pages/preview/markPreview'
import Home from '@/pages/home/home'
import signIn from '@/pages/sign/signIn'
import signUp from '@/pages/sign/signUp'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Blog },
        { path: '/save', component: Save },
        { path: '/markPreview', component: markPreview },
        { path: '/home', component: Home },
        { path: '/login', component: signIn },
        { path: '/signUp', component: signUp },
    ]
})
