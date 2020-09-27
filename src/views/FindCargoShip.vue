<template lang="html">
  <div class="FindContainer">
    <!-- <button type="button" name="button">Toggle</button> -->
    <keep-alive>
      <component :is="CurrentComponent"></component>
    </keep-alive>
    <div class="Filter">
      <component :is="FilterComponent"></component>
    </div>
    <button @click="Close">X</button>    
  </div>
</template>

<script>
// import ShipCard from '../components/ShipCard';  //Import The ShipCard Component
import ShipList from "../components/FindShipsComponents/ShipList";
import CargoList from "../components/FindCargoComponents/CargoList";
import FilterShip from '../components/FindShipsComponents/FilterShip'; //Import the Filter ship form Component
import FilterCargo from '../components/FindCargoComponents/FilterCargo'; //Import the Filter ship form Component
import { EventBus } from '../main';
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
    Close()
    {
      EventBus.$emit("Close");
    }

  },
  mounted(){

        EventBus.$on("Toogle",(value) => {
          if(value == "Ship")
          {
          this.CurrentComponent = ShipList;
          this.FilterComponent = FilterShip;
          }
          else if(value == "Cargo")
          {
          this.CurrentComponent = CargoList;
          this.FilterComponent = FilterCargo;
          }
        })
// let self = this;

    // EventBus.$on("SendFilter",(value)=>{
    //   self.FilteredIds = value;
    //   console.log("The Recieved keys are: ")
    //   console.log(self.FilteredIds);
    // })  //Recieve the Signal from the Child component Filter.vue with the ID of the filtered objects
    // console.log("The Recieved keys again are: ")
    // console.log(self.FilteredIds);

  }
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
.FindContainer button{
  margin-top: 0;
  background-color: #3542bd;
  color: white;
  height: 5%;
  font-size: 1.4vw;
  width: 2.5%;
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
</style>
