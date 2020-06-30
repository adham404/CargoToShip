<template>
    <div id="contaner">
        <div class="paymenttype" >
            <router-link :to ="{name : 'Creditcard' }">
                <div class="paymentmathed" id="card" ><img class="paymentlogo" src="@/assets/cc-visa-brands.svg"><div class="paymenttext">Credit Card</div></div>
            </router-link>
            <router-link :to ="{name : 'paypal' }">
                <div class="paymentmathed" id="paypal"><img class="paymentlogo" src="@/assets/paypal-brands.svg"><div class="paymenttext">PayPal</div></div>
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

<style  >
    a{
        text-decoration: none;
    }
    .paymenttext{
        text-decoration: none;
        color: black;
    }
    #card img{
        padding-top: 0.8vw;
    }
    .paymentlogo{
        width: 2.1vw;
    }
    #confirmorder{
        margin-top: 2vw;
        margin-left: 7vw;
        font-weight: bold;
        font-size: 1.4vw;
        background-color: #039be5;
        border-radius: 2vw;
        padding: 0.4vw 1vw 0.4vw 1vw;
        text-align: center;
        width: 11vw;

    }
    .paymenttype{
        display: flex;
        justify-content: center;
    }
    .paymentmathed{

        font-size: 1.3vw;
        border: lightgray 4px solid;
        border-radius: 1vw;
        width: 10vw;
        text-align: center;
        height: 5vw;
        margin-right: 2vw;

        margin-top: 2vw;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .flex{
        display: flex;
        justify-content: space-between;
    }
    #contaner{
        font-family: Roboto;
        width: 77vw;
        height: 40.4vw;
        background-color: #ECEFF1;
        margin: auto;
        border-radius: 19px;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%);

    }
    #flex{
        display: flex;
        padding: 2vw 4vw 2vw 4vw ;

    }
    .card{
        width: 23vw ;
        padding-right: 1vw ;
        margin-right: 1vw;
        border-right: black solid 1px ;
    }
    #finalcard{
        padding-right: 0;
        margin-right:0 ;
        border-right: none;
    }
    .flexheader{
        display: flex;
        justify-content: left;
        align-items: center;

    }
    .number{
        font-size: 2vw;
        padding-right: 0.5vw ;
    }
    .titel{
        font-size: 1.5vw;
    }
    hr{
        margin: 0.5vw 0vw 0.5vw 0vw;

    }
    .inputdata{
        display: flex;
        flex-direction: column;
        padding-bottom: 0.8vw ;
    }
    .inputdata h{
        font-size: 1.2vw;
    }
    .inputdata input{
        margin-top: 0.5vw;
        outline: none;
        height: 2vw;
        border: none;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%) ;
    }
    .inputdata select{
        margin-top: 0.5vw;
        outline: none;
        height: 2.2vw;
        border: none;
        box-shadow: 0px 3px 6px rgba(0,0,0,16%) ;
    }
    .flex input{
        width: 10.2vw;
    }
    .termscard{
        font-size: 1.3vw;
    }
</style>