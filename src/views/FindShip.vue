<template lang="html">
  <div class="FindContainer">
    <!-- <button type="button" name="button">Toggle</button> -->
    <div  class="FindShip">
      <p>Ships || {{FilteredIds[0]}} </p>
      <div class="ShipItems">
          <component  class="ShipCard" v-for="Id in FilteredIds" v-bind:key="Id" :is="CurrentComponent"  :IdFlag="Id">
              <!-- Pass the directive IdFlag as a unique key to assign the ID to each ship card -->
          </component>
      </div>
    </div>
    <div class="Filter">
      <FilterShip></FilterShip>
    </div>
  </div>
</template>

<script>
import ShipCard from '../components/ShipCard';  //Import The ShipCard Component
import FilterShip from '../components/FilterShip'; //Import the Filter ship form Component
import { EventBus } from '../main.js';
// import firebase from 'firebase';

export default {
  data: function(){
    return{
      // NumberOfLoops:5,  //Testing Loop for number of cards
      CurrentComponent:"ShipCard",  //Current Component that  hold either the cargo card or the ship card
      SearchText:"",  //Filter the listed array according to this search item
      FilteredIdsTwo:[],
      FilteredIds:""  //Data Object that holds the ID of each card
    }
  },
  components:{
    ShipCard,
    FilterShip
  },
  methods:{

  },
  mounted(){
    let self = this;

    EventBus.$on("SendFilter",(value)=>{
      self.FilteredIds = value;
      console.log("The Recieved keys are: ")
      console.log(self.FilteredIds);
    })  //Recieve the Signal from the Child component Filter.vue with the ID of the filtered objects
    console.log("The Recieved keys again are: ")
    console.log(self.FilteredIds);

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
  margin-top: 5%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  border-radius: 0.5vw;
}
.ShipCard{
  width: 98%;
  height: 35%;
}
.FindShip{
  width: 48%;
  height: 100%;
  /* border: 2px solid #ccc; */
}
.FindShip p{
  margin-bottom: 2%;
  text-align: center;
  font-size: 2vw;
}
.ShipItems{
  width: 90%;
  height: 80%;
  margin-left: 5%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: block;
  /* flex-direction: column; */
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
