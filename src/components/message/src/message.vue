<template>
    <transition name="mei-message-fade">
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
    }
}
</script>

<style lang="scss" scoped>
    .mei-message {
        position: fixed;
        left: 50%;
        top: 20px;
        border-radius: 4px;
        min-width: 300px;
        transform: translateX(-50%);
        background-color: #edf2fc;
        transition: opacity .3s, transform .4s;
        overflow: hidden;
        padding: 15px 15px 15px 20px;
    }

    .mei-message-success {
        background-color: rab(87, 161, 87);
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
        line-height: 40px;
        height: 40px;
        display: inline-block;
        margin-left: 10px;
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

