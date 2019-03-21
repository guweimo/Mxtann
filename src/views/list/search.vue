<template>
  <main>
    <article-list :articleData="list" not-data-text="未找到搜索内容"></article-list>
  </main>
</template>

<script>
import articleList from '@/components/articleList'
import { mapState, mapMutations } from 'vuex'
import { searchArticle } from '@/apis/article'

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
  computed: {
    ...mapState(['searchTitle'])
  },
  methods: {
    search(title) {
      let data = title || this.$route.params.title
      searchArticle(data).then(res => {
        const resData = res.data
        if (resData.status == 2000) {
          this.list = resData.data
        }
      })
    }
  },
  watch: {
    searchTitle: function(newVal, oldVal) {
      this.search(newVal)
    }
  }
}
</script>
