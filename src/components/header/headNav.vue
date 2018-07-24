<template>
    <header id="header">
        <div class="container">
            <nav>
                <ul class="menu">
                    <li id="logo">
                        <router-link to="/home">Mxtan</router-link>
                    </li>
                    <li v-for="item in navList" :key="item.title">
                        <router-link :to="item.url" v-text="item.title">Mxtan</router-link>
                    </li>
                    <li class="search">
                        <input type="text" class="form-control" placeholder="请搜索博文">
                    </li>
                    <li>
                        <button class="btn btn-default" @click="gotoSave">发布</button>
                    </li>
                    <li>
                        <div class="sign">
                            <router-link to="/login" class="a-inline">登录</router-link>
                            <router-link to="/register" class="a-inline">注册</router-link>
                        </div>
                        <div class="user-info" v-if="false">
                            <img class="avatar" height="20" width="20">
                            <span class="dropdown-caret"></span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        navList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {}
    },
    methods: {
        gotoSave() {
            this.$router.push('/save')
        }
    }
}
</script>

<style lang="scss" scoped>
#header {
    color: #fff;
    height: 45px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    box-shadow: 0 3px 3px -2px hsla(0, 0%, 0%, 0.13);
    z-index: 2333;
    .container {
        margin-top: 0;
    }
}

.menu {
    display: flex;
    align-items: center;
    li {
        margin: 0 10px;
        vertical-align: middle;
        &:last-of-type {
            margin-left: auto;
        }
        & input {
            background: #eee;
            display: block;
        }
        &.search {
            margin-left: 20px;
        }
    }
    a {
        display: block;
        color: #ccc;
        padding: 0 10px;
        &:hover {
            color: #fff;
        }
        &.a-inline {
            display: inline-block;
        }
    }
}

.user-info {
    .dropdown-caret {
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: middle;
        content: "";
        border: 4px solid;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        margin-top: 5px;
    }
    
    .avatar {
        vertical-align: middle;
        margin-right: 3px;
        border-radius: 4px;
    }
}


#logo {
    a {
        color: #fff;
    }
}
</style>
