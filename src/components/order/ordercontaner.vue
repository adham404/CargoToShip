<template>
    <div id="ordercontaner" >
        <div id="linkscont">
            <router-link :to="{name : 'orderinfo'}" >Ship details</router-link>
            <router-link :to="{name : 'orderpayment'}">Payment</router-link>
        </div>
        <div id="re">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ordercontaner"
    }
</script>

<style scoped>
    a{
        color: #ECEFF1;
        text-decoration: none;
        background-color:#04437A;
        font-size: 1.1vw;
        font-weight: bold;
        font-family: Roboto;
        padding:0.8vw 0.8vw 0.3vw 0.8vw;
        border-radius: 1.5vw 1.5vw 0vw 0vw;
        opacity: 36%;
    }
    #linkscont{
        margin-left: 15vw;
        /*height:2.7vw ;*/
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .router-link-active{
       opacity: 100%;

    }

</style>