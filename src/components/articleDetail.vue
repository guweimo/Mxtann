<template>
    <div class="aritcle-detail">
        <div class="title">
            <h1 v-text="detailData.title"></h1>
        </div>
        <div class="info">
            <div class="info-submitted">
                作者：<span v-text="detailData.author"></span>
                日期：<span v-text="detailData.dateTime"></span>
            </div>
            <div class="info-tags">

            </div>
        </div>
        <div class="content">
            <div class="markdown-body" v-html="detailData.content">

            </div>
        </div>
    </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'

export default {
    data() {
        return {}
    },
    props: {
        detailData: {
            type: Object,
            default: {}
        }
    }
}
</script>


<style lang="scss" scoped>
.aritcle-detail {
    .title {
        text-align: center;
        h1 {
            color: #29B4F0;
        }
    }
    .content {
        margin: 20px 0;
    }
    .info {
        color: #ccc;
        border-bottom: 1px dashed #ccc;
        padding-bottom: 5px;
        font-size: 0.929rem;
        display: flex;
    }
}
</style>

