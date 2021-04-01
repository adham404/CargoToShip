<template>
  <v-main>
      <!-- <v-btn v-if="!Listing" @click="Listing = !Listing">
      <v-icon>mdi-card-search</v-icon>
      </v-btn> -->
      <v-container>
        <v-row class="col-5">
            <v-col>
            <v-btn-toggle rounded>
                <v-btn>
                    <v-icon @click="cargo = true">
                       mdi-package-variant-closed
                    </v-icon>
                </v-btn>
                <v-btn @click="cargo = false">
                    <v-icon>mdi-ferry</v-icon>
                </v-btn>
            </v-btn-toggle> 
            </v-col> 
            <v-col>
                <v-btn v-if="ShortList" @click="ShortList = false" class="mt-2">
                    <v-icon left>mdi-table</v-icon>
                    <v-text>Table Listing</v-text>
                </v-btn>
                <v-btn v-if="!ShortList" @click="ShortList = true" class="mt-2">
                    <v-icon left>mdi-view-list</v-icon>
                    <v-text>Short Listing</v-text>
                </v-btn>
            </v-col>                
        </v-row>
          <TableListing :cargo="cargo" v-if="!ShortList" />
          <v-row v-if="ShortList">
              <v-col v-if="cargo" class="col-6 overflow:y">
                  <v-card @click="LongList"  class="my-10" v-for="(card,x) in FilteredCargoCards" :key="x">
                      <v-row>
                        <v-icon x-large right>
                            mdi-package-variant-closed
                        </v-icon>
                        <v-card-title>Cargo</v-card-title>
                        <!-- <v-col class="col-6">
                        </v-col>
                        <v-col class="col-6">
                        </v-col> -->
                      </v-row>
                      <v-card-subtitle>
                          <div class="display-1">{{card.Id}}</div>
                       </v-card-subtitle>
                    <v-card-text>
                    <v-row>
                        <v-col>
                            <v-row>Cargo Type {{card.CargoType}}</v-row>
                            <!-- <v-row>Cargo Description <span style="font-weight:bold">Test</span></v-row> -->
                            <v-row>Dangerous Goods {{card.DangerousGoods}}</v-row>
                            <v-row>Cargo Quantity {{card.CargoQuantity}}</v-row>
                            <v-row>Cargo Description: {{card.CargoDescription}}</v-row>
                        </v-col>
                        <v-col>
                            <v-row>Loading Port {{card.LoadingPort}}</v-row>
                            <v-row>Discharging Port {{card.DischargingPort}}</v-row>
                            <v-row>From Date {{card.FromDate}}</v-row>
                            <v-row>To Date {{card.ToDate}}</v-row>
                        </v-col>
                    </v-row>
                    </v-card-text>
                  </v-card>
              </v-col>
              <v-col v-if="!cargo" class="col-6 overflow:y">
                  <v-card  class="my-10" v-for="(card,x) in GetShipCards" :key="x">
                      <v-row>
                        <v-icon x-large right>
                            mdi-ferry
                        </v-icon>
                        <v-card-title>Ship</v-card-title>
                        <!-- <v-col class="col-6">
                        </v-col>
                        <v-col class="col-6">
                        </v-col> -->
                      </v-row>
                      <v-card-subtitle>
                          <div class="display-1">{{card.Id}}</div>
                       </v-card-subtitle>
                    <v-card-text>
                    <v-row>
                        <v-col>
                            <v-row>Ready to carry Dangerous Goods {{card.DangerousGoods}}</v-row>
                            <v-row>Dead weight {{card.DeadWeight}}</v-row>
                            <v-row>Available Sector {{card.AvailableSector}}</v-row>
                        </v-col>
                        <v-col>
                            <v-row>From Date {{card.FromDate}}</v-row>
                            <v-row>To Date {{card.ToDate}}</v-row>
                            <v-row>Charterting Type {{card.CharteringType}}</v-row>
                        </v-col>
                    </v-row>
                    </v-card-text>
                  </v-card>
              </v-col>
              <v-col v-if="cargo" class="col-6">
                      <v-row>
                          <v-text class="ma-auto display-1">Filter</v-text>
                      </v-row>
                  <v-form>
                  <v-row>
                      <v-col class="col-6">
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
                    v-model="dateFromFilter"
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
                v-model="dateFromFilter"
                no-title
                @input="FromDateClicked"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                      <v-col class="col-6">
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
                    v-model="dateToFilter"
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
                v-model="dateToFilter"
                no-title
                @input="ToDateClicked"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                  </v-row>
                  <v-row>
                  <v-col class="col-6">
                  <v-autocomplete
                  :items="SectorData"
                  label="Loading Port"
                  item-text="title"
                  v-model="LoadingPort"
                  @input="CargoCardFilteration"
                  >
                  </v-autocomplete>      
                  </v-col>
                  <v-col class="col-6">
                  <v-autocomplete
                  :items="SectorData"
                  label="Discharging Port"
                  item-text="title"
                  v-model="DischargingPort"
                  @input="CargoCardFilteration"
                  >
                  </v-autocomplete> 
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col>
                          <v-checkbox 
                          label="Dangerous Goods"
                          v-model="DangerousGoodsFilter"
                          @click="CargoCardFilteration"
                          ></v-checkbox>
                      </v-col>
                      <v-col>
                          <v-text-field
                          label="Cargo Quantity"
                          type="number"
                          v-model="Quantity"
                          @input="CargoCardFilteration"
                          ></v-text-field>
                      </v-col>
                  </v-row>
                  </v-form>
              </v-col>
              <v-col v-if="!cargo" class="col-6">
                      <v-row>
                          <v-text class="ma-auto display-1">Filter</v-text>
                      </v-row>
                  <v-form>
                  <v-row>
                      <v-col class="col-6">
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
                    v-model="dateFromFilter"
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
                v-model="dateFromFilter"
                no-title
                @input="FromDateClicked"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                      <v-col class="col-6">
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
                    v-model="dateToFilter"
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
                v-model="dateToFilter"
                no-title
                @input="ToDateClicked"
                >
                </v-date-picker>
                        </v-menu>                       
                      </v-col>
                  </v-row>
                  <!-- <v-row>
                  <v-col class="col-6">
                  <v-autocomplete
                  :items="SectorData"
                  label="Loading Port"
                  item-text="title"
                  v-model="LoadingPort"
                  @input="CargoCardFilteration"
                  >
                  </v-autocomplete>      
                  </v-col>
                  <v-col class="col-6">
                  <v-autocomplete
                  :items="SectorData"
                  label="Discharging Port"
                  item-text="title"
                  v-model="DischargingPort"
                  @input="CargoCardFilteration"
                  >
                  </v-autocomplete> 
                      </v-col>
                  </v-row> -->
                  <v-row>
                      <v-col>
                          <v-checkbox 
                          label="Ready to carry Dangerous Goods"
                          v-model="ShipDangerousGoodsFilter"
                          ></v-checkbox>
                      </v-col>
                      <v-col>
                          <v-text-field
                          label="Dead Weight"
                          type="number"
                          v-model="DeadWeight"
                          ></v-text-field>
                      </v-col>
                  </v-row>
                  </v-form>
              </v-col>
          </v-row>
        <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
        <v-card>
        <LongList />
        <v-card-actions class="justify-end">
            <v-btn
            text
            @click="dialog=!dialog"
            >Close</v-btn>
            <v-btn
            text
            >Buy</v-btn>
        </v-card-actions>
        </v-card>
        </v-dialog>
      </v-container>
  </v-main>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import TableListing from "./TableListing"
