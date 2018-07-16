<template>
    <div id="sign-in">
        <div class="form">
            <form @submit.prevent="loginUser">
                <h2>登录Mxtan</h2>
                <label for="login_name">用户名</label>
                <input type="text" class="form-control input-block" id="login_name" v-model="formData.name">
                <label for="login_pass">密码</label>
                <p ng-show="isError"></p>
                <input type="password" class="form-control input-block" id="login_pass" v-model="formData.pass">
                <button class="btn btn-default">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

// 登录
export default {
    data() {
        return {
            isError: false,
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
    },
    methods: {
        ...mapMutations(['TRUE_BLOG_ROUTER', 'FALSE_BLOG_ROUTER']),
        loginUser() {
            this.$axios.post('/apis/sign/login', formData).then(res => {
                if (res.data.status == 2001) {

                } else if (res.data.status == 2000) {
                    
                }
            })
        }
    },
    destroyed() {
        this.FALSE_BLOG_ROUTER()
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
    height: 300px;
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
