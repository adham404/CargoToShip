<template>
    <div id="paypalcontaner" >
        <img src="@/assets/cc-paypal-brands.svg">
        <div>After clicking “Confirm Order”, you will be redirected to PayPal to complete your purchase securely.</div>
    </div>
    
</template>

<script>
    export default {
        name: "paypal"
    }
</script>

<style scoped>
    #paypalcontaner{
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 15vw;
        opacity: 40%;
    }
    #paypalcontaner div{
        opacity: 70%;
        font-size: 1.4vw;
        width: 80%;
        text-align: center;
    }


</style>