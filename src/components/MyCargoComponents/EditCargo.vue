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
    align-self:center; width:100%;
    height:100%;"
  >
    <div class="head">
      <h2 class="font-weight-medium text-center pb-1 mt-2">
        <img class="i-cargo" src="../../assets/BlackContainer.svg" alt="Cargo" />
        Add Cargo
      </h2>
    </div>
    <v-divider style="border-color:#0A3255;"></v-divider>
    <div class="cargoData">
      <div class="dataLeft">
        <div class="columnData">
          <h3 font-weight-medium>Cargo Describtion</h3>
          <v-text-field
            @input="valDescription"
            v-model="CargoData.CargoDescription"
            :error="errDescription"
            :error-messages="errDescriptionMsg"
            outlined
            solo
            dense
            counter
            :hint="hint"
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>Cargo Quantity</h3>
          <div style="display:flex;">
            <v-text-field
              v-model="CQuantity"
              @input="valQuantity"
              :error="errQuantity"
              :error-messages="errQuantityMsg"
              outlined
              solo
              dense
              style="width:200px; border-radius:5px; "
            ></v-text-field>
            <v-select
              v-model="QuantityUnit"
              @input="valQuantity"
              :items="Quantity"
              :error="errQuantityUnit"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:95px; border-radius:5px; display:inline-block; margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div class="columnData">
          <h3 font-weight-medium>Loading Port</h3>
          <v-autocomplete
            v-model="CargoData.LoadingPort"
            :menu-props="{ maxHeight: '200' }"
            :items="cargoPorts"
            @input="valLoadingPort"
            label="Search for Loading Port"
            :error="errLoadingPort"
            hide-details
            outlined
            solo
            dense
            style="width:300px; border-radius:5px; "
          ></v-autocomplete>
        </div>
        <div class="columnData">
          <h3 font-weight-medium>Cargo Freight</h3>
          <div style="display:flex; width:300px;">
            <v-text-field
              v-model="Freight"
              @input="valFreight"
              :error="errFreight"
              :error-messages="errFreightMsg"
              outlined
              solo
              dense
              style="width:300px; border-radius:5px; "
            ></v-text-field>
            <h2 style="margin-left:9px; margin-top:3px;">$</h2>
          </div>
        </div>
        <div class="columnData">
          <h3>Contact Info</h3>
          <div style="display: flex;">
            <v-autocomplete
              v-model="ContactInfoCode[0]"
              :menu-props="{ maxHeight: '200',maxWidth:'400' }"
              :items="Countries"
              label="Code"
              hide-details
              outlined
              dense
              solo
              style="width:80px; border-radius:5px; ;"
            >
              <template slot="selection" slot-scope="data">
                <v-avatar style="height:40px;">
                  <country-flag :country="data.item.code" />
                </v-avatar>
              </template>
              <template slot="item" slot-scope="data">
                <v-list-item-avatar>
                  <country-flag :country="data.item.code" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{data.item.text}} ({{data.item.dialCode}})</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
            <v-text-field
              v-model="ContactInfo[0]"
              @input="valContactInfo"
              :error="errContactInfo[0]"
              :error-messages="errContactInfo0(0)"
              label="Enter Phone Number"
              solo
              outlined
              dense
              style="width:180px; border-radius:5px; "
            ></v-text-field>
            <img @click="AddPhone" class="i-plus" src="../../assets/Icon-plus.svg" alt />
          </div>
          <div v-for="i  in  addField" :key="i" style="display: flex;">
            <v-autocomplete
              v-model="ContactInfoCode[addField.indexOf(i)+1]"
              :menu-props="{ maxHeight: '200',maxWidth:'400' }"
              :items="Countries"
              label="Code"
              hide-details
              outlined
              dense
              solo
              style="width:80px; border-radius:5px; ;"
            >
              <template slot="selection" slot-scope="data">
                <v-avatar style="height:40px;">
                  <country-flag :country="data.item.code" />
                </v-avatar>
              </template>
              <template slot="item" slot-scope="data">
                <v-list-item-avatar>
                  <country-flag :country="data.item.code" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{data.item.text}} ({{data.item.dialCode}})</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
            <v-text-field
              v-model="ContactInfo[addField.indexOf(i)+1]"
              @input="valContactInfo"
              :error="errContactInfo[addField.indexOf(i)+1]"
              :error-messages="errContactInfo0(addField.indexOf(i)+1)"
              ref="contact"
              label="Enter Phone Number"
              solo
              outlined
              dense
              style="width:180px; border-radius:5px; "
            ></v-text-field>
            <img
              @click="remove(addField.indexOf(i))"
              class="i-plus"
              style="width:25px;"
              src="../../assets/cancel3.svg"
              alt
            />
          </div>
        </div>
      </div>
      <div class="dataRight">
        <div class="columnData">
          <h3 font-weight-medium>Cargo Type</h3>
          <v-select
            v-model="CargoData.CargoType"
            @input="valType"
            :items="CargoTypes"
            :error="errType"
            label="Select Cargo Type"
            hide-details
            outlined
            dense
            solo
            style="width:300px; border-radius:5px; "
          ></v-select>
        </div>
        <div class="columnData" style="display:flex; align-items:center;">
          <div style="display:flex; width:300px;">
            <h3>Contains Dangerous goods</h3>
            <v-checkbox
              v-model="CargoData.DangerousGoods"
              style="margin-top: -1px;
    margin-left: 8px;"
            ></v-checkbox>
          </div>
        </div>
        <div
          v-show="CargoData.DangerousGoods"
          class="columnData"
          style="display:flex; justify-content:center;"
        >
          <v-select
            v-model="DangerousSpecification"
            :error="errDangerousSpecification"
            @input="valDangerousSpecification"
            :items="DangerousGoodsData"
            :menu-props="{ maxHeight: '200' }"
            @change="SelectDangerous"
            outlined
            dense
            solo
            label="Select"
            multiple
            hint="Pick Specificatoin"
            persistent-hint
            style="width:300px; border-radius:5px;
            "
          >
            <template v-slot:selection="{ item, index } ">
              <v-chip v-if="index === 0 ">
                <span>{{ item.text }}</span>
              </v-chip>
              <span
                v-if="index === 1"
                class="caption"
              >(+{{ DangerousSpecification.length - 1 }} others)</span>
            </template>
          </v-select>
        </div>
        <div class="columnData">
          <h3 font-weight-medium>Discharging Port</h3>
          <v-autocomplete
            v-model="CargoData.DischargingPort"
            :menu-props="{ maxHeight: '200' }"
            :items="cargoPorts"
            @input="valDischargingPort"
            :error="errDischargingPort"
            label="Search for Discharging Port"
            hide-details
            outlined
            solo
            dense
            value="CargoObject.DischargingPort"
            style="width:300px; border-radius:5px; "
          ></v-autocomplete>
        </div>
        <div class="columnData">
          <div class="columnData">
            <h3>Availability:</h3>
            <div style="    display: flex;
    width: 300px; justify-content:space-between;">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="fromDate"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="fromDate"
                    @input="valAvailability"
                    :error="errFromDate"
                    :error-messages="errFromDateMsg"
                    label="From"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                    style="max-width:126px;border-radius:5px;"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="fromDate" @input="valAvailability" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(fromDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>

              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="toDate"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="toDate"
                    @input="valAvailability"
                    :error="errToDate"
                    :error-messages="errToDateMsg"
                    label="To"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                    style="max-width:126px;border-radius:5px;"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="toDate" @input="valAvailability" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu2.save(toDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
          </div>
        </div>
        <div class="savebtn">
          <button class="btn" @click="save">Save</button>
        </div>
      </div>
      </div>
    <!-- <div v-show="set">
      <p>{{CargoData.CargoDescription}}</p>
      <p>{{CargoData.CargoQuantity}}</p>
      <p>{{CargoData.LoadingPort}}</p>
      <p>{{CargoData.DischargingPort}}</p>
      <p>{{CargoData.CargoType}}</p>
      <p>{{CargoData.Availability}}</p>
      <p>{{CargoData.Freight}}</p>
      <p>{{CargoData.DangerousGoods}}</p>
      <p>{{DangerousGoods}}</p>
      <p>{{CargoData.ContactInfo}}</p>
    </div>
    <p>{{ContactInfoCode}}</p>
    <p>{{QuantityUnit}}</p>
    <p>{{CQuantity}}</p>
    <p>{{CargoDangerous}}</p>
    <p>{{DangerousSpecification}}</p>
    <p>{{addField}}</p> -->
    <!-- <p>{{DangerousGoods}}</p> -->
  </v-sheet>
</template>


<script>
import firebase from "firebase";
import test from "../../assets/sectors.json";
import CountryFlag from "vue-country-flag";
import country from "../../assets/countries.json";
// import googleValidation from "google-libphonenumber";
// import CargoPhone from "./CargoPhone";
// import { EventBus } from "../main";

export default {
  name: "EditCargo",
  components: {
    // CargoPhone
    CountryFlag
  },
  props: ["CargoData", "CargoDangerous"],
  data() {
    return {
      test,
      Data: {},
      Index: 1,
      ContactInfoCode: [],
      ContactInfo: [],
      number: [],
      country,
      Countries: [],
      z: 0,
      cargoPorts: [],
      DangerousSpecification: [],
      fromDate: this.CargoData.Availability.substring(0, 10),
      toDate: this.CargoData.Availability.substring(14, 24),
      QuantityUnit: this.CargoData.CargoQuantity.substring(
        this.CargoData.CargoQuantity.length - 2,
        this.CargoData.CargoQuantity.length
      ),
      Freight: this.CargoData.Freight.substring(
        0,
        this.CargoData.Freight.length - 1
      ),
      menu: false,
      menu2: false,
      phone: 0,
      flag: null,
      add: false,
      addField: [],
      CQuantity: this.CargoData.CargoQuantity.substring(
        0,
        this.CargoData.CargoQuantity.length - 2
      ),
      set: false,
      hint: "Maximum 20 characters",
      // Cargo: {
      //   CargoID: 2,
      //   Availability: "",
      //   CargoQuantity: "",
      //   Freight: "",
      //   DangerousGoods: false,
      //   CargoDescription: "",
      //   CargoType: "",
      //   LoadingPort: "Alexandria",
      //   DischargingPort: "",
      //   ContactInfo: [],
      //   UserID: 1
      // },
      // Cargo: this.CargoObject,
      DangerousGoods: {
        Corrosive: false,
        DangerousWhenWet: false,
        Explosive: false,
        FlammableGas: false,
        FlammableLiquid: false,
        FlammableSolid: false,
        InfectiousSubstance: false,
        MarinePollutant: false,
        Miscellaneous: false,
        NonflammableCompressedGas: false,
        OrganicPeroxide: false,
        OxidizingAgent: false,
        Radioactive: false,
        SpontaneouslyCombustible: false,
        ToxicGas: false
      },

      Quantity: [
        { text: "MT", value: "MT" },
        { text: "M³", value: "M³" }
      ],
      DangerousGoodsData: [
        { text: "Corrosive", value: "Corrosive" },
        { text: "Dangerous When Wet", value: "DangerousWhenWet" },
        { text: "Explosive", value: "Explosive" },
        { text: "Flammable Gas", value: "FlammableGas" },
        { text: "Flammable Liquid", value: "FlammableLiquid" },
        { text: "Flammable Solid", value: "FlammableSolid" },
        { text: "Infectious Substance", value: "InfectiousSubstance" },
        { text: "Marine Pollutant", value: "MarinePollutant" },
        { text: "Miscellaneous", value: "Miscellaneous" },
        { text: "DangerousWhenWet", value: "DangerousWhenWet" },
        {
          text: "Nonflammable Compressed Gas",
          value: "NonflammableCompressedGas"
        },
        { text: "Organic Peroxide", value: "OrganicPeroxide" },
        { text: "Oxidizing Agent", value: "OxidizingAgent" },
        { text: "Radioactive", value: "Radioactive" },
        {
          text: "Spontaneously Combustible",
          value: "SpontaneouslyCombustible"
        },
        { text: "Toxic Gas", value: "ToxicGas" }
      ],
      CargoTypes: [
        { text: "Container Cargo", value: "Container Cargo" },
        { text: "Dry Bulk", value: "Dry Bulk" },
        { text: "Liquid Bulk", value: "Liquid Bulk" },
        { text: "Break Bulk", value: "Break Bulk" },
        { text: "Reefer", value: "Reefer" },
        { text: "Ro-Ro", value: "Ro-Ro" },
        { text: "Timber", value: "Timber" },
        { text: "General Cargo", value: "General Cargo" }
      ],
      errDescription: false,
      errQuantity: false,
      errQuantityUnit: false,
      errFreight: false,
      errLoadingPort: false,
      errDischargingPort: false,
      errDangerousSpecification: false,
      errContact: false,
      errType: false,
      errFromDate: false,
      errToDate: false,
      errContactInfo: []
    };
  },
  // created() {
  //   EventBus.$on("editCargo", Index => {
  //     this.Index = Index;
  //   });
  //   console.log(self.Cargo[this.Index]);
  // },
  methods: {
    SelectDangerous() {
      // for (var i in selected) {
      //   selected[i].text.split(" ").join("");
      // }[]
      // const key = Object.keys(this.DangerousGoods)[1];
      // console.log(key);
      for (var j = 0; j < this.DangerousSpecification.length; j++) {
        for (var i = 0; i < 16; i++) {
          if (
            this.DangerousSpecification[j] ==
            Object.keys(this.CargoDangerous)[i]
          ) {
            var key = Object.keys(this.CargoDangerous)[i];
            console.log(key);
            this.CargoDangerous[key] = true;
          }
        }
      }
    },
    AddPhone() {
      this.phone++;
      this.add = true;
      this.addField.push(this.phone);
    },
    valDescription() {
      var val = /^[a-z-A-Z\s]+$/;
      if (
        val.test(this.CargoData.CargoDescription) &&
        this.CargoData.CargoDescription.length <= 20
      ) {
        this.errDescription = false;
      } else {
        this.errDescription = true;
      }
    },
    valQuantity() {
      if (
        !isNaN(this.CQuantity) &&
        this.CQuantity != "" &&
        this.QuantityUnit != ""
      ) {
        this.errQuantity = false;
        this.errQuantityUnit = false;
      } else if (
        !isNaN(this.CQuantity) &&
        this.CQuantity != "" &&
        this.QuantityUnit == ""
      ) {
        this.errQuantity = false;
        this.errQuantityUnit = true;
      } else if (
        isNaN(this.CQuantity) ||
        (this.CQuantity == "" && this.QuantityUnit != "")
      ) {
        this.errQuantity = true;
        this.errQuantityUnit = false;
      } else {
        this.errQuantity = true;
        this.errQuantityUnit = true;
      }
    },
    valFreight() {
      if (this.Freight != "" && !isNaN(this.Freight)) {
        this.errFreight = false;
      } else {
        this.errFreight = true;
      }
    },
    valLoadingPort() {
      if (this.CargoData.LoadingPort != "") {
        this.errLoadingPort = false;
      } else {
        this.errLoadingPort = true;
      }
    },
    valDischargingPort() {
      if (this.CargoData.DischargingPort != "") {
        this.errDischargingPort = false;
      } else {
        this.errDischargingPort = true;
      }
    },
    valDangerousSpecification() {
      if (this.CargoData.DangerousGoods) {
        if (this.DangerousSpecification != "") {
          this.errDangerousSpecification = false;
        } else {
          this.errDangerousSpecification = true;
        }
      }
    },
    valContactInfo() {
      for (let index = 0; index < this.ContactInfo.length; index++) {
        if (this.ContactInfo[index] != "" && !isNaN(this.ContactInfo[index])) {
          this.errContactInfo[index] = false;
        } else {
          this.errContactInfo[index] = true;
          this.errContactInfo0(index);
        }
      }
    },
    valType() {
      if (this.CargoData.CargoType != "") {
        this.errType = false;
      } else {
        this.errType = true;
      }
    },
    valAvailability() {
      if (this.fromDate != "" && this.toDate != "") {
        this.errFromDate = false;
        this.errToDate = false;
      } else if (this.fromDate == "" && this.toDate != "") {
        this.errFromDate = true;
        this.errToDate = false;
      } else if (this.fromDate != "" && this.toDate == "") {
        this.errFromDate = false;
        this.errToDate = true;
      } else {
        this.errFromDate = true;
        this.errToDate = true;
      }
    },
    errContactInfo0(i) {
      return this.errContactInfo[i] ? ["Insert Valid Phone"] : [];
    },
    errContactInfo1(i) {
      return this.errContactInfo[i] ? ["Insert Valid Phone"] : [];
    },
    editNumber() {
      this.valContactInfo();
      for (var i = 0; i < this.ContactInfo.length; i++) {
        // var index = this.Countries.findIndex(
        //   x => x.code === this.ContactInfoCode[i]
        // );
        if (this.errContactInfo[i] == false) {
          const phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
          var number = phoneUtil.parseAndKeepRawInput(
            this.ContactInfo[i],
            this.ContactInfoCode[i]
          );
          if (phoneUtil.isValidNumber(number)) {
            this.errContactInfo[i] = false;
            this.CargoData.ContactInfo[i] = {
              number: number.getRawInput(),
              code: phoneUtil.getRegionCodeForNumber(number)
            };
          } else {
            this.errContactInfo.splice(i, 1);
            console.log(this.errContactInfo);
            this.errContactInfo.splice(i, 0, true);
          }
          this.errContactInfo0(i);
        } else {
          this.errContactInfo[i] = true;
          this.errContactInfo0(i);
        }
      }
    },
    savePhone() {
      for (let z = 0; z < this.addField.length + 1; z++) {
        if (this.ContactInfo[z] == null) {
          this.ContactInfo.push("");
        }
      }
      this.editNumber();
      this.flag = true;
      for (var j = 0; j < this.errContactInfo.length; j++) {
        let err = this.errContactInfo[j];
        this.flag = this.flag && !err;
      }
      if (j == 0) {
        this.flag = !this.errContactInfo[j];
      }
    },
    // Check if all valid
    allValid() {
      this.valDescription();
      this.valQuantity();
      this.valFreight();
      this.valDangerousSpecification();
      this.valLoadingPort();
      this.valDischargingPort();
      this.valType();
      this.valAvailability();
      this.savePhone();
      if (
        this.errDescription == false &&
        this.errQuantity == false &&
        this.errQuantityUnit == false &&
        this.errFreight == false &&
        this.errLoadingPort == false &&
        this.errDischargingPort == false &&
        this.errDangerousSpecification == false &&
        this.errContact == false &&
        this.errType == false &&
        this.errFromDate == false &&
        this.errToDate == false &&
        this.flag == true
      ) {
        this.set = true;
      } else {
        this.set = false;
      }
    },
    save() {
      this.allValid();
      if (this.set) {
        this.CargoData.Availability = this.fromDate + " to " + this.toDate;
        this.CargoData.CargoQuantity = this.CQuantity + this.QuantityUnit;
        this.CargoData.Freight = this.Freight + "$";
        firebase
          .database()
          .ref("Cargo/" + this.CargoData.CargoID)
          .set({
            CargoID: this.CargoData.CargoID,
            CargoType: this.CargoData.CargoType,
            CargoDescription: this.CargoData.CargoDescription,
            DangerousGoods: this.CargoData.DangerousGoods,
            CargoQuantity: this.CargoData.CargoQuantity,
            LoadingPort: this.CargoData.LoadingPort,
            DischargingPort: this.CargoData.DischargingPort,
            Availability: this.CargoData.Availability,
            Freight: this.CargoData.Freight,
            ContactInfo: this.CargoData.ContactInfo,
            UserID: this.CargoData.UserID
          });
        if (this.CargoData.DangerousGoods) {
          firebase
            .database()
            .ref("DangerousGoods/" + this.CargoData.CargoID)
            .set({
              CargoID: this.CargoData.CargoID,
              Corrosive: this.CargoDangerous.Corrosive,
              DangerousWhenWet: this.CargoDangerous.DangerousWhenWet,
              Explosive: this.CargoDangerous.Explosive,
              FlammableGas: this.CargoDangerous.FlammableGas,
              FlammableLiquid: this.CargoDangerous.FlammableLiquid,
              FlammableSolid: this.CargoDangerous.FlammableSolid,
              InfectiousSubstance: this.CargoDangerous.InfectiousSubstance,
              MarinePollutant: this.CargoDangerous.MarinePollutant,
              Miscellaneous: this.CargoDangerous.Miscellaneous,
              NonflammableCompressedGas: this.CargoDangerous
                .NonflammableCompressedGas,
              OrganicPeroxide: this.CargoDangerous.OrganicPeroxide,
              OxidizingAgent: this.CargoDangerous.OxidizingAgent,
              Radioactive: this.CargoDangerous.Radioactive,
              SpontaneouslyCombustible: this.CargoDangerous
                .SpontaneouslyCombustible,
              ToxicGas: this.CargoDangerous.ToxicGas
            });
        }
      }
    },
    remove(p) {
      // var index = this.addField.indexOf(p);
      // var index2 = this.addField.indexOf(this.Cargo.ContactInfo[p]);
      this.addField.splice(p, 1);
      this.ContactInfo.splice(p + 1, 1);
      this.errContactInfo.splice(p + 1, 1);
      this.ContactInfoCode.splice(p + 1, 1);
      // console.log(this.addField);
      // this.phone = p - 1;
      // console.log(this.phone);
      // console.log(this.Cargo.ContactInfo);
    }
    // Integrate() {
    //   this.Index = this.I;
    // }
  },
  mounted() {
    // this.Integrate();
    // console.log(this.Cargo);
    // let self = this;

    // console.log(this.Index);
    // EventBus.$on("SendPhone", data => {
    //   console.log(data);
    //   this.number.push(data);
    // });
    //for DangerousGoods
    console.log(Object.keys(this.CargoDangerous).length);
    if (this.CargoData.DangerousGoods) {
      for (var d = 0; d < Object.keys(this.CargoDangerous).length; d++) {
        var key = Object.keys(this.CargoDangerous)[d];

        if (this.CargoDangerous[key] == true) {
          this.DangerousSpecification.push(Object.keys(this.CargoDangerous)[d]);
        }
      }
    }
    //for contactinfo
    for (var p = 0; p < this.CargoData.ContactInfo.length; p++) {
      this.ContactInfo[p] = this.CargoData.ContactInfo[p].number;
      this.ContactInfoCode[p] = this.CargoData.ContactInfo[p].code;
      console.log(this.CargoData.ContactInfo.length - 1);
    }
    for (var a = 0; a < this.CargoData.ContactInfo.length - 1; a++) {
      this.AddPhone();
    }
    for (var i = 0; i < this.country.length; i++) {
      this.Countries.push({
        text: this.country[i].name,
        value: this.country[i].code,
        code: this.country[i].code,
        dialCode: this.country[i].dial_code
      });
    }
    for (var z = 0; z < 23; z++) {
      if (this.test[z].ports.length == 0) {
        for (var j = 0; j < this.test[z].children.length; j++) {
          for (var x = 0; x < this.test[z].children[j].ports.length; x++) {
            this.cargoPorts.push(this.test[z].children[j].ports[x].title);
          }
        }
      } else {
        for (var y = 0; y < this.test[z].ports.length; y++) {
          this.cargoPorts.push({
            text: this.test[z].ports[y].title,
            value: this.test[z].ports[y].title
          });
        }
      }
    }
    // Require `PhoneNumberFormat`.
    // const PNF = googleValidation.PhoneNumberFormat;

    // Get an instance of `PhoneNumberUtil`.
  },
  computed: {
    integerate() {
      return `${this.Cargo} = ${this.CargoData}`;
    },
    errDescriptionMsg() {
      return this.errDescription
        ? ["Type maximum 20 (letters and spaces only)"]
        : [];
    },
    errQuantityMsg() {
      return this.errQuantity
        ? ["Insert quantity (numbers only) and \n  select unit"]
        : [];
    },
    errFreightMsg() {
      return this.errFreight ? ["Insert Cargo Freight (Numbers only)"] : [];
    },
    errContactMsg() {
      return this.errContact ? ["Insert valid Phone"] : [];
    },
    errFromDateMsg() {
      return this.errFromDate ? ["Required"] : [];
    },
    errToDateMsg() {
      return this.errToDate ? ["Required"] : [];
    }
  }
};
</script>



<style>
p {
  color: black;
}
/*
======================
    Styling Icons
======================
   */
.head {
  display: flex;
  margin-left: 22px;
  height: 7%;
}
.i-cargo {
  width: 29px;
  margin-bottom: -1.5px;
}

.i-plus {
  width: 28px;
  display: inline-block;
  margin-bottom: 23px;
  margin-left: 10px;
  cursor: pointer;
}
.flex {
  display: flex;
  flex-direction: column;
}
.l-data {
  max-width: 500px;
  max-height: 95px;
}
.r-data {
  max-width: 500px;
  max-height: 95px;
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
  width: 1100px;
  justify-content: space-between;
}
.data {
  margin: 10px;
  width: 500px;
}
.cargoData {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 68%;
  overflow: auto;
  margin-top: 10px;
}
.dataLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 48%;
  height: 100%;
}
.dataRight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 48%;
  height: 100%;
}
.columnData {
  height: 93px;
}
.savebtn {
  margin: 12px;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  width: 70px;
  margin-top: 90%;
}
.btn {
  border: none;
  padding: 0.5px 80px;
  text-decoration: none;
  border-radius: 22.5px;
  background-color: #14234f;
  margin-top: 2%;
  cursor: pointer;
  outline: none;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
