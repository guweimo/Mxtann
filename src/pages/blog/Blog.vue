
<template>
    <div class="blog-div">
        <div class="blog-align">
            <div class="blog-logo">
            </div>
            <h2>谷维陌</h2>
            <ul class="clearfix blog-ul">
                <li v-for="item in urlList" v-bind:key="item.title">
                    <a :href="item.url" :target="item.target" v-text="item.title"></a>
                    <!-- <router-link :to="item.url" v-text="item.title"></router-link> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Blog',
    data() {
        return {
            urlList: [
                {
                    url: 'https://github.com/guweimo',
                    title: 'github',
                    target: '_blank'
                },
                {
                    url: 'https://www.jianshu.com/u/bdaa10098256',
                    title: '简书',
                    target: '_blank'
                },
                {
                    url: '/home',
                    title: 'home',
                    target: '_self'
                }
            ]
        }
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
        ]),
    },
    destroyed () {
        this.FALSE_BLOG_ROUTER();
    }
}
</script>

<style lang="scss" scoped>
    $px-10: 10px;
    $color-default: #5C4FB4; // #52bab3
    $font-color: #fff; // .blog-div {text-align: center;}

    .blog-div {
        display: flex;
        flex-direction: column;
        background-color: $color-default;
        min-height: 100%;
        align-items: center;
        justify-content: center;
    }

    .blog-align {
        h2 {
            color: $font-color;
            text-align: center;
            margin-bottom: 20px;
        }
    }

    .blog-ul {
        text-align: center;

        a {
            text-decoration: none;
            color: $font-color;
        }

        li {
            display: inline;

            &:not(:last-of-type) {
                margin-right: $px-10;

                &::after {
                    content: '|';
                    padding-left: $px-10;
                    color: $font-color;
                }
            }
        }
    }

    .blog-logo {
        height: 200px;
        width: 200px;
        background-image: url("../../assets/picture.jpg");
        background-repeat: no-repeat;
        border-radius: 50%;
        margin-bottom: 20px;
        border: 4px solid #ccc;
    }
</style>
