
<template>
<div class="blog-div">
    <div class="blog-align">
        <div class="blog-logo">
        </div>
        <h2>谷维陌</h2>
        <ul class="clear blog-ul">
            <li v-for="item in urlList">
                <a :href="item.url" :target="item.target" v-text="item.title"></a>
                <!-- <router-link :to="item.url" v-text="item.title"></router-link> -->
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
            urlList: [{
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
                    url: '/save',
                    title: 'save',
                    target: '_self'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/blog';
</style>
