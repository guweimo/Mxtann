<template>
    <div id="sign-up">
        <div class="form">
            <form @submit.prevent="register">
                <h2>注册</h2>
                <label for="register_name">用户名</label>
                <input type="text" class="form-control input-block" id="register_name" v-model="formData.name" required placeholder="请输入用户名">
                <label for="register_email">邮箱</label>
                <input type="email" class="form-control input-block" id="register_email" v-model="formData.email" required placeholder="email@email.com">
                <label for="register_pass">密码</label>
                <input type="password" class="form-control input-block" id="register_pass" v-model="formData.pass" placeholder="请输入密码" required>
                <p v-show="!ispass"></p>
                <button class="btn btn-default">注册</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                pass: '',
            },
            ispass: true
        }
    },
    mounted() {
        this.TRUE_BLOG_ROUTER()
        let body = document.querySelector('body')
        body.className = 'body-no-padding'
    },
    computed: {
        validation() {
            return {
                name: !!this.formData.name.trim() && this.formData.name.trim().length > 5,
                email: emailRE.test(this.formData.email),
                pass: this.formData.pass.length >= 6 && this.formData.name.length <= 21
            }
        },
        isValid() {
            let validation = this.validation
            return Object.keys(validation).every( (key) => validation[key] )
        }
    },
    methods: {
        ...mapMutations([
            'TRUE_BLOG_ROUTER',
            'FALSE_BLOG_ROUTER'
        ]),
        register() {
            // if (this.isValid) {

            // }
        }
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
        min-height: 400px;
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

