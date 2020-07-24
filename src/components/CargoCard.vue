<template>
  <div>
    <v-card
      v-show="!edit"
      @mouseover="hover"
      @mouseleave="leave"
      min-width="530"
      min-height="160"
      style="border-radius:31.5px; margin-right:0;   box-shadow: 0px 1px 7px 0px rgb(0,0, 0,28%);
"
    >
      <!-- 
                ==========================
                      Card Header
                ==========================
      -->
      <v-card-title class="pl-6 pt-1 pb-1 body-1 font-weight-medium" style="height:38px;">
        <img class="i-box" src="../assets/Icon-box.svg" alt="Cargo" />
        {{CargoObject.CargoID}}
        <v-spacer></v-spacer>

        <img @click="editCargo" class="i-edit" src="../assets/Icon-edit.svg" alt="Edit" />
      </v-card-title>
      <v-divider></v-divider>
      <!-- 
                ==========================
                        Card info
                ==========================
      -->
      <div class="cargo-info body-2 font-weight-medium" style="width:515px;">
        <div class="left">
          <p>Type of Cargo: {{CargoObject.CargoType}}</p>
          <p>
            Ready To carry Dangerous goods:
            <img
              v-if="CargoObject.DangerousGoods"
              class="i-check"
              src="../assets/Icon-check.svg"
              alt="check"
            />
            <img v-else style="width:14px;" src="../assets/cancel.svg" alt="check" />
          </p>
        </div>
        <div class="right">
          <p>Quantity: {{CargoObject.CargoQuantity}}</p>

          <p>Freight: {{CargoObject.Freight}}</p>
        </div>
      </div>
      <!-- 
                ==========================
                        Expand Cards
                ==========================
      -->
      <v-expand-transition>
        <div v-show="show" class="cargo-info body-2 font-weight-medium" style="width:515px;">
          <div class="left">
            <p>Description: {{CargoObject.CargoDescription}}</p>
            <p>Discharging Port: {{CargoObject.DischargingPort}}</p>
          </div>
          <div class="right">
            <p>Loading Port: {{CargoObject.LoadingPort}}</p>

            <p>Availability: {{CargoObject.Availability}}</p>
          </div>
        </div>
      </v-expand-transition>
    </v-card>
    <v-dialog v-model="dialog3" max-width="500px">
      <v-card>
        <v-layout row wrap text-center style="width:500px;">
          <v-flex>
            <p font-weight-light style="margin-top:42px;">
              This Cargo can not be edited as it has
              <br />been purchased
            </p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog3 = false">Close</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import { EventBus } from "../main";
import firebase from "firebase";
// import { EventBus } from "../main.js";
// import EditCargo from "./EditCargo";
// import { EventBus } from "../main";
export default {
  name: "CargoCard",
  components: {
    // EditCargo
  },
  props: ["Cargo", "index"],
  data() {
    return {
      show: false,
      edit: false,
      CargoObject: "",
      dialog3: false,
      cards: [1, 2, 3, 4, 5],
      CargoDangerous: {}
      // Cargo: {
      //   Name: "Cargo Name",
      //   Availability: "1/1/2020 to 1/1/2021",
      //   CargoQuantity: 100,
      //   Freight: 2000,
      //   dangerous: true,
      //   Description: "for mobile phone ip",
      //   CargoType: "Container Cargo",
      //   LoadingPort: "Alexandria",
      //   DischargingPort: "Bor-Said"
      // }
    };
  },
  methods: {
    editCargo(edit, Cargo, CargoDangerous) {
      edit = true;
      Cargo = this.CargoObject;
      CargoDangerous = this.CargoDangerous[this.CargoObject.CargoID];
      EventBus.$emit("editCargo", edit, Cargo, CargoDangerous);
    },
    Integrate() {
      this.CargoObject = this.Cargo[this.index];
    },
    hover() {
      this.show = true;
    },
    leave() {
      this.show = false;
    }
  },
  mounted() {
    this.Integrate();
    if (this.CargoObject.DangerousGoods) {
      let self = this;
      firebase
        .database()
        .ref("DangerousGoods/")
        .orderByChild("CargoID")
        .equalTo(self.CargoObject.CargoID)
        .once("value")
        .then(function(snapshot) {
          self.CargoDangerous = snapshot.val();

          // self.keysTime = Object.keys(self.ShipTime);
          // for (let index = 0; index < self.keysTime.length; index++) {
          //   // var ID = self.keysTime[index];
          //   // self.ShipIds = self.ShipTime[ID];
          // }
          console.log(self.CargoDangerous);
        });
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
.i-box {
  width: 31px;
  padding-right: 7px;
}
.i-edit {
  width: 23px;
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

.cargo-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 511px;
  padding: 3px 2px 4px 10px;
}
.left {
  display: flex;
  flex-direction: column;
  width: 282px;
  /* margin-top: 7px; */
  align-items: flex-start;
}
.right {
  display: flex;
  flex-direction: column;
  /* margin-top: 7px; */
  width: 200px;
  align-items: flex-start;
}
.cargo-info p {
  margin: 10px;
}
.add:hover {
  cursor: pointer;
}
</style>
