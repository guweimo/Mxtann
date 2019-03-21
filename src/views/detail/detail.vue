<template>
  <div class="container">
    <div class="detail" v-if="Object.keys(detailData).length != 0">
      <article-detail :detailData="detailData"></article-detail>
    </div>
  </div>
</template>

<script>
import articleDetail from '@/components/articleDetail'
import { getArticleDetail } from '@/apis/article'

export default {
  components: {
    articleDetail
  },
  data() {
    return {
      detailData: {}
    }
  },
  mounted() {
    this.obtionDetailData()
  },
  methods: {
    // 获取博文详情
    obtionDetailData() {
      getArticleDetail(this.$route.params.id).then(res => {
        if (res.data.status === 2000) {
          this.detailData = res.data.data
        } else {
          this.$router.replace('/error/404')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
