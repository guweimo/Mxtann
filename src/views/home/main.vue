<template>
  <div class="main-page">
    <head-nav :nav-list="navData"></head-nav>
    <router-view/>
    <footer-col></footer-col>
  </div>
</template>

<script>
import headNav from '@/components/header/headNav'
import footerCol from '@/components/footer/footerCol'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  components: {
    headNav,
    footerCol
  },
  created() {
    this.getUserInfo()
  },
  computed: {
    ...mapState(['navData'])
  },
  mounted() {
    this.GET_NAV_DATA()
  },
  methods: {
    ...mapMutations(['GET_NAV_DATA']),
    ...mapActions(['getUserInfo'])
  }
}
</script>
