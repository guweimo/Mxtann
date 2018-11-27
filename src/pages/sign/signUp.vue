<template>
    <div id="sign-up">
        <div class="form">
            <form @submit.prevent="register">
                <h2>注册</h2>
                <div class="register-item">
                    <label for="register_name">用户名</label>
                    <input type="text" class="form-control input-block" id="register_name" v-model.trim="formData.name" required placeholder="请输入用户名" @blur="validName" @keyup="keyupName">
                    <p class="error" v-text="nameError"></p>
                </div>
                <div class="register-item">
                    <label for="register_email">邮箱</label>
                    <input type="email" class="form-control input-block" id="register_email" v-model.trim="formData.email" required placeholder="email@email.com" @blur="validEmail" @keyup="keyupEmail">
                    <p class="error" v-text="emailError"></p>
                </div>
                <div class="register-item">
                    <label for="register_pass">密码</label>
                    <input type="password" class="form-control input-block" id="register_pass" v-model="formData.pass" placeholder="请输入密码" required  @blur="validPass" @keyup="keyupPass">
                    <p class="error" v-text="passError"></p>
                </div>
                <mt-button class="mt-primary" type="submit">注册</mt-button>
            </form>
        </div>
    </div>
</template>

<script>
import mtButton from '@/components/common/mtButton'

let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
    components: {
        mtButton
    },
    data() {
        return {
            formData: {
                name: '',
                pass: '',
                email: ''
            },
            nameError: '',
            emailError: '',
            passError: ''
        }
    },
    mounted() {
        let body = document.querySelector('body')
        body.className = 'body-no-padding'
        let app = document.querySelector('#app')
        app.className = 'h100p'
    },
    computed: {
        validation() {
            return {
                name: !!this.formData.name.trim() &&
                    this.formData.name.trim().length > 5,
                email: emailRE.test(this.formData.email),
                pass: this.formData.pass.length >= 6 &&
                    this.formData.name.length <= 21
            }
        },
        isValid() {
            let validation = this.validation
            return Object.keys(validation).every(key => validation[key])
        }
    },
    methods: {
        register() {
            if (this.isValid) {
                this.$axios.post('/apis/sign/registerUser', this.formData).then(res => {
                    if (res.data.status === 2000) {
                        this.$router.replace('/login')
                    } else {
                        if (res.data.type) {
                            this[`${res.data.type}Error`] = res.data.message
                        }
                    }
                })
            } else {

            }
        },
        validName() {
            this.nameError = ''
            
            if (this.formData.name.trim() == '') {
                this.nameError = '用户名不能为空'
            } else if (this.formData.name.trim().length < 5  || this.formData.name.trim().length > 20) {
                this.nameError = '用户名不能小于5位，大于20位！'
            } 
        },
        validEmail() {
            if (!emailRE.test(this.formData.email.trim())) {
                this.emailError = '邮箱格式不正确！'
            }
        },
        validPass() {
            if (this.formData.pass.length === 0) {
                this.passError = '密码不能为空！'
            }
            else if (this.formData.pass.length < 6 || this.formData.pass.length > 20) {
                this.passError = '密码不能小于6位，大于20位！'
            }
        },
        keyupName() {
            this.nameError = ''
        },
        keyupEmail(value) {
            this.emailError = ''
        },
        keyupPass() {
            this.passError = ''
        }
    },
    destroyed() {
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
        font-size: 1.71rem;
        font-weight: 300;
    }
    label {
        display: block;
        margin-bottom: 7px;
    }
    input {
        margin-top: 7px;
    }
    button {
        width: 100%;
        margin-top: 15px;
    }
}
</style>
