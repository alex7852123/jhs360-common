<template>
    <header class="header scrollable-header" v-if="!inApp">
        <a @click="toView('home')">
            <i class="back fa fa-angle-left"></i>
        </a>
        {{title}}
    </header>
</template>
<script>
export default {
    name: 'm-header',
    props: {
        title:String,
        isBack: {
            type: Boolean,
            default: true
        }
    },
    mounted(){
        if(window.hsbank){
            window.hsbank.setTitle(this.title)
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
    background-color: #e0b41a;
    color: #fff;
    .back {
        color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        line-height: 50px;
        padding: 0 15px;
        font-size: 30px;
    }
}
</style>
