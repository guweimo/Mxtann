import {
    TRUE_BLOG_ROUTER, 
    FALSE_BLOG_ROUTER
} from './mutation-types'

export default {
    [TRUE_BLOG_ROUTER] (state) {
        state.isBlogRouter = true;
    },
    [FALSE_BLOG_ROUTER] (state) {
        state.isBlogRouter = false;
    }
}