<template>
    <div id="sign-in">
        <div class="form">
            <h2>登录Mxtan</h2>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

// 登录
export default {
    data() {
        return {}
    },
    mounted() {
        this.TRUE_BLOG_ROUTER();
        let body = document.querySelector('body');
        body.className = 'body-no-padding';
    },
    methods: {
        ...mapMutations([
            'TRUE_BLOG_ROUTER',
            'FALSE_BLOG_ROUTER'
        ])        
    },
    destroyed() {
        this.FALSE_BLOG_ROUTER();
    }
}
</script>

<style lang="scss" scoped>
    $color-default: #5C4FB4;
    $color-green: #52bab3;

    #sign-in {
        background: $color-default;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form {
        width: 300px;
        height: 300px;
        border: 1px solid #d8dee2;
        background: #eee;
        border-radius: 1%;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0);
        h2 {
            text-align: center;
            padding: 10px 0;
            color: $color-green;
        }
    }
</style>
