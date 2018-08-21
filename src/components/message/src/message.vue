<template>
    <transition name="mei-message-fade" @after-leave="afterLeave">
        <div v-if="show" :class="[
        'mei-message',
        type? `mei-message-${ type }` : '']">
            <span class="mei-message-con">{{content}}</span>
        </div>
    </transition>
</template>

<script>
const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
}

export default {
    data() {
        return {
            show: false,
            content: '',
            type: ''
        }
    },
    computed: {
        iconClass() {
            return this.type
                ? `mei-message-icon mei-icon-${typeMap[this.type]}`
                : ''
        }
    },
    methods: {
        // 绑定过渡效果结束
        afterLeave() {
        }
    }
}
</script>

<style lang="scss" scoped>
    .mei-message {
        position: fixed;
        left: 50%;
        top: 50px;
        border-radius: 4px;
        min-width: 300px;
        transform: translateX(-50%);
        background-color: #edf2fc;
        transition: opacity .3s, transform .4s;
        overflow: hidden;
        padding: 15px;
        z-index: 2334;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .mei-message-success {
        background-color: #83dc73;
        color: #fff;
    }

    .mei-message-error {
        background-color: #ff5000;
        color: #fff;
    }

    .mei-message-warning {
        background-color: #ccc;
    }

    .mei-message-icon {
        display: inline-block;
        width: 40px;
        height: 40px;
    }

    .mei-message-con {
        display: inline-block;
    }

    .mei-message-fade-enter-active {
        transition: all 0.3s linear;
    }

    .mei-message-fade-leave-active {
        transition: all 0.3s linear;
    }

    .mei-message-fade-enter, .mei-message-fade-leave-to {
        opacity: 0;
    }

</style>
