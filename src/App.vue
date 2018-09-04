<template>
    <div id="app">
        <head-nav :nav-list="navData" v-if="!isBlogRouter"></head-nav>
        <router-view/>
        <footer-col v-if="!isBlogRouter"></footer-col>
    </div>
</template>

<script>
import headNav from '@/components/header/headNav'
import footerCol from '@/components/footer/footerCol'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
        headNav,
        footerCol
    },
    created() {
        this.getUserInfo()
    },
    computed: {
        ...mapState(['isBlogRouter', 'navData'])
    },
    mounted() {
        this.GET_NAV_DATA()
    },
    methods: {
        ...mapMutations(['GET_NAV_DATA']),
        ...mapActions(['getUserInfo']),
    }
}
</script>
<style lang="scss">
@import './assets/sass/base';
</style>
