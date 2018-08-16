<template>
    <div class="container">
        <div class="form-content">
            <form>
                <h2>新建博文</h2>
                <div class="form-group">
                    <label class="form-top-item"><span class="form-star">*</span>标题</label>
                    <input type="text" class="form-control" v-model="formData.title">
                </div>
                <div class="form-group">
                    <label class="form-top-item"><span class="form-star">*</span>类型</label>
                    <select class="form-bottom-item form-control" v-model="formData.type">
                        <option disabled value="">请选择</option>
                        <option v-for="item in navData" :key="item.n_id" :value="item.n_id" v-text="item.title"></option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-top-item"><span class="form-star">*</span>内容</label>
                    <mavon-editor class="form-bottom-item" v-model="formData.marktext" :toolbars="toolbar" @change="obtainHTML"></mavon-editor>
                </div>
                <div class="form-bottom">
                    <button type="button" class="btn btn-cancel" @click="cancel">取消</button>
                    <button type="button" class="btn btn-default" @click="saveArticle">提交</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Save',
    components: {
        mavonEditor
    },
    data() {
        return {
            formData: {
                marktext: '',
                description: '',
                title: '',
                type: ''
            },
            toolbar: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                // link: true, // 链接
                // imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                // save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            }
        }
    },
    computed: {
        ...mapState(['navData'])
    },
    methods: {
        obtainHTML(text, html) {
            this.formData.description = html
        },
        cancel() {
            this.$router.replace('/home')
        },
        saveArticle() {
            this.formData.title = this.formData.title.trim()
            this.$axios.post('/apis/home/addArticle', this.formData).then(function(re) {

            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-content {
        width: 80%;
        margin: 0 auto;
        background-color: #fff;
        padding: 50px;
        border-radius: 5px;
        box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.3);
        h2 {
            text-align: center;
            margin-bottom: 10px;
        }
    }
    .form-group {
        margin-bottom: 10px;
        label {
            display: block;
        }
        .form-top-item {
            margin-bottom: 10px;
        }
        input {
            display: block;
            width: 100%;
        }
        select {
            display: block;
            width: 100%;
        }
        .form-star {
            color: red;
            padding-right: 2px;
            vertical-align: middle;
            font-family: verdana;
        }
    }
    .form-bottom {
        text-align: center;
        margin-top: 30px;
        button:first-of-type {
            margin-right: 50px;
        }
    }
    @media screen and (max-width: 768px) {
        .form-content {
            width: 100%;
            padding: 10px;
        }
    }
</style>
