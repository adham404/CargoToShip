<template>
  <div>
    <v-card
      @mouseover="hover"
      @mouseleave="leave"
      min-width="530"
      min-height="160"
      style="border-radius:31px; margin-right:0;   box-shadow: 0px 1px 7px 0px rgb(0,0, 0,28%);
"
    >
      <!-- 
                ==========================
                      Card Header
                ==========================
      -->
      <v-card-title class="pl-6 pt-1 pb-1 body-1 font-weight-medium" style="height:38px;">
        <img class="i-ship" src="../assets/Icon-ship.svg" alt="Ship" />
        {{Ship.Name}}
        <v-spacer></v-spacer>

        <img @click="dialog3 = true" class="i-edit" src="../assets/Icon-edit.svg" alt="Edit" />
      </v-card-title>
      <v-divider></v-divider>
      <!-- 
                ==========================
                        Card info
                ==========================
      -->
      <div class="ship-info body-2 font-weight-medium">
        <div class="shipLeft">
          <p>Availability: {{Ship.Availability}}</p>
          <p>
            Ready To carry Dangerous goods:
            <img
              v-if="Ship.dangerous"
              class="i-check"
              src="../assets/Icon-check.svg"
              alt="check"
            />
          </p>
        </div>
        <div class="shipRight">
          <p>Dead Weight: {{Ship.DeadWeight}}mt</p>
          <p v-show="show">Chatering Type: {{Ship.ChateringType}}</p>
        </div>
      </div>
      <!-- 
                ==========================
                        Expand Cards
                ==========================
      -->
      <v-expand-transition>
        <div v-show="show" class="ship-info body-2 font-weight-medium">
          <div class="shipLeft">
            <p>Type of Ship: {{Ship.ShipType}}</p>
            <p>Hold Volume cubic meter: {{Ship.Volume}}cm3</p>
          </div>
          <div class="shipRight">
            <p>Build Year: {{Ship.BuildYear}}</p>
            <p>Available Sectors:</p>
          </div>

          <!-- <ul v-for="i in Ship.Sectors" :key="i"> 
                <li>{{Ship.Sectors[i]}}</li>
                
          </ul>-->
        </div>
      </v-expand-transition>
    </v-card>
    <v-dialog v-model="dialog3" max-width="500px">
      <v-card>
        <v-layout row wrap text-center style="width:500px;">
          <v-flex>
            <p font-weight-light style="margin-top:42px;">
              This Ship can not be edited as it has
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
export default {
  name: "ShipCard",
  data() {
    return {
      show: false,
      AddShip: false,
      dialog3: false,
      cards: [1, 2, 3, 4, 5],
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
.i-ship {
  width: 28px;
  padding-right: 5px;
  /* margin: 9px; */
  margin-left: 5px;
  margin-right: 4px;
  margin: 0 0px 2px 5px;
}
.i-edit {
  width: 26px;
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

.ship-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  padding: 5px;
}

.shipLeft {
  display: flex;
  flex-direction: column;
  width: 268px;
  margin-top: 7px;
  align-items: flex-start;
  padding: 3px 2px 4px 25px;
}
.shipRight {
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  width: 200px;
  align-items: flex-start;
}
.add:hover {
  cursor: pointer;
}
</style>
