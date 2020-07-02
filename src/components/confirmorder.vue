<template>
    <div id="contaner">
        <div class="paymenttype" >
            <router-link :to ="{name : 'Creditcard' }">
                <div class="paymentmathed" id="card" ><img class="paymentlogo" src="@/assets/credit-card.svg"><div class="paymenttext">Credit Card</div></div>
            </router-link>
            <router-link :to ="{name : 'paypal' }">
                <div class="paymentmathed" id="paypal"><img class="paymentlogo" src="@/assets/paypal-icon.svg"><div class="paymenttext">PayPal</div></div>
            </router-link>
        </div>
        <div id="flex">
            <router-view></router-view>

            <div class="card" id="finalcard">
                <cargoinfo></cargoinfo>
                <div id="confirmorder" >Confirm Order</div>
            </div>
        </div>
    </div>
</template>

<script>
 import cargoinfo from "./orderinfo";
 // import creditcardinputdata from "./creditcardinputdata";
    export default {
        components: {
            cargoinfo,

        },
        name: "confirmorder",
        data(){
            return {

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