<template>
  <div id="app">
    <div class="filter">
      <FindShip></FindShip>
    </div>
    <div class="Testing">
        <button @click="Dummy">Create Dummy Data {{SearchText}}</button>
        <button @click="Clear">Clear Database</button>
    </div>
    <div id="map">

    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import {EventBus} from './main.js';  //Import Event Bus to send signal to the Ship card component with the DataObject value
import FindShip from "../src/views/FindShip";
export default {
data() {
      return {
      ShipData:{     //Data Object that hold the details of each card to be written in the firebase database
      ShipID:[],
      ShipDate:[],
      ShipBuildYear:[]
    },
    ShipType:["military","container","AboHamed","container","container","container","Fishing","AboLayla","navy","military","Lol"],  //Test For the Searching Algorithm
    ShipID:"",
    ShipDate:"",
    ShipBuild:"", //Data Properties to easy the operation of sending values to the database
    Type:"",
    SearchText:"A7mos"
  }
},
methods: {
  sendnow(){
    /*eslint-disable*/
    alert(this.ShipID);
},
Dummy(){  //Dummy Function that creaties Dummy Values for testing purposes
  for(var counter = 0; counter<10; counter++)
  {
    this.ShipData.ShipID[counter] = "SH" + 2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random()));
    this.ShipData.ShipDate[counter] = 2*(Math.floor(10 *Math.random())) + "/" + 2*(Math.floor(10 *Math.random())) + "/" + "2020";
    this.ShipData.ShipBuildYear[counter] = "2020";
    this.ShipID = this.ShipData.ShipID[counter];
    this.ShipDate = this.ShipData.ShipDate[counter];
    this.Type = this.ShipType[counter];
    this.ShipBuildYear = this.ShipData.ShipBuildYear[counter];
    firebase.database().ref('Ships/' + this.ShipID).set({
      Id:this.ShipID,
      date: this.ShipDate,
      Build: this.ShipBuildYear,
      Type: this.Type
    });
  }
  // console.log(this.ShipData.ShipID);
  EventBus.$emit("ShipDataSent",this.ShipData.ShipID);  //Emit signal containing Ship ids to the Parent component of the Ship cards
},
Clear(){
  firebase.database().ref('Ships/').remove();
}
},
mounted(){
  alert(simplemaps_worldmap.mapdata.main_settings.current_id)
  EventBus.$on("SearchFunction",(value)=>{
      this.SearchText = value;
  })  //Recieve the Signal from the Child component Filter.vue

},
components:{
  FindShip
}
}
</script>



<style>
*{
  padding: 0;
  margin: 0;
}
p{
  font-family:'Roboto', sans-serif;
  color: black;
}
#map{
  /* position: absolute; */
  /* z-index: -1; */
}
.filter{
  /* position: absolute; */
  margin-bottom: 5%;
  z-index: 0;
}
#app{
  display: flex;
  flex-direction: column;
}
.Testing{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom:5%;
}
</style>
