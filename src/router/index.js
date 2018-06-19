import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/pages/blog/Blog'
import Save from '@/pages/save/Save'
import markPreview from '@/pages/preview/markPreview'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Blog', component: Blog },
        { path: '/save', name: 'Save', component: Save },
        { path: '/markPreview', name: 'markPreview', component: markPreview },
    ]
})
