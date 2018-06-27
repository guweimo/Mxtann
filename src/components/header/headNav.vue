<template>
    <header id="header">
        <div class="container">
            <nav>
                <ul class="menu">
                    <li id="logo">
                        <a href="/home">Mxtan</a>
                    </li>
                    <li v-for="item in navList" :key="item.title">
                        <a :href="item.url" v-text="item.title"></a>
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
        return {};
    }
};
</script>

<style lang="scss" scoped>
    #header {
        color: #fff;
        height: 45px;
        line-height: 45px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #333;
        box-shadow: 0 3px 3px -2px hsla(0,0%,0%,0.13);
        z-index: 10;
        .container {
            width: 90%;
            margin: 0 auto;
        }
    }

    .menu {
        display: flex;
        li {
            margin: 0 10px;
        }
        a {
            display: block;
            color: #ccc;
            padding: 0 10px;
            &:hover {
                color: #fff;
            }
        }
    }

    #logo {
        a {
            color: #fff;
        }
    }
</style>