import LongList from "./LongList"
export default {
    data(){
        return{
            Listing:false,
            cargo:true,
            Quantity:0,
            DangerousGoodsFilter:null,
            DischargingPort:"",
            LoadingPort:"",
            dateToFilter:"",
            dateFromFilter:"",
            ShipDangerousGoodsFilter:"",
            DeadWeight:0,
            ShortList:true,
            menu1:false,
            menu2:false,
            dialog:false,
            SectorData:[],
            FilteredCargoCards:[]
        }
    },
    components:{
        TableListing,
        LongList
    },
    computed:{
        ...mapGetters(["GetCargoCards","GetShipCards"])
    },
    methods:{
        ...mapActions(["FetchCargoAndShipCards"]),
        FromDateClicked()
        {
            this.menu1 = !this.menu1;
            this.CargoCardFilteration();
        },
        ToDateClicked()
        {
            this.menu2 = !this.menu2;
            this.CargoCardFilteration();
        },
        CargoCardFilteration()
        {
            this.FilteredCargoCards = this.GetCargoCards
            var NewCards = [];
            if(this.dateFromFilter != "" && this.dateToFilter != "")
            {                
                this.FilteredCargoCards.forEach((card) => {
                    if(card.ToDate > this.dateFromFilter && card.FromDate < this.dateToFilter)
                    {
                        NewCards.push(card);
                    }
                })
                this.FilteredCargoCards = NewCards
            }
            if(this.LoadingPort != "")
            {
                NewCards = [];
                this.FilteredCargoCards.forEach((card) => {
                    if(card.LoadingPort == this.LoadingPort)
                    {
                        NewCards.push(card);
                    }
                })
                this.FilteredCargoCards = NewCards
            }
            if(this.DischargingPort != "")
            {
                NewCards = [];
                this.FilteredCargoCards.forEach((card) => {
                    if(card.DischargingPort == this.DischargingPort)
                    {
                        NewCards.push(card);
                    }
                })
                this.FilteredCargoCards = NewCards
            }
            if(this.DangerousGoodsFilter != null)
            {
                NewCards = [];
                this.FilteredCargoCards.forEach((card) => {
                    if(card.DangerousGoods == this.DangerousGoodsFilter)
                    {
                        NewCards.push(card);
                    }
                })
                this.FilteredCargoCards = NewCards
            }
            if(this.Quantity != 0)
            {
                NewCards = [];
                this.FilteredCargoCards.forEach((card) => {
                    var x = parseInt(card.CargoQuantity,10);
                    if(x <= this.Quantity)
                    {
                        NewCards.push(card);
                    }
                })
                this.FilteredCargoCards = NewCards
            }
        },
        LongList()
        {
            this.dialog = true;
        }

    },
    mounted()
    {
        var num = "10";
        var x = 0;
        x = num + 2;
        console.log(x);
        this.FetchCargoAndShipCards()
        this.FilteredCargoCards = this.GetCargoCards
        this.SectorData = require("../sectors.json");        
    }
}
</script>

<style>

</style>