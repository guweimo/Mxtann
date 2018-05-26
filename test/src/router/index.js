import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import Save from '@/components/Save'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Blog', component: Blog },
    { path: '/index', name: 'HelloWorld', component: HelloWorld },
    { path: '/save', name: 'Save', component: Save },
    { path: '/test', name: 'Test', component: Test }
  ]
})
