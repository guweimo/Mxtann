<template>
    <div class="container">
        <div class="col-main">
            <div class="main-wrap" v-if="articleData.result && articleData.result.length > 0">
                <div class="page-content" v-for="item in articleData.result" :key="item.id">
                    <div class="article">
                        <h1>
                            <!-- <a v-text="item.title" ></a> -->
                            <router-link v-text="item.title" :to="{name: 'article', params: {id: item.id}}"></router-link>
                            
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
            <div class="main-not-content" v-if="articleData.result && articleData.result.length == 0" :style="styleObj">
                <div v-text="notDataText">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let resizeFn = null

export default {
    data() {
        return {
            styleObj: {
                height: ''
            }
        }
    },
    props: {
        articleData: {
            type: Object,
            default: {}
        },
        notDataText: {
            type: String,
            default: '暂无内容'
        }
    },
    mounted() {
        this.obtainWinHeight()
        resizeFn = () => {
            this.obtainWinHeight()
        }
        window.addEventListener('resize', resizeFn)
    },
    methods: {
        obtainWinHeight() {
            let wH = window.innerHeight
            this.styleObj.height = `${wH-85}px`
        }
    },
    destroyed() {
        window.removeEventListener('resize', resizeFn)
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

.main-not-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    font-weight: bold;
    color: rgb(216, 38, 106);
}
</style>

