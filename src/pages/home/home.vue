<template>
    <head-nav :nav-list="listArr"></head-nav>
</template>

<script>
import headNav from '@/compoents/header/head'

export default {
    components: {
        head
    },
    data() {
        return {
            listArr: []
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
