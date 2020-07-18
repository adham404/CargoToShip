<template>
  <!-- 
==========================
     container sheet
==========================
  -->
  <v-sheet
    class="white"
    style="border-radius:15px; 
    justify-content:center;
    align-self:center;
    height:40vw; width:65vw;   overflow: auto;
 "
  >
    <h2 class="font-weight-medium pb-1 mt-4" style="margin-left:100px;">My Ships</h2>
    <!-- 
==========================
     Cards Layout 
==========================
    -->
    <div class="card-info">
      <div style="width:530px; margin-bottom:50px;">
        <v-card
          @click="!AddShip"
          class="add"
          min-height="160"
          style="border-radius:31.5px; margin-right:0; background-color:#0E153A; color:white;"
        >
          <v-col align="center" justify="center">
            <h3 class="pb-2" style="font-weight:500;">Add a Ship</h3>
            <img class="i-add" src="../assets/Icon-plus.svg" alt="Plus" />
          </v-col>
        </v-card>
      </div>
      <div
        v-for="c in cards"
        :key="c"
        style="max-width:530px; max-height:300px; margin-bottom:50px; "
      >
        <ShipCard />
      </div>
      <!-- 
                ==========================
                     Add Ship Card
                ==========================
      -->
    </div>
  </v-sheet>
</template>


<script>
import ShipCard from "../components/ShipCard";

export default {
  name: "MyShip",
  components: {
    ShipCard
  },
  data() {
    return {
      show: false,
      AddShip: false,
      dialog3: false,
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Ship: {
        Name: "Ship Name",
        Availability: "1/1/2020 to 1/1/2021",
        DeadWeight: 100,
        dangerous: true,
        ChateringType: "Voyage&Time",
        ShipType: "Container Ship",
        BuildYear: 2001,
        Volume: 1000,
        Sectors: ["game", "game", "game"]
      }
    };
  },
  methods: {
    hover() {
      this.show = true;
    },
    leave() {
      this.show = false;
    }
  }
};
</script>



<style scoped>
p {
  color: black;
}
/*   
======================
    Styling Icons
======================
   */

.i-edit:hover {
  cursor: pointer;
}
.i-add {
  width: 98px;
  display: inline-block;
  /* margin-bottom: -1px; */
  margin-left: 0px;
  cursor: pointer;
}
.i-check {
  width: 20px;
  margin-bottom: -2px;
}
/*   
=========================
    Styling Card Info
=========================
   */
.card-info {
  width: 1140px;
  overflow: auto;
  /* margin: 35px; */
  flex-flow: row wrap;
  justify-content: space-between;
  display: flex;
  align-self: center;
  /* margin: 0; */
  margin: 22px 20px 0 85px;
  padding: 5px;
}
.ship-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  padding: 5px;
}

.add:hover {
  cursor: pointer;
}
</style>