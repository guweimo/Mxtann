import Vue from 'vue'

const directives = Vue.directive('test', function (el) {
  console.log(el)
})

export default directives
