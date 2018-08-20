import Vue from 'vue'
import messageVue from './message'

const defaults = {
    show: false,
    content: '',
    duration: 3000,
    type: ''
}

const messageVueConstructor = Vue.extend(messageVue)

messageVueConstructor.prototype.close = function() {
    // 重写过渡效果结束方法
    this.afterLeave = () => {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
        this.$destroy()
    }
    this.show = false
}

const messageBox = (options = {}) => {
    if (Vue.prototype.$isServer) {
        return ;
    }
    options = Object.assign({}, defaults, options)
    let parent = document.body
    let instance = new messageVueConstructor({
        el: document.createElement('div'),
        data: options
    })
    parent.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.show = true
        setTimeout(() => {
           instance.close()
        }, options.duration);
    })

    return instance
}

export default messageBox