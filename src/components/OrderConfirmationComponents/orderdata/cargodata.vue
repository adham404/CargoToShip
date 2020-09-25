<template>
    <div id="datacontaner">
        <div id="header" >
            <img id="headericon" src="@/assets/carogicon.svg">
            <div id="headertext" >Cargo Information</div>
        </div>
        <div class="line" ></div>
        <div class="datacontaner" >
            <div  v-for=" item in cargofulldata"  v-bind:key="item.title">
                <div class="datacard" v-if="item.data && item.title "  >
                    <div class="dataheader">{{item.title}} </div>
                    <div class="datatext">{{item.data}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        props:['itemId'],
        name: "cargodata",
        mounted() {
            let self = this
            let cargoid = self.id
            firebase.database().ref('/Cargo/' + cargoid).once('value').then(function(snapshot) {
                // console.log(snapshot.val())
                let indexx = Object.keys(self.cargofulldata);
                let objsize = Object.keys(self.cargofulldata).length
                console.log(objsize)
                let i ;
                for (i = 0 ;i < objsize ; i++){
                    console.log('pop')
                    self.cargofulldata[indexx[i]].data =  snapshot.val()[indexx[i]]
                }
                if (snapshot.val().DangerousGoods){
                    firebase.database().ref('/DangerousGoods/' + cargoid).once('value').then(function(snapshot) {
                        // console.log(snapshot.val())
                        let indexx = Object.keys(snapshot.val());
                        let objsize = Object.keys(snapshot.val()).length
                        console.log(` snapshot size ${objsize}`)
                        console.log(indexx)
                        let i ;
                        for (i = 0 ;i < objsize ; i++){
                            console.log('pop')
                            self.cargofulldata[indexx[i]].data =  snapshot.val()[indexx[i]]
                        }
                    });

                }
                // ...
            });
        },
        data:()=>{
            return{

                cargofulldata : {
                    CargoID : {data :'' , title : "" , type : "t/v" },
                    CargoType : {data :'' , title : "CargoType" , type : "t/v" },
                    CargoDescription :  {data :'' , title : "CargoDescription" , type : "t/v" },
                    DangerousGoods :  {data :'' , title : "DangerousGoods" , type : "t/v" },
                    CargoQuantity :  {data :'' , title : "CargoQuantity" , type : "t/v" },
                    LoadingPort :  {data :'' , title : "LoadingPort" , type : "t/v" },
                    DischargingPort :  {data :'' , title : "DischargingPort" , type : "t/v" },
                    Availability :  {data :'' , title : "Availability" , type : "t" },
                    Freight :  {data :'' , title : "Freight" , type : "t" },
                    Corrosive : {data :'' , title : "Corrosive" , type : "t/v" },
                    DangerousWhenWet :  {data :'' , title : "DangerousWhenWet" , type : "t/v" },
                    Explosive : {data :'' , title : "Explosive" , type : "t/v" },
                    FlammableGas : {data :'' , title : "FlammableGas" , type : "t/v" },
                    FlammableLiquid :  {data :'' , title : "FlammableLiquid" , type : "t/v" },
                    FlammableSolid :  {data :'' , title : "FlammableSolid" , type : "t/v" },
                    InfectiousSubstance :  {data :'' , title : "InfectiousSubstance" , type : "t/v" },
                    MarinePollutant :  {data :'' , title : "MarinePollutant" , type : "t/v" },
                    Miscellaneous :  {data :'' , title : "Miscellaneous" , type : "t/v" },
                    NonflammableCompressedGas :  {data :'' , title : "NonflammableCompressedGas" , type : "t/v" },
                    OrganicPeroxide :  {data :'' , title : "OrganicPeroxide" , type : "t/v" },
                    OxidizingAgent :  {data :'' , title : "OxidizingAgent" , type : "t/v" },
                    Radioactive :  {data :'' , title : "Radioactive" , type : "t/v" },
                    SpontaneouslyCombustible :  {data :'' , title : "SpontaneouslyCombustible" , type : "t/v" },
                    ToxicGas :  {data :'' , title : "ToxicGas" , type : "t/v" },
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
        display: flex;
        flex-direction: column;
        /*justify-content: end;*/
        flex-wrap: wrap ;
        height: 28vw;
        margin-left: 2vw;
        margin-top: 2vw;
    }
    .dataheader{
        font-weight: bold;
        margin-right: 0.5vw;
    }

</style>