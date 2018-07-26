<template>
    <main>
        <article-list :articleData="list"></article-list>
    </main>
</template>

<script>
import articleList from '@/components/articleList'
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
        this.$axios.post('/apis/home/list').then(res => {
            if (res.data.status == 2000) {
                this.list = res.data.data
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
