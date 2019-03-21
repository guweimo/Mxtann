<template>
  <main>
    <article-list :articleData="list"></article-list>
  </main>
</template>

<script>
import articleList from '@/components/articleList'
import { getList } from '@/apis/article'

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
    getList('1').then(res => {
      if (res.data.status == 2000) {
        this.list = res.data.data
      }
    })
  }
}
</script>
