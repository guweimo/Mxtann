<template>
  <div class="dropdown">
    <slot></slot>
    <span></span>
    <ul>
      <li v-for="item in list" :key="item.id"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
