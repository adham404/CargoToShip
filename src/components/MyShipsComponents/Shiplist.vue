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
    height:90vh; width:100%;   overflow: auto;
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
          @click="addShip"
          class="add"
          min-height="160"
          style="border-radius:31.5px; margin-right:0; background-color:#0E153A; color:white;"
        >
          <v-col align="center" justify="center">
            <h3 class="pb-2" style="font-weight:500;">Add a Ship</h3>
            <img class="i-add" src="../../assets/Icon-plus.svg" alt="Plus" />
          </v-col>
        </v-card>
      </div>
      <div
        v-for="s in this.keys "
        :key="s"
        style="max-width:530px; max-height:300px; margin-bottom:50px; "
      >
        <ShipCard :index="s" :Ship="Ship"  />
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
import ShipCard from "@/components/MyShipsComponents/ShipCard";
import firebase from "firebase";
import { EventBus } from "@/main";
export default {
  name: "MyShip",
  components: {
    ShipCard
  },
  data() {
    return {
      show: false,
      AddShip: true,
      dialog3: false,
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      // Ship: {
      //   Name: "Ship Name",
      //   Availability: "1/1/2020 to 1/1/2021",
      //   DeadWeight: 100,
      //   dangerous: true,
      //   ChateringType: "Voyage&Time",
      //   ShipType: "Container Ship",
      //   BuildYear: 2001,
      //   Volume: 1000,
      //   Sectors: ["game", "game", "game"]
      // }
      Ship: {},
      keys: [],
      ShipIds: [],
      ShipData: {},
      I: {},
      ShipTime: {},
      keysTime: []
    };
  },
  methods: {
    hover() {
      this.show = true;
    },
    leave() {
      this.show = false;
    },
    // editShip(edit, Ship, Index) {
    //   this.edit = edit;
    //   this.I = Index;
    //   this.ShipData = Ship;
    //   // console.log(this.I, this.CargoData);
    // },
    addShip(AddShip) {
      AddShip = true;
      EventBus.$emit("addShip", AddShip);
    }
  },
  mounted() {
    let self = this;
    firebase
      .database()
      .ref("ShipsVoyage/")
      .orderByChild("UserID")
      .equalTo(4)
      .once("value")
      .then(function(snapshot) {
        self.Ship = snapshot.val();
        console.log(snapshot);

        self.keys = Object.keys(self.Ship);
        for (let index = 0; index < self.keys.length; index++) {
          var ID = self.keys[index];
          self.ShipIds = self.Ship[ID];
        }
        console.log(self.keys);
      });
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
