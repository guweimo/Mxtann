<template>
  <div class="markdown-container">
    <div class="mark-div clearfix">
      <div class="mark-tips" v-show="showTips">
        <div>提示：</div>
        <ul>
          <li>(# ): h1-h6看#的个数</li>
          <li>(**?**): 粗体</li>
          <li>(*?*): 斜体</li>
          <li>(__?__): 强调（strong）</li>
          <li>[?](?): 链接</li>
          <li>>?: 引用</li>
        </ul>
      </div>
      <button class="btn btn-default mark-button" @click="showPreviewDialog">
        预览
      </button>
      <div class="mark-area">
        <textarea :value="textVal" @input="updateValue($event)"></textarea>
      </div>
      <div class="mark-main">
        <div class="mark-text markdowm-body" v-html="htmlVal"></div>
      </div>
    </div>
    <div class="dialog" v-show="showDialog">
      <div class="dialog-content">
        <h2>内容预览</h2>
        <div class="markdowm-body" v-html="htmlVal"></div>
      </div>
      <div class="dialog-backdrop" @click="showPreviewDialog"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marktext',
  props: {
    value: String,
    showTips: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      textVal: this.value,
      htmlVal: '',
      showDialog: false,
    }
  },
  methods: {
    updateValue($event) {
      const value = $event.target.value
      this.$emit('input', value)
      this.textVal = value
      this.updateHtml(value)
    },
    updateHtml(value) {
      // this.htmlVal = value;
      this.htmlVal = ''
      let valArr = value.split('\n')
      if (value.indexOf('\n') > -1) {
        for (let item of valArr) {
          if (item != '') {
            this.htmlVal += this.handleMark(item) + '</br>'
          }
        }
        // this.htmlVal = this.handleMark(value);
      } else {
        this.htmlVal = this.handleMark(value)
      }
    },
    handleMark(value) {
      let hEArr = [
        ['<h1>', '</h1>'],
        ['<h2>', '</h2>'],
        ['<h3>', '</h3>'],
        ['<h4>', '</h4>'],
        ['<h5>', '</h5>'],
        ['<h6>', '</h6>'],
      ]
      let hE = value.match(/#{1,6} /g)
      let val = value.replace(/</g, '&lt;')
      val = val.replace(/>/g, '&gt;')
      // console.log(val);
      let result = val
      // 判断标题
      if (hE != null && val.indexOf(hE[0]) == 0) {
        let size = hE[0].replace(' ', '').length - 1
        result = hEArr[size][0] + val.replace(hE[0], '') + hEArr[size][1]
      }

      // 把__?__内容转成<strong>?</strong>
      result = result.replace(/^__(.*?)__$/, `<strong>$1</strong>`)

      // 把[?](?)转成a标签链接。
      result = result.replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2">$1</a>`)

      // 把 >?转成引用<blockquote></blockquote>
      result = result.replace(
        /^&gt;(.*?)$/g,
        `<blockquote><p>$1</p></blockquote>`,
      )

      // 转成加粗并斜体
      result = result.replace(/\*\*\*(.*?)\*\*\*/g, (x, y) => {
        if (y.indexOf('<') > -1 && y.indexOf('>') > -1 && y.indexOf('/')) {
          return x
        } else {
          return `<strong><em>${y}</em></strong>`
        }
      })

      // 转成加粗
      result = result.replace(/\*\*(.*?)\*\*/g, function(x, y) {
        if (y.indexOf('<') > -1 && y.indexOf('>') > -1 && y.indexOf('/')) {
          return x
        } else {
          return `<strong>${y}</strong>`
        }
      })

      // 转成斜体
      result = result.replace(/\*(.*?)\*/g, (x, y) => {
        if (y.indexOf('<') > -1 && y.indexOf('>') > -1 && y.indexOf('/') > -1) {
          return x
        } else {
          return `<em>${y}</em>`
        }
      })
      return result
    },
    showPreviewDialog() {
      this.showDialog = !this.showDialog
    },
  },
}
</script>

<style lang="less" scoped>
@border-color: #cecece;
@border-style: 1px solid @border-color;
@min-height: 500px;
@min-width: 45%;
@max-width: 100%;

.pos-fixed {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.mark-div {
  margin: 0 5%;
  padding-top: 20px;
  textarea {
    border: @border-style;
    border-radius: 5px;
    resize: none;
    padding: 20px 10px;
    font-size: 14px;
    box-sizing: border-box;
    width: @max-width;
    min-height: @min-height;
  }
}
.mark-tips {
  padding: 10px;
  border: @border-style;
  margin-bottom: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2.5em;
    li {
      padding: 0.5em;
      color: #fff;
      margin: 0.5em;
      border-radius: 0.4em;
      background-color: #9ce8ed;
    }
  }
}
.mark-main {
  float: right;
  width: @min-width;
  height: @min-height;
}
.mark-text {
  border: @border-style;
  text-align: left;
  padding: 20px;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  height: @max-width;
  box-sizing: border-box;
}
.mark-button {
  display: none;
  margin-top: 10px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .mark-area {
    width: @min-width;
    float: left;
  }
}
@media (max-width: 768px) {
  .mark-main {
    display: none;
  }
  .mark-button {
    display: inline;
  }
  .mark-area {
    width: @max-width;
    float: left;
  }
}

.dialog {
  position: fixed;
}
.dialog-backdrop {
  z-index: 1;
  .pos-fixed();
  background-color: #222;
  opacity: 0.5;
}
.dialog-content {
  z-index: 10;
  width: 90%;
  height: 90%;
  margin: auto;
  .pos-fixed();
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 1.3%;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
