<template>
    <div>
        <div class="mark-div clear">
            <div class="mark-tips">
                <span>提示：</span>
                <span>(# ): h1-h6看#的个数;</span>
                <span>(**?**): 粗体;</span>
                <span>(*?*): 斜体</span>
            </div>
            <button class="btn btn-default mark-button" @click="showPreviewDialog">
                预览
            </button>
            <div class="mark-area">
                <textarea :value="textVal"   @input="updateValue($event)"></textarea>
            </div>
            <div class="mark-main">
                <div class="mark-text" v-html="htmlVal"></div>
            </div>
        </div>
        <div class="dialog" v-show="showDialog">
            <div class="dialog-content">
                <h1>内容预览</h1>
                <div v-html="htmlVal">
                </div>
            </div>
            <div class="dialog-backdrop" @click="showPreviewDialog"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'marktext',
    props: ['value'],
    data() {
        return {
            textVal: this.value,
            htmlVal: '',
            showDialog: false
        }
    },
    methods: {
        updateValue: function($event) {
            const value = $event.target.value
            this.$emit('input', value)
            this.textVal = value
            this.updateHtml(value)
        },
        updateHtml: function(value) {
            // this.htmlVal = value;
            this.htmlVal = '';
            let valArr = value.split('\n');
            if (value.indexOf('\n') > -1) {

                for (let item of valArr) {
                    if (item != '') {
                        this.htmlVal += this.handleMark(item) + '</br>'
                    }
                }
            } else {
                this.htmlVal = this.handleMark(value)
            }
        },
        handleMark: function(value) {
            let hEArr = [['<h1>', '</h1>'], ['<h2>', '</h2>'], ['<h3>', '</h3>'], ['<h4>', '</h4>'], ['<h5>', '</h5>'], ['<h6>', '</h6>']]
            let hE = value.match(/#{1,6} /g);
            let val = value.replace(/</g, '&lt;');
            val = val.replace(/>/g, '&gt;');
            // console.log(val);
            let result = val;
            // 判断标题
            if (hE != null && val.indexOf(hE[0]) == 0) {
                let size = hE[0].replace(' ', '').length - 1
                result = hEArr[size][0] + val.replace(hE[0], '') + hEArr[size][1];
            }

            result = result.replace(/\*\*\*(.*?)\*\*\*/g, (x, y, z) => {
                if (y.indexOf('<') > -1 && y.indexOf('>') > -1 && y.indexOf('/')) {
                    return x;
                } else {
                    return `<strong><em>${y}</em></strong>`
                }
            })

            result = result.replace(/\*\*(.*?)\*\*/g, function(x, y, z) {
                if (y.indexOf('<') > -1 && y.indexOf('>') > -1 && y.indexOf('/')) {
                    return x;
                } else {
                    return `<strong>${y}</strong>`;
                }
            });

            result = result.replace(/\*(.*?)\*/g, (x, y, z) => {
                if (y.indexOf('<') > -1 && y.indexOf('>') > -1 && y.indexOf('/') > -1) {
                    return x;
                } else {
                    return `<em>${y}</em>`;
                }
            });
            return result
        },
        showPreviewDialog: function() {
            this.showDialog = !this.showDialog;
        }
    }
}


</script>

<style lang="scss" scoped>
@import '../assets/sass/marktext';
</style>
