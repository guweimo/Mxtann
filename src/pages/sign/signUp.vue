<template>
    <div id="sign-up">
        <div class="form">
            <form>
                <h2>注册</h2>
                <label for="register_name">用户名</label>
                <input type="text" class="form-control input-block" id="register_name">
                <label for="register_email">邮箱</label>
                <input type="email" class="form-control input-block" id="register_email">
                <label for="register_pass">密码</label>
                <input type="password" class="form-control input-block" id="register_pass">
                <button class="btn btn-default">注册</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {}
    },
    mounted() {
        this.TRUE_BLOG_ROUTER();
        let body = document.querySelector('body')
        body.className = 'body-no-padding'
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
    #sign-up {
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $color-green;
    }
    .form {
        width: 300px;
        height: 400px;
        background: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 7px 5px 5px rgba(0, 0, 0, 0.2);
        border: 1px solid #d8dee2;
        h2 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 300;
        }
        label {
            display: block;
            margin-bottom: 7px;
        }
        input {
            margin-top: 7px;
            margin-bottom: 15px;
        }
        button {
            width: 100%;
            margin-top: 15px;
        }
    }
</style>

