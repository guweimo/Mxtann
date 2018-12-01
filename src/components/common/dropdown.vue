<template>
    <div class="dropdown">
        <span></span>
        <slot></slot>
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
    },
}
</script>

<style lang="scss" scoped>
    
</style>
