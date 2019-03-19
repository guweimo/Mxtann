<template>
  <div class="checbox-group">
    <div class="checbox-item">
      <div class="checbox-left-item">
        <span class="blue-checbox"></span>
      </div>
      <div class="checbox-right-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.blue-checkbox {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  position: relative;
}

.blue-checkbox-active {
  border: 1px solid #ccc;
  background: #33e;
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: -2px;
    left: 5px;
    width: 4px;
    height: 12px;
    border: 2px solid transparent;
    border-bottom-color: #fff;
    border-right-color: #fff;
    transform: rotate(45deg);
    transform-origin: center center;
  }
}
</style>
