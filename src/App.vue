<template>
    <div id="app">
        <head-nav :nav-list="listArr" ng-if="isBlogRouter"></head-nav>
        <router-view/>
    </div>
</template>

<script>
import headNav from '@/components/header/headNav'
import {mapState} from 'vuex'

export default {
    name: 'App',
    data () {
        return {
            listArr: []
        }
    },
    components: {
        headNav
    },
    computed: {
        ...mapState([
            'isBlogRouter'
        ]),
    },
}
</script>
<style lang="scss">
@import './assets/sass/base';
</style>

<!-- <style src="./assets/sass/base.css"></style> -->
