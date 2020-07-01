<template lang="html">
  <div class="FindContainer">
    <!-- <button type="button" name="button">Toggle</button> -->
    <div  class="FindShip">
      <p>Ships</p>
      <div class="ShipItems">
          <component class="ShipCard" :is="CurrentComponent" v-for="Loop in NumberOfLoops" v-bind:key="Loop" :IdFlag="Loop">
              <!-- Pass the directive IdFlag as a unique key to assign the ID to each ship card -->
          </component>
      </div>
    </div>
    <div class="Filter">
      <p id="FilterTitle">Filters</p>
      <FilterShip></FilterShip>
    </div>
  </div>
</template>

<script>
import ShipCard from '../components/ShipCard';  //Import The ShipCard Component
import FilterShip from '../components/FilterShip'; //Import the Filter ship form Component
// import { EventBus } from '../main.js';
export default {
  data: function(){
    return{
      NumberOfLoops:5,  //Testing Loop for number of cards
      CurrentComponent:"ShipCard"  //Current Component that  hold either the cargo card or the ship card
    }
  },
  components:{
    ShipCard,
    FilterShip
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
  width: 100%;
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
