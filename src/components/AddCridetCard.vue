<template>
  <v-btn outlined @click="addCard" color="primary" >Add Card</v-btn>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import firebase from "firebase";
var stripePromise = loadStripe(
  "pk_test_51IXoICJeByZuBuxO3SfLNwfj950aXljSrAuJcKDeO4b9LQQavZCpWEhcwsB4iUxnoU3yr0PBK0BuUGZiCDQpJjj300KtcAWzXW"
);
export default {
  mounted(){
    this.addCard()
  },
    methods:{
        async addCard(){
        //let self = this ;
        const stripe = await stripePromise;
        const createsetion = await firebase
        .functions()
        .httpsCallable("Session-createcheckout");


        createsetion({url: window.location.host })
          .then(res => {
            console.log(res.data);
            stripe.redirectToCheckout({ sessionId: res.data });
          }).catch(e =>{
              console.log(e)
          })
    }

    }
    

}
</script>

<style>

</style>