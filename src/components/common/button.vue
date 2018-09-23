<template>
    <div class="button-group">
        <button class="btn"></button>
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
$default-color: #52bab3;

.btn {
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 10px 20px;
    outline: auto;
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
}

.btn-default {
    color: #fff;
    border-color: $default-color;
    background-color: $default-color;
}
</style>

