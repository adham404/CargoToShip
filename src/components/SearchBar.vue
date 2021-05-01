<template>
  <div>
      <v-main>
          <v-container>
          <v-row class="col-8">
              <v-col class="col-3">
                  <v-autocomplete
                  :items="SectorData"
                  item-text="title"
                  v-model="SelectedObj"
                  item-value="children"
                  @input="EnterOption"
                  >
                  </v-autocomplete> 
              </v-col>
              <v-col class="col-6">
                  <v-row>
                      <v-col>
                        <v-menu
                        ref="menu5"
                        v-model="menu5"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                <template  v-slot:activator="{ on, attrs }">
                    <v-text-field 
                    v-model="dateFromSearch"
                    label="From Date"
                    hint="YYYY-MM-DD format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    >
                    </v-text-field>
                </template>    
                <v-date-picker
                v-model="dateFromSearch"
                no-title
                @input="menu5 = false"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                      <v-col>
                        <v-menu
                        ref="menu6"
                        v-model="menu6"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                <template  v-slot:activator="{ on, attrs }">
                    <v-text-field 
                    v-model="dateToSearch"
                    label="To Date"
                    hint="YYYY-MM-DD format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    >
                    </v-text-field>
                </template>    
                <v-date-picker
                v-model="dateToSearch"
                no-title
                @input="menu6 = false"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                  </v-row>
              </v-col>
              <v-col class="col-3">
                  <v-btn-toggle rounded>
                      <v-btn>
                          <v-icon>
                          mdi-package-variant-closed
                          </v-icon>
                      </v-btn>
                      <v-btn>
                          <v-icon>mdi-ferry</v-icon>
                       </v-btn>
                  </v-btn-toggle>
              </v-col>
          </v-row>
          <!-- <v-btn @click="SubmitDate">Submit Date</v-btn> -->
          </v-container>
          <div>Enter Ship and Cargo Cards</div>
          <v-form>
              <v-container>
                  <v-row>
                      <v-col class="col-4">
                          <v-text-field
                          label="Cargo ID"
                          v-model="CargoID"
                          ></v-text-field>
                      </v-col>
                      <v-col class="col-4">
                        <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                <template  v-slot:activator="{ on, attrs }">
                    <v-text-field 
                    v-model="dateFromCargo"
                    label="From Date"
                    hint="YYYY-MM-DD format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    >
                    </v-text-field>
                </template>    
                <v-date-picker
                v-model="dateFromCargo"
                no-title
                @input="menu1 = false"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                      <v-col class="col-4">
                        <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template  v-slot:activator="{ on, attrs }">
                    <v-text-field 
                    v-model="dateToCargo"
                    label="To Date"
                    hint="YYYY-MM-DD format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    >
                    </v-text-field>
                </template>    
                <v-date-picker
                v-model="dateToCargo"
                no-title
                @input="menu2 = false"
                >
                </v-date-picker>
                        </v-menu>              
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col class="col-4">
                    <v-text-field
                    label="Cargo Quantity"
                    type="number"
                    v-model="CargoQuantity"
                    ></v-text-field>                   
                      </v-col>
                      <v-col class="col-4">
                  <v-autocomplete
                  :items="SectorData"
                  label="Discharging Port"
                  item-text="title"
                  v-model="CargoDischargingPort"
                  >
                  </v-autocomplete> 
                    <!-- <v-text-field
                    label="Discharging Port"
                    v-model="CargoDischargingPort"
                    ></v-text-field>                    -->
                     </v-col>
                      <v-col class="col-4">
                        <v-autocomplete
                        :items="SectorData"
                        label="Loading Port"
                        item-text="title"
                        v-model="CargoLoadingPort"
                        >
                  </v-autocomplete> 

