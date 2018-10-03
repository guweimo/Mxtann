<template>
    <button class="btn btn-default" @click="handleClick">
        <slot />
    </button>
</template>


<script>
export default {
    name: 'mtButton',
    data() {
        return {}
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

.btn {
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 10px 20px;
    // outline: auto;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    font-weight: 400;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    transform: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover, &:focus, &:active {
        outline: none !important;
        color: #fff;
        box-shadow: none;
    }
}

.btn-default {
    color: #fff;
    border-color: $default-color;
    background-color: $default-color;
    &:hover {
        opacity: 0.75;
    }
}
</style>

