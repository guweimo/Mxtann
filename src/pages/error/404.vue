<template>
    <div class="not-found" :style="styleObj">
        404 - not found
    </div>
</template>

<script>
let resizeFn = null
export default {
    data() {
        return {
            styleObj: {
                height: ''
            }
        }
    },
    mounted() {
        this.obtainWinHeight()
        resizeFn = () => {
            this.obtainWinHeight()
        }
        window.addEventListener('resize', resizeFn)
    },
    methods: {
        obtainWinHeight() {
            let wH = window.innerHeight
            this.styleObj.height = `${wH-85}px`
        }
    },
    destroyed() {
        window.removeEventListener('resize', resizeFn)
    }
}
</script>

<style lang="scss" scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    color: red;
    font-weight: bold;
    font-size: 24px;
}
</style>


