<template>
    <div id="app">
        <head-nav :nav-list="listArr" v-if="!isBlogRouter"></head-nav>
        <router-view/>
        <footer-col v-if="!isBlogRouter"></footer-col>
    </div>
</template>

<script>
import headNav from '@/components/header/headNav'
import footerCol from '@/components/footer/footerCol'
import { mapState } from 'vuex'

export default {
    name: 'App',
    data() {
        return {
            listArr: []
        }
    },
    components: {
        headNav,
        footerCol
    },
    computed: {
        ...mapState(['isBlogRouter'])
    },
    mounted() {
        this.getListData()
    },
    methods: {
        getListData: function() {
            this.$axios.get('/apis/home/navlist').then(re => {
                if (re.data.status == 2000) {
                    this.listArr = re.data.data
                }
            })
        }
    }
}
</script>
<style lang="scss">
@import './assets/sass/base';
</style>
