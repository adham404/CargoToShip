<template>
    <div>

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
        border-top: 0.2vw gray solid;

    }

    .cargoinfoordertitle{
        font-size: 1.1vw;
        font-weight: bold;
        margin-right: 0.8vw;

    }
    .cargoinfoorderdata{
        margin: 0;
        padding: 0;
        font-size: 1.1vw;
        font-weight: lighter;
    }
    .cargoinfocontaner{
        display: flex;
        margin-bottom: 0.7vw;
    }


</style>