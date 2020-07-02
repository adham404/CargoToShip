<template>
    <div id="contaner">
        <div class="paymenttype" >
                <div class="paymentmathed" id="card" v-on:click="()=>{this.show = true}" ><img class="paymentlogo" src="@/assets/credit-card.svg"><div class="paymenttext">Credit Card</div></div>
                <div class="paymentmathed" id="paypal" v-on:click="()=>{this.show = false}"><img class="paymentlogo" src="@/assets/paypal-icon.svg"><div class="paymenttext">PayPal</div></div>
        </div>
        <div id="flex">
            <creditcardinputdata v-if="show"></creditcardinputdata>
            <paypal v-if="!show"></paypal>

            <div class="card" id="finalcard">
                <cargoinfo></cargoinfo>
                <div id="confirmorder" >Confirm Order</div>
            </div>
        </div>
    </div>
</template>

<script>
    import creditcardinputdata from "./creditcardinputdata";
    import paypal from "./paypal";
 import cargoinfo from "@/components/order/confirmorder/orderinfo";
    export default {
        components: {
            cargoinfo,
            creditcardinputdata,
            paypal

        },
        name: "confirmorder",
        data(){
            return {
                show : true,

                idata : {
                    name : null,
                    email : null,
                    addres : null,
                    country : null,
                    city : null,
                    zipcode : null,
                    cardname : null,
                    cardnumber : null,
                    cardexpdate : null ,
                    cardcvv : null ,
                    termsandcond : null,
                },
            }
    },
        methods: {

        }
    }
</script>

<style scoped >
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    #confirmorder{
        margin-top: 2vw;
        margin-left: 7vw;
        font-weight: bold;
        font-size: 1.2vw;
        background-color: #039be5;
        border-radius: 2vw;
        padding: 0.4vw 1vw 0.4vw 1vw;
        text-align: center;
        width: 11vw;

    }
    .paymenttext{
        text-decoration: none;
        color: black;
    }
    a{
        text-decoration: none;
    }
    #contaner{
        font-family: Roboto ;
        width: 77vw;
        height: 40.4vw;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 3vw;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);

    }
    .paymenttype{
        display: flex;
        justify-content: center;
    }
    .paymentmathed{
        cursor: pointer;
        font-size: 1.3vw;
        border: lightgray 0.1vw solid;
        box-shadow: 0vw 0.2vw 0.4vw rgba(0,0,0,16%) ;
        border-radius: 1vw;
        width: 8vw;
        text-align: center;
        height: 5vw;
        margin-right: 2vw;

        margin-top: 2vw;
    }
    .paymentlogo{
        width: 2.1vw;
        margin-top: 0.4vw;
    }
    #flex{
        display: flex;
        padding: 2vw 4vw 2vw 4vw ;

    }
    #finalcard{
        padding-right: 0;
        margin-right:0 ;
        border-right: none;
    }
    .card{
        width: 23vw ;
        padding-right: 1vw ;
        margin-right: 1vw;
        border-right: black solid 1px ;
    }


</style>