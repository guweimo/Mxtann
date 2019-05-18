<template>
  <button class="mt-btn" @click="handleClick" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'mtButton',
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="less" scoped>
@default-color: #52bab3;
@cancel-color: #888;
@cancel-hover-color: #a6a9ad;

.mt-btn {
  // border: 1px solid transparent;
  border: 0;
  border-radius: 4px;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  font-weight: 400;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    opacity 0.15s ease-in-out;
  position: relative;
  &:hover,
  &:focus,
  &:active {
    outline: none !important;
    color: #fff;
    box-shadow: none;
  }
  &.mt-primary {
    color: #fff;
    background-color: @default-color;
    &:hover {
      opacity: 0.75;
    }
  }

  &.mt-cancel {
    color: #fff;
    background-color: @cancel-color;
    &:hover {
      background-color: @cancel-hover-color;
    }
  }
  &.mt-gradient {
    border-radius: 5px;
    border: 3px solid transparent;
    color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to right, #32a8ff 6%, #00ccb4 94%),
      linear-gradient(to bottom, #d696bc, #cd4f5d);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
}
</style>
