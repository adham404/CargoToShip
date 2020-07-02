<template>
    <div id="datacontaner">
        <div id="header" >
            <img id="headericon" src="@/assets/shipicon.svg">
            <div id="headertext" >Ship Information</div>
        </div>
        <div class="line" ></div>
        <div class="datacontaner" >
            <div class="datacard">
                <div class="dataheader">Chartering Type : </div>
                <div class="datatext">{{shipdata.typeofship}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Type Of Ship : </div>
                <div class="datatext">{{shipdata.charteringtype}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Hold Volume: </div>
                <div class="datatext">{{shipdata.holdvolume}} M³</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Year Of Build : </div>
                <div class="datatext">{{shipdata.yearofbuild}}</div>
            </div>
            <div class="datacard">
                <div class="dataheader">Availability Date : </div>
                <div class="datatext">
                    <div>from : {{shipdata.availabilitydate[0]}}</div> <br>
                    <div>to : {{shipdata.availabilitydate[1]}}</div>
                     </div>
            </div>
            <div class="datacard">
                <div class="dataheader">Availability Sector : </div>
                <div class="datatext">{{shipdata.availabilitysector}}</div>
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