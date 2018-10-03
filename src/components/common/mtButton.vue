<template>
    <button 
        class="mt-btn"
        :class="[type ? 'mt-btn-' + type : '' ]" 
        @click="handleClick"
    >
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
            default: 'default'
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        }
    }
}
</script>

<style lang="scss" scoped>
$default-color: #52bab3;
$cancel-color: #888;
$cancel-hover-color: #a6a9ad;

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
    &:hover,
    &:focus,
    &:active {
        outline: none !important;
        color: #fff;
        box-shadow: none;
    }
}

.mt-btn-default {
    color: #fff;
    // border-color: $default-color;
    background-color: $default-color;
    &:hover {
        opacity: 0.75;
    }
}

.mt-btn-cancel {
    color: #fff;
    background-color: $cancel-color;
    // border-color: $cancel-color;
    &:hover {
        // border-color: $cancel-hover-color;
        background-color: $cancel-hover-color;
    }
}
</style>

