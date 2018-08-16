<template>
    <div class="aritcle-detail">
        <div class="title">
            <h1 v-text="detailData.title"></h1>
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
}
</style>

