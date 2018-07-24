<template>
    <main>
        <div class="container">
            <div class="col-main">
                <div class="main-wrap" v-if="list.length > 0">
                    <div class="page-content" v-for="item in list" :key="item.id">
                        <div class="article">
                            <h1>
                                <a v-text="item.title"></a>
                            </h1>
                            <div class="article-header">
                                <div class="">
                                    作者：
                                    <span v-text="item.author"></span>
                                    日期：
                                    <span v-text="item.date"></span>
                                </div>
                            </div>
                            <div class="body-content">
                                <div class="">
                                    <p v-html="item.description"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-wrap">
                    <div></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            list: []
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
.page-content {
    background: #fff;
    padding: 20px;
    margin: 0 0 20px;
    border: 1px solid #ddd;
    position: relative;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 2px 2px 8px hsla(0, 0%, 0%, 0.13);
    }
}
.article {
    h1 {
        margin: 0 0 15px;
        a {
            display: block;
            font-size: 24px;
            transition: color 0.3s ease;
        }
    }
    p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 25px;
    }
}
.article-header {
    margin-bottom: 10px;
    font-size: 14px;
    color: #ccc;
    padding-bottom: 5px;
    border-bottom: 1px dashed #ddd;
}
</style>
