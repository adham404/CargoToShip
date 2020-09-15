<template lang="html">
  <div class="FindContainer">
    <!-- <button type="button" name="button">Toggle</button> -->
    <keep-alive>
      <component :is="CurrentComponent"></component>
    </keep-alive>
  <div id="SliderSwap">
    <svg :style="ShipIconStyle" @click="GoToShip" id="ShipIcon" xmlns="http://www.w3.org/2000/svg" width="29" height="25.637" viewBox="0 0 29 25.637"><g transform="translate(0 -35.488)"><path d="M9.586,50.541a39.85,39.85,0,0,1-6.943,2.908V48.306a1.209,1.209,0,0,1,.529-1l1.981-1.347a1.423,1.423,0,0,1,.68-.209h3.18V43.877h3.579V45.75h2.742a.806.806,0,0,1,.806.806v1.114A51.055,51.055,0,0,0,9.586,50.541Zm-.573-8.514V43h3.579v-.972a.9.9,0,0,0-.9-.9H9.915A.9.9,0,0,0,9.013,42.027ZM6.935,39.192a1.846,1.846,0,0,0,.725-.148,1.357,1.357,0,0,0,1.559.505c0,.025-.008.049-.008.075a.863.863,0,1,0,.863-.863h0A1.39,1.39,0,0,0,8.787,36.84c-.026,0-.049.006-.075.008a1.849,1.849,0,1,0-1.778,2.345Zm18.13,18.13a.809.809,0,0,0,0,.895l1.067,1.6a.841.841,0,0,1-.764,1.305L1.631,59.257a1.519,1.519,0,0,1-1.35-1.131A7.623,7.623,0,0,1,0,56.3c0-1.239.5-1.47,1.517-1.713,9.111-2.174,11.616-7.414,26.818-8.272a.631.631,0,0,1,.66.715A27.135,27.135,0,0,1,25.065,57.322ZM23.9,53.406a.4.4,0,1,0-.806,0,1.381,1.381,0,0,1-.981,1.317V51.945a.918.918,0,1,0-.806,0v2.775a1.381,1.381,0,0,1-.981-1.317.4.4,0,1,0-.806,0,2.19,2.19,0,0,0,4.381,0Z"/></g></svg>
    <svg :style="CargoIconStyle" @click="GoToCargo" id="CargoIcon" xmlns="http://www.w3.org/2000/svg" width="56.774" height="35.185" viewBox="0 0 56.774 35.185"><g transform="translate(0 -5.063)"><path d="M5.5,5.177.553,8.4A2.248,2.248,0,0,0,0,10.125V35.187a2.248,2.248,0,0,0,.553,1.728L5.5,40.134Z"/><path d="M54.771,8.469,7,5.063V40.248l47.771-3.406a1.974,1.974,0,0,0,2-1.767V10.237a1.974,1.974,0,0,0-2-1.767ZM17.248,31.527a2.02,2.02,0,0,1-2.2,1.774,2.02,2.02,0,0,1-2.2-1.774V13.785a2.02,2.02,0,0,1,2.2-1.774,2.02,2.02,0,0,1,2.2,1.774Zm11.711-1.183a2.02,2.02,0,0,1-2.2,1.774,2.02,2.02,0,0,1-2.2-1.774V14.968a2.02,2.02,0,0,1,2.2-1.774,2.02,2.02,0,0,1,2.2,1.774ZM40.67,29.161a2.246,2.246,0,0,1-4.392,0V16.15a2.246,2.246,0,0,1,4.392,0Zm10.248-.591a2.246,2.246,0,0,1-4.392,0V17.333a2.246,2.246,0,0,1,4.392,0Z" transform="translate(0)"/></g></svg>
  </div>
  <!-- <button id="SliderSwap">7enksh</button> -->
    <div class="Filter">
      <component :is="FilterComponent"></component>
    </div>
  </div>
</template>

<script>
// import ShipCard from '../components/ShipCard';  //Import The ShipCard Component
import ShipList from "../components/FindShipsComponents/ShipList";
import CargoList from "../components/FindCargoComponents/CargoList";
import FilterShip from '../components/FindShipsComponents/FilterShip'; //Import the Filter ship form Component
import FilterCargo from '../components/FindCargoComponents/FilterCargo'; //Import the Filter ship form Component
// import { EventBus } from '../main.js';
// import firebase from 'firebase';

export default {
  data: function(){
    return{
      // NumberOfLoops:5,  //Testing Loop for number of cards
      CurrentComponent:"ShipList",  //Current Component that  hold either the cargo card or the ship card
      FilterComponent:"FilterShip",
      CargoIconStyle:{
          opacity:""
      },
      ShipIconStyle:{
          opacity:""
      }
      // SearchText:"",  //Filter the listed array according to this search item
      // FilteredIdsTwo:[],
      // FilteredIds:""  //Data Object that holds the ID of each card
    }
  },
  components:{
    ShipList,
    CargoList,
    FilterShip,
    FilterCargo
  },
  methods:{
    GoToShip: function()
    {
      this.CurrentComponent = ShipList;
      this.FilterComponent = FilterShip;
      this.ShipIconStyle.opacity = 1;
      this.CargoIconStyle.opacity = 0.5;
    },
    GoToCargo: function()
    {
      this.CurrentComponent = CargoList;
      this.FilterComponent = FilterCargo;
      this.ShipIconStyle.opacity = 0.5;
      this.CargoIconStyle.opacity = 1;
    }


  }
  // mounted(){
  //   let self = this;

  //   EventBus.$on("SendFilter",(value)=>{
  //     self.FilteredIds = value;
  //     console.log("The Recieved keys are: ")
  //     console.log(self.FilteredIds);
  //   })  //Recieve the Signal from the Child component Filter.vue with the ID of the filtered objects
  //   console.log("The Recieved keys again are: ")
  //   console.log(self.FilteredIds);

  // }
}
</script>

<style lang="css" scoped>
*{
  padding: 0;
  margin: 0;
}
.FindContainer{
  width: 82vw;
  margin-left: 9vw;
  height: 40vw;
  /* margin-top: 5%; */
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  border-radius: 0.5vw;
  /* border: 1px solid #ccc; */
}
.Filter{
  width: 48%;
  height: 100%;
}
#FilterTitle{
  margin-bottom: 2%;
  text-align: center;
  font-size: 2vw;
}
#SliderSwap{
  height: 3vw;
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid #ccc; */

  /* margin-left: 45%; */
  /* margin-top: 10%; */
  /* top:400px; */
}
#CargoIcon{
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 1vw ;
  background-color: #1E5788;
  cursor: pointer;
  opacity: 0.5;
}
#ShipIcon{
  width: 45%;
  cursor: pointer;
  background-color: #1E5788;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 1vw ;
  height: 70%;
}

/* .FilterWithFind{
  display: flex;
  flex-direction: column;
} */
</style>
