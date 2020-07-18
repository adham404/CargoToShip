<template>
  <!-- 
==========================
     container sheet
==========================
  -->
  <div style="
    justify-content:center;
    align-self:center;
    
 ">
    <v-sheet
      v-show="!edit"
      class="white"
      style="border-radius:15px; 
    justify-content:center;
    align-self:center;
    height:40vw; width:65vw;   overflow: auto;
 "
    >
      <h2 class="font-weight-medium pb-1 mt-4" style="margin-left:100px;">My Cargos</h2>
      <!-- 
==========================
     Cards Layout 
==========================
      -->
      <!-- 
                ==========================
                     Add Ship Card
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
            <!-- <router-link to="AddCargo/"> -->
            <v-col align="center" justify="center">
              <h3 class="pb-2" style="font-weight:500;">Add a Cargo</h3>
              <img class="i-add" src="../assets/Icon-plus.svg" alt="Plus" />
            </v-col>
            <!-- </router-link> -->
          </v-card>
        </div>
        <div
          v-for="c in this.keys"
          :key="c"
          style="max-width:530px; max-height:300px; margin-bottom:50px; "
        >
          <CargoCard :index="c" :Cargo="Cargo" @editCargo="editCargo" />
        </div>
      </div>
    </v-sheet>
    <!-- {{CargoData}}
    <EditCargo v-show="edit" :CargoData="CargoData" />-->
  </div>
</template>


<script>
import firebase from "firebase";
// import EditCargo from "../components/EditCargo";
// import { EventBus } from "../main.js";

import CargoCard from "../components/CargoCard";
export default {
  name: "MyCargo",
  components: {
    CargoCard
    // EditCargo
  },
  data() {
    return {
      show: false,
      edit: false,
      I: null,
      keys: [],
      AddShip: false,
      dialog3: false,
      cards: [1, 2, 3, 4, 5],
      Cargo: {},
      CargoData: {},
      CargoIds: []
    };
  },
  // created() {
  //   EventBus.$on("editCargo", Index => {
  //     this.I = Index;
  //     console.log(this.I);
  //   });
  // },
  methods: {
    hover() {
      this.show = true;
    },
    leave() {
      this.show = false;
    },
    editCargo(edit, Cargo, Index) {
      this.edit = edit;
      this.I = Index;
      this.CargoData = Cargo;
      // console.log(this.I, this.CargoData);
    }
  },
  mounted() {
    // EventBus.$on("editCargo", (edit, Cargo, Index) => {
    //   this.edit = edit;
    //   this.CargoData = Cargo;
    //   this.I = Index;
    // });
    let self = this;
    firebase
      .database()
      .ref("Cargo/")
      .orderByChild("UserID")
      .equalTo(1)
      .once("value")
      .then(function(snapshot) {
        self.Cargo = snapshot.val();
        self.keys = Object.keys(self.Cargo);
        for (let index = 0; index < self.keys.length; index++) {
          var ID = self.keys[index];
          self.CargoIds = self.Cargo[ID];
        }
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

.i-edit {
  width: 28px;
  padding-left: 7px;
}
.i-edit:hover {
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

.add:hover {
  cursor: pointer;
}
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
/* .cargo-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  padding: 5px;
} */
.i-add {
  width: 98px;
  display: inline-block;
  margin-left: -11px;
  cursor: pointer;
}
</style>