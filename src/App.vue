<template>
  <div id="app">
    <div class="ComponentsToggle">
      <button v-on:click="Toggle">Toggle Component</button>
    </div>
    <div class="filter">
    <keep-alive>
      <component :is="CurrentComponent"></component>
    </keep-alive>
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
import Orders from "../src/views/Orders";
export default {
data() {  //For Testing purpose
      return {
      ShipData:{     //Data Object that hold the details of each card to be written in the firebase database
      ShipID:[],
      ShipFromDate:[],
      ShipToDate:[],
      ShipBuildYear:[],
      ShipType:[],
      ShipCharteringType:[],
      ShipVolume:[],
      DangerousGoods:[],
      ShipDraft:[],
      ShipWeight:[],
      ShipDistrict:[]
    },
    CurrentComponent:"FindShip",
    ShipType:["military","container","AboHamed","container","container","container","Fishing","AboLayla","navy","military","Lol"],  //Test For the Searching Algorithm
    ShipCharteringType:["Time","Voyage","Both","Voyage","Time","Voyage","Time","Both","Voyage","Time","Both"],
    ShipDistricts:["Mideterian","Carribean","Arabian Gulf","Red Sea","Carribean","Mideterian","Panama","Arabian Gulf","North Sea","The North"],
    ShipID:"",
    ShipFromDate:"",
    ShipToDate:"",
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
Toggle(){
  if(this.CurrentComponent=="FindShip")
  {
    this.CurrentComponent= "Orders"
  }
  else{
    this.CurrentComponent= "FindShip"
  }
},
Dummy(){  //Dummy Function that creaties Dummy Values for testing purposes
  for(var counter = 0; counter<10; counter++)
  {
    this.ShipData.ShipID[counter] = "SH" + 2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random()));
    // this.DateFromString = "20" + Math.floor((Math.random() * 10) + 1) + "-" + Math.floor((Math.random() * 10) + 1) + "-" + Math.floor((Math.random() * 10) + 1);
    this.ShipFromDate = "2020" + "-" + Math.floor((Math.random() * 10) + 1) + "-" + Math.floor((Math.random() * 10) + 1);
    this.ShipToDate = "2020" + "-" + Math.floor((Math.random() * 10) + 1) + "-" + Math.floor((Math.random() * 10) + 1);
    this.ShipData.ShipFromDate[counter] =  new Date(this.ShipFromDate).toISOString();
    this.ShipData.ShipToDate[counter] =  new Date(this.ShipToDate).toISOString();
    this.ShipData.ShipBuildYear[counter] = "2020";
    this.ShipData.ShipCharteringType[counter] = this.ShipCharteringType[counter];
    this.ShipData.ShipType[counter] = this.ShipType[counter];
    this.ShipData.ShipDistrict[counter]  = this.ShipDistricts[counter];
    this.ShipData.ShipVolume[counter] = 100*(2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random())));
    this.ShipData.DangerousGoods[counter] = Math.random() >= 0.5;
    this.ShipData.ShipDraft[counter] =  10*(2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random())));
    this.ShipData.ShipWeight[counter] = 10*(2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random())) + 2*(Math.floor(10 *Math.random())));
    this.ShipID = this.ShipData.ShipID[counter];
    firebase.database().ref('Ships/' + this.ShipID).set({
      Id:this.ShipData.ShipID[counter],
      DateFrom: this.ShipData.ShipFromDate[counter],
      DateTo: this.ShipData.ShipToDate[counter],
      Build: this.ShipData.ShipBuildYear[counter],
      Type: this.ShipData.ShipType[counter],
      CharteringType: this.ShipData.ShipCharteringType[counter],
      Volume: this.ShipData.ShipVolume[counter],
      DangerousGoods: this.ShipData.DangerousGoods[counter],
      Draft : this.ShipData.ShipDraft[counter],
      Weight: this.ShipData.ShipWeight[counter],
      District: this.ShipData.ShipDistrict[counter]
    });
  }
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
  FindShip,
  Orders
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
.ComponentsToggle{
  display:flex;
  flex-direction: row;
  width: 25%;
  height: 5%;
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
