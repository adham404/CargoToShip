<template>
    <div id="datacontaner">
        <div id="header" >
            <img id="headericon" src="@/assets/shipicon.svg">
            <div id="headertext" >Ship Information</div>
        </div>
        <div class="line" ></div>
        <div class="datacontaner" >
            <div  v-for=" item in shipfulldata"  v-bind:key="item.title" >
                <div class="datacard" v-if="item.type =='t/v' || item.type =='t'"  >
                    <div  class="dataheader">{{item.title}} </div>
                    <div  class="datatext">{{item.data}}</div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "shipdata",

        data:()=>{
            return{
                shipdata : {
                    charteringtype : 'text',
                    shipname : 'text',
                    nationalty : 'text',
                    portofregistry : 'text',
                    officalno : 'text',
                    typeofship : "text",
                    callsign : 'text',
                    lomnum :'text',
                    holdvolume : 5000,
                    dangersgoods :true,
                    deadweight :5000,
                    yearofbuild : '22-8-1995',
                    availabilitydate : ['22-8-2020','5-9-2020'],
                    availabilitysector : 'text',

                },
                shipfulldata : {
                    Chartering : {data :'text' , title : "Chartering Type" , type : "t/v" },
                    ShipName :  {data :'text' , title : "Ship Name" , type : "t/v" },
                    Nationality :  {data :'text' , title : "Nationality" , type : "t/v" },
                    PortOfRegistry :  {data :'text' , title : "Port Of Registry" , type : "t/v" },
                    IMO :  {data :'text' , title : "IMO" , type : "t/v" },
                    TypeOfShip :  {data :'text' , title : "Type of Ship" , type : "t/v" },
                    CallSign :  {data :'text' , title : "Call Sign" , type : "t" },
                    OfficialNo :  {data :'text' , title : "OfficialNo" , type : "t" },
                    LOA : {data :'text' , title : "LOA" , type : "t/v" },
                    HoldVolumeCubicMeter :  {data :'text' , title : "Hold Volume" , type : "t/v" },
                    ReadyToCarryDangerousGoods : {data :'text' , title : "ReadyToCarryDangerousGoods" , type : "t/v" },
                    DeadWeight : {data :'text' , title : "Dead Weight" , type : "t/v" },
                    BuildYear :  {data :'text' , title : "Build Year" , type : "t/v" },
                    Availability :  {data :'text' , title : "Availability" , type : "t/v" },
                    AvailableSectors :  {data :'text' , title : "Available Sectors" , type : "t/v" },
                    LBP :  {data :'text' , title : "LBP" , type : "t/v" },
                    Breadth :  {data :'text' , title : "Breadth" , type : "t/v" },
                    GRT :  {data :'text' , title : "GRT" , type : "t/v" },
                    NRT :  {data :'text' , title : "NRT" , type : "t/v" },
                    GrainCapacity :  {data :'text' , title : "Grain Capacity" , type : "t/v" },
                    BaleCapacity :  {data :'text' , title : "Bale Capacity" , type : "t/v" },
                    HoldType :  {data :'text' , title : "Hold Type" , type : "t/v" },
                    SummerDraft :  {data :'text' , title : "Summer Draft" , type : "t/v" },
                    AirDraft :  {data :'text' , title : "Air Draft" , type : "t/v" },
                    EconomySpeed :  {data :'text' , title : "EconomySpeed" , type : "t" },
                    EnginePower :  {data :'text' , title : "EnginePower" , type : "t" },
                    Class :  {data :'text' , title : "Class" , type : "t" },
                    SummerFreeBoard :  {data :'text' , title : "Summer Free Board" , type : "t" },
                    MouldedDepth :  {data :'text' , title : "Moulded Depth" , type : "t" },
                    MMSIno :  {data :'text' , title : "MMSI NO" , type : "t" },
                }
            }
        },

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
        font-size: 1vw;
        display: flex;
        justify-content: start;
        align-items: start;
        margin-bottom: 1vw;
    }
    .datacontaner{
        margin-left: 2vw;
        margin-top: 2vw;
        display: flex;
        flex-direction: column;
        /*justify-content: end;*/
        flex-wrap: wrap ;
        height: 28vw;
    }
    .dataheader{
        font-weight: bold;
        margin-right: 0.5vw;
    }

</style>