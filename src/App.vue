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
            // this.$axios.get('/static/Serivce/nav.json').then(re => {
            //     if (re.status == 200) {
            //         this.listArr = re.data
            //     }
            // })
            this.$axios.get('http://localhost:3000/add/navlist').then(re => {

            })
        }
    }
}
</script>
<style lang="scss">
@import './assets/sass/base';
</style>
