<template>
    <header class="header">
        <nav>
            <ul>
                <li v-for="item in navList" :key="item.title">
                    <a :href="item.url" v-text="item.title"></a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        navList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
    
</style>
