<template>
    <div class="radio-group">
        <div class="radio-item">
            <div class="radio-left-item">
                <span class="blue-radio"></span>
            </div>
            <div class="radio-right-item">
            </div>
        </div>
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
.blue-radio {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: relative;
    transform: border .3s;
}

.blue-radio-active {
    
}
</style>
