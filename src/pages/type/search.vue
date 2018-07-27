<template>
    <main>
        <article-list :articleData="list"></article-list>
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
        Bus.$on('searchTitle', (e) => {
            this.search(e)
        })
    },
    methods: {
        search(title) {
            this.$axios.post('/apis/home/searchArticle', {
                title: title || this.$route.params.title
            }).then(function (res) {

            })
        }
    }
}
</script>

