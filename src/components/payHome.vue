<template>
    <div>
        <div class="payHeader">
            <i @click="sjyfh" style="font-size:0.4rem;float:left;margin-top:0.15rem;" class="el-icon-arrow-left"></i>
            <span>确认付款</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"payHome",
        methods: {
            sjyfh(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .payHeader{
        text-align: center;
        line-height: 0.7rem;
        box-sizing: border-box;
        font-size: 0.26rem;
        height: 0.7rem;
        border-bottom:1px solid #ccc;
    }
</style>