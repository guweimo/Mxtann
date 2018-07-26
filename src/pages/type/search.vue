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
        
    }
}
</script>