<!-- 
                    <v-text-field
                    label="Loading Port"
                    v-model="CargoLoadingPort"
                    ></v-text-field>                    -->
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col class="col-4">
                    <v-text-field
                    label="Cargo Type"
                    v-model="CargoType"
                    ></v-text-field>                   
                      </v-col>
                      <v-col class="col-4">
                    <v-text-field
                    label="Cargo Description"
                    v-model="CargoDescription"
                    ></v-text-field>                   
                      </v-col>
                      <v-col class="col-4">
                          <v-checkbox
                          label="Dangerous Goods"
                          v-model="CargoDangerousGoods"
                          ></v-checkbox>
                      </v-col>
                  </v-row>

                  <v-btn @click="SubmitCargo">Submit Cargo Card</v-btn>
                  <v-row>
                      <v-col class="col-4">
                          <v-text-field
                          label="Ship ID"
                          v-model="ShipID"
                          ></v-text-field>
                      </v-col>
                      <v-col class="col-4">
                        <v-menu
                ref="menu3"
                v-model="menu3"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template  v-slot:activator="{ on, attrs }">
                    <v-text-field 
                    v-model="dateFromShip"
                    label="From Date"
                    hint="YYYY-MM-DD format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    >
                    </v-text-field>
                </template>    
                <v-date-picker
                v-model="dateFromShip"
                no-title
                @input="menu3 = false"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                      <v-col class="col-4">
                        <v-menu
                ref="menu4"
                v-model="menu4"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template  v-slot:activator="{ on, attrs }">
                    <v-text-field 
                    v-model="dateToShip"
                    label="To Date"
                    hint="YYYY-MM-DD format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    >
                    </v-text-field>
                </template>    
                <v-date-picker
                v-model="dateToShip"
                no-title
                @input="menu4 = false"
                >
                </v-date-picker>
                        </v-menu>              
                      </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="col-3">
                    <v-text-field
                    label="DeadWeight"
                    v-model="ShipDeadWeight"
                    ></v-text-field>                   
                      </v-col>
                      <v-col class="col-3">
                    <v-text-field
                    label="Available Sector"
                    v-model="ShipSector"
                    ></v-text-field>                   
                      </v-col>
                    <v-col class="col-3">
                    <v-text-field
                    label="Chartering Type"
                    v-model="CharteringType"
                    ></v-text-field>                   
                    </v-col>
                    <v-col class="col-3">
                    <v-checkbox
                    label="Ready to carry dangerous Goods"
                    v-model="ShipDangerousGoods"
                    ></v-checkbox>                   
                    </v-col>
                  </v-row>    
                <v-btn @click="SubmitShip">Submit Ship Data</v-btn>
              </v-container>
          </v-form>
          <!-- <v-container>
              <v-row>
                  <v-col>
                      <div>Cargo Cards</div>
                      <v-card v-for="(card,x) in FilteredCargoCards" :key="x">
                          <v-card-title>{{card.Name}}</v-card-title>
                          <v-row>
                              <v-col class="col-6">
                                  <v-card-text>From Date</v-card-text>
                                  <v-card-text>{{card.FromDate}}</v-card-text>
                              </v-col>
                              <v-col class="col-6">
                                  <v-card-text>To Date</v-card-text>
                                  <v-card-text>{{card.ToDate}}</v-card-text>
                              </v-col>
                          </v-row>
                      </v-card>
                  </v-col>
                  <v-col>
                      <div>Ship Cards</div>
                      <v-card v-for="(card,x) in FilteredShipCards" :key="x">
                          <v-card-title>{{card.Name}}</v-card-title>
                          <v-row>
                              <v-col class="col-6">
                                  <v-card-text>From Date</v-card-text>
                                  <v-card-text>{{card.FromDate}}</v-card-text>
                              </v-col>
                              <v-col class="col-6">
                                  <v-card-text>To Date</v-card-text>
                                  <v-card-text>{{card.ToDate}}</v-card-text>
                              </v-col>
                          </v-row>
                      </v-card>
                  </v-col>
              </v-row>
          </v-container> -->
      </v-main>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
import firebase from "firebase"
export default {
    data()
    {
        return{
            dateFromCargo:"",
            dateToCargo:"",
            dateFromShip:"",
            dateFromSearch:"",
            dateToSearch:"",
            dateToShip:"",
            SectorData:"",
            SelectedObj:"",
            menu1:false,
            menu2:false,
            menu3:false,
            menu4:false,
            menu5:false,
            menu6:false,
            CargoName:"",
            ShipID:"",
            CargoCards:[],
            ShipCards:[],
            FilteredCargoCards:[],
            FilteredShipCards:[],
            CargoID:"",
            CargoQuantity:0,
            CargoDischargingPort:"",
            CargoLoadingPort:"",
            CargoType:"",
            CargoDescription:"",
            CargoDangerousGoods:false,
            ShipDeadWeight:0,
            ShipSector:"",
            CharteringType:"",
            ShipDangerousGoods:false
        }
    },
    computed:{
        ...mapGetters(["GetCurrentSectorData"])
    },
    methods:{
        ...mapMutations(["SetSectorDataFromTheDropDown"]),
        EnterOption()
        {
            this.SetSectorDataFromTheDropDown(this.SelectedObj)
        },
        async SubmitCargo()
        {
            var db = firebase.firestore();
            var DbCargoREf = db.collection("Cargo");
            await DbCargoREf.add({
                Id: this.CargoID,
                FromDate: this.dateFromCargo,
                ToDate: this.dateToCargo,
                CargoType: this.CargoType,
                CargoDescription: this.CargoDescription,
                DangerousGoods: this.CargoDangerousGoods,
                CargoQuantity:this.CargoQuantity,
                LoadingPort:this.CargoLoadingPort,
                DischargingPort:this.CargoDischargingPort
            })
            this.FetchCargoShipData()
        },
        SubmitShip()
        {
            var db = firebase.firestore();
            var DbCargoREf = db.collection("Ship");
            DbCargoREf.add({
                Id: this.ShipID,
                FromDate: this.dateFromShip,
                ToDate: this.dateToShip,
                AvailableSector: this.ShipSector,
                CharteringType:this.CharteringType,
                DeadWeight:this.ShipDeadWeight,
                DangerousGoods:this.ShipDangerousGoods
            })
            this.FetchCargoShipData()
        },
        FetchCargoShipData()
        {
            this.CargoCards = [];
            this.ShipCards = [];
            //Fetch Cargo and Ship Data
            var db = firebase.firestore();
            db.collection("Cargo").get().then((query) => {
                query.forEach((doc) => {
                    this.CargoCards.push(doc.data());
                })
            })
            db.collection("Ship").get().then((query) => {
                query.forEach((doc) => {
                    this.ShipCards.push(doc.data());
                })
            })
            this.FilteredCargoCards = this.CargoCards
            this.FilteredShipCards = this.ShipCards

},
        SubmitDate()
        {
            //Loop through Cargo Data
            this.FilteredCargoCards = [];
            this.CargoCards.forEach((card) => {
                if(card.ToDate > this.dateFromSearch && card.FromDate < this.dateToSearch)
                {
                        this.FilteredCargoCards.push(card);
                }
            })
            //Loop Through Ship Data
            this.FilteredShipCards = [];
            this.ShipCards.forEach((card) => {
                if(card.ToDate > this.dateFromSearch && card.FromDate < this.dateToSearch)
                {
                        this.FilteredShipCards.push(card);
                }
            })
        },
            
    },
    mounted()
    {
        // this.FetchCargoShipData()
        this.SectorData = require("../sectors.json");
    }

}
</script>

<style>

</style>