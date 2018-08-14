<template>
    <div class="container">
        <div class="detail" v-if="Object.keys(detailData).length != 0">
            <article-detail :detailData="detailData"></article-detail>
        </div>
    </div>
</template>

<script>
import articleDetail from '@/components/articleDetail'

export default {
    components: {
        articleDetail
    },
    data() {
        return {
            detailData: {}
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

