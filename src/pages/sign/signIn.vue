<template>
    <div id="sign-in">
        <div class="form">
            <form @submit.prevent="loginUser">
                <h2>登录Mxtan</h2>
                <label for="login_name">用户名</label>
                <input type="text" class="form-control input-block" id="login_name" v-model="formData.name" @keyup="cancelError">
                <label for="login_pass">密码</label>
                <input type="password" class="form-control input-block" id="login_pass" v-model="formData.pass" @keyup="cancelError">
                <p class="error" ng-show="isError" v-text="errorText"></p>
                <button class="btn btn-default">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { setStore } from '@/config/unit'

// 登录
export default {
    data() {
        return {
            isError: false,
            errorText: '',
            formData: {
                name: '',
                pass: ''
            }
        }
    },
    mounted() {
        this.TRUE_BLOG_ROUTER()
        let body = document.querySelector('body')
        body.className = 'body-no-padding'
        let app = document.querySelector('#app')
        app.className = 'h100p'
    },
    methods: {
        ...mapMutations(['TRUE_BLOG_ROUTER', 'FALSE_BLOG_ROUTER']),
        loginUser() {
            const tip = this.validation()
            if (tip) {
                return false
            }
            
            this.$axios.post('/apis/sign/loginUser', this.formData).then(res => {
                if (res.data.status == 2001) {
                    this.isError = true
                    this.errorText = res.data.message
                } else if (res.data.status == 2000) {
                    setStore(res.data.data)
                    this.$router.go(-1)
                }
            })
        },
        cancelError() {
            this.errorText = ''
            this.isError = false
        },
        validation() {
            let tips = false
            if (this.formData.name == '' || this.formData.pass == '') {
                this.isError = true
                this.errorText = '用户名或密码不能为空！'
                tips = true
            }
            return tips
        }
    },
    destroyed() {
        this.FALSE_BLOG_ROUTER()
        let body = document.querySelector('body')
        body.className = ''
        let app = document.querySelector('#app')
        app.className = ''
    }
}
</script>

<style lang="scss" scoped>
$color-default: #5c4fb4;
$color-green: #52bab3;

#sign-in {
    background: $color-green;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form {
    width: 300px;
    min-height: 300px;
    border: 1px solid #d8dee2;
    background: #eee;
    border-radius: 1%;
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;
    h2 {
        text-align: center;
        // color: $color-default;
        font-weight: 300;
        font-size: 24px;
        margin-bottom: 20px;
    }
    label {
        display: block;
        margin-bottom: 7px;
    }
    input:first-of-type {
        margin-top: 7px;
        margin-bottom: 15px;
    }
    button {
        width: 100%;
        // margin-top: 25px;
        margin-top: 0.285rem;
    }
    p {
        margin-top: 0.357rem;
    }
}
</style>
