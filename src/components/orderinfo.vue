<template>
    <div>
        <div class="flexheader"><div class="number">#</div>
            <div class="titel">Order Info</div>
        </div>
        <hr/>
        <div class="cargoinfocontaner"><div class="cargoinfoordertitle">Cargo Number</div>  <div class="cargoinfoorderdata"> data</div></div>
        <div class="cargoinfocontaner"><div class="cargoinfoordertitle">Cargo Type</div>  <div class="cargoinfoorderdata"> data</div></div>
        <div class="cargoinfocontaner"><div class="cargoinfoordertitle">Dangerous Goods</div>  <div class="cargoinfoorderdata"> data</div></div>
        <div class="cargoinfocontaner"><div class="cargoinfoordertitle">Landing Port</div>  <div class="cargoinfoorderdata"> data</div></div>
        <div class="cargoinfocontaner"><div class="cargoinfoordertitle">Freight</div>  <div class="cargoinfoorderdata"> data</div></div>
        <div id="cargopricetitle">The Price</div>
        <div class="cargoprice">{{price}}$</div>
    </div>
</template>

<script>
    export default {
        name: "cargoinfo",
        data:()=>{
            return{
                price : '6'
            }
    }
    }
</script>

<style scoped>

    .cargoinfoordertitle{
        font-size: 1.4vw;
        font-weight: bold;
        margin-right: 0.8vw;

    }
    .cargoinfoorderdata{
        margin: 0;
        padding: 0;
        font-size: 1.4vw;
        font-weight: lighter;
    }
    .cargoinfocontaner{
        display: flex;
        margin-bottom: 0.7vw;
    }
    .cargoprice{
        width: 100%;
        text-align: center;
        font-size: 4vw;
        color: darkblue;

    }
    #cargopricetitle{
        width: 100%;
        text-align: center;
        font-size: 2vw;
    }

</style>