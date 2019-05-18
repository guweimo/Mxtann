<template>
  <div class="radio-group">
    <div class="radio-item">
      <div class="radio-left-item">
        <span class="blue-radio"></span>
      </div>
      <div class="radio-right-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
    }
  },
}
</script>

<style lang="less" scoped>
.blue-radio {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  transform: border 0.3s;
}

.blue-radio-active {
  &::before {
    content: '';
  }
}
</style>
