<template>
    <main>
        <div class="container">
            <div class="col-main">
                <div class="main-wrap">
                    <div class="page-content">
                        <div class="article">
                            <h1>
                                <a>移动端上的设计和适配</a>
                            </h1>
                            <div class="article-header">
                                <div class="">
                                    作者：<span>fasdfa</span>
                                    日期：<span>2018-06-22</span>
                                </div>
                            </div>
                            <div class="body-content">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1360px;
        padding: 0 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-top: 20px;
    }
    .page-content {
        background: #fff;
        padding: 20px;
        margin: 0 0 20px;
        border: 1px solid #ddd;
        position: relative;
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
    }
    .article-header {
        margin-bottom: 10px;
        font-size: 14px;
        color: #ccc;
        padding-bottom: 5px;
        border-bottom: 1px dashed #ddd;
    }
</style>
