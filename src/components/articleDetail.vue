<template>
    <div class="aritcle-detail">
        <div class="title">
            <h2></h2>
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
        return {
            detailData: {
                title: '',
                content: '',
                author: '',
                datetime: ''
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.aritcle-detail {
    .title {

    }
}
</style>

