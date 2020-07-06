<template>
    <div>
        <div id="contaner">
            <shipdata v-if="this.itemid[0] == 's'"></shipdata>
            <cargodata v-if="this.itemid[0] == 'c'" ></cargodata>

            <router-link :to="{name : 'orderpayment'}" id="paymentbutton" >Proceed to payment</router-link>
        </div>
    </div>
</template>

<script>
    import shipdata from "./shipdata";
    import cargodata from "./cargodata";
    export default {
        name: "orderdata",
        components:{
          shipdata,
          cargodata,
        },
        data:()=>{
            return{
                itemid : 'c'
            }
        },

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    a{
        text-decoration: none;
    }
    #paymentbutton{
        position:absolute;
        bottom: 3vw;
        right: 5vw;
        font-weight: bold;
        font-size: 1.2vw;
        background-color: #06457C;
        color: #ECEFF1;
        padding: 0.5vw 1vw 0.5vw 1vw;
        border-radius: 1vw;
        cursor: pointer;
    }
    #contaner{
        position: relative;
        font-family: Roboto  ;
        width: 77vw;
        height: 40.4vw;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 2vw;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);

    }

</style>