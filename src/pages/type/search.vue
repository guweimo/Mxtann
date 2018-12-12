<template>
    <main>
        <article-list :articleData="list" not-data-text="未找到搜索内容"></article-list>
    </main>
</template>

<script>
import articleList from '@/components/articleList'
import Bus from '@/config/bus'

export default {
    components: {
        articleList
    },
    data() {
        return {
            list: {}
        }
    },
    mounted() {
        this.search()
    },
    methods: {
        search(title) {
            this.$axios.post('/apis/home/searchArticle', {
                title: title || this.$route.params.title
            }).then( (res) => {
                if (res.data.status == 2000) {
                    this.list = res.data.data
                }
            })
        }
    }
}
</script>
