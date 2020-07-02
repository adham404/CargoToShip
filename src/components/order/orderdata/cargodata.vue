<template>
    <div id="datacontaner">
        <div id="header" >
            <img id="headericon" src="@/assets/carogicon.svg">
            <div id="headertext" >Cargo Information</div>
        </div>
        <div class="line" ></div>
        <div class="datacontaner" >
            <div class="datacard">
                <div class="dataheader">Cargo Type : </div>
                <div class="datatext">{{cargodata.cargotype}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Cargo Description : </div>
                <div class="datatext">{{cargodata.cargodescription}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Dangers Goods: </div>
                <div class="datatext">{{cargodata.dangersgoods}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Quantity : </div>
                <div class="datatext">{{cargodata.quantity}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Laoding Port : </div>
                <div class="datatext">{{cargodata.laodingport}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Discharing Port : </div>
                <div class="datatext">{{cargodata.discharingport}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Availability Date : </div>
                <div class="datatext">
                    <div>from : {{cargodata.availabilitydate[0]}}</div> <br>
                    <div>to : {{cargodata.availabilitydate[1]}}</div>
                </div>
            </div>
            <div class="datacard">
                <div class="dataheader">Freight : </div>
                <div class="datatext">{{cargodata.freight}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cargodata",
        data:()=>{
            return{
                cargodata:{
                    cargotype : 'text',
                    cargodescription : 'text',
                    dangersgoods: true,
                    quantity : 'text',
                    laodingport : 'text',
                    discharingport : 'text',
                    availabilitydate : ['22-8-2020','5-9-2020'],
                    freight :'text',
                }
            }
        }
    }
</script>

<style scoped>
    #datacontaner{
        width: 90%;
        margin: auto;
        padding: 1vw ;
    }
    #header{
        display: flex;
        align-items: center;
        margin-bottom: 1vw;

    }
    #headericon{
        width: 2.5vw;
        margin-right: 0.5vw;
        margin-left: 1vw;
    }
    #headertext{
        font-size: 1.4vw;

    }
    .line{
        width: 98%;
        margin: auto;
        border-top: 0.1vw gray solid;
    }
    .datacard{
        font-size: 1.2vw;
        display: flex;
        justify-content: start;
        align-items: start;
        margin-bottom: 1vw;
    }
    .datacontaner{
        margin-left: 2vw;
        margin-top: 2vw;
    }
    .dataheader{
        font-weight: bold;
        margin-right: 0.5vw;
    }

</style>