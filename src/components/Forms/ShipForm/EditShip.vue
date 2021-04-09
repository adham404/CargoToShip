<template>
  <!--
==========================
     container sheet
==========================
  -->
  <v-sheet
    class="wight"
    style="border-radius:15px;

    justify-content:center;
    align-self:center;
    height:100%; width:100%; "
  >
    <div class="headS">
      <h2 class="font-weight-medium text-center pb-1 mt-2">
        <img src="../../assets/BlackShip.svg" alt="ship" />
        Edit Ship
      </h2>
    </div>
    <v-divider style="border-color:#0A3255;"></v-divider>
    <div class="shipData">
      <!--
        =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
                    Left Data
        =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
      -->
      <div class="dataLeft">
        <div class="columnData">
          <h3>Ship Name:</h3>
          <v-text-field
            v-model="ShipData.ShipName"
            @input="valShipName"
            :error="errShipName"
            :error-messages="errShipNameMsg"
            label="Enter Ship Name"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>Nationality:</h3>
          <v-autocomplete
            v-model="ShipData.Nationality"
            @input="valNationality"
            :error="errNationality"
            :menu-props="{ maxHeight: '200',maxWidth:'300' }"
            :items="Countries"
            label="Select Nationality"
            hide-details
            outlined
            solo
            dense
            style="width:300px; border-radius:5px; ;"
          >
            <template slot="selection" slot-scope="data">
              <v-avatar>
                <country-flag :country="data.item.code" />
              </v-avatar>
              <div>{{ data.item.text }}</div>
            </template>
            <template slot="item" slot-scope="data">
              <v-list-item-avatar>
                <country-flag :country="data.item.code" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ data.item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Official No.:</h3>
          <v-text-field
            v-model="ShipTime.OfficialNo"
            @input="valOfficialNo"
            :error="errOfficialNo"
            :error-messages="errOfficialNoMsg"
            label="Enter the Ship Official Number"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>

        <div class="columnData">
          <h3>Type of Ship:</h3>

          <v-select
            v-model="ShipData.TypeOfShip"
            @input="valTypeOfShip"
            :error="errTypeOfShip"
            :items="ShipTypes"
            :menu-props="{ maxHeight: '200' }"
            label="Select Type of Ship:"
            hide-details
            outlined
            dense
            solo
            style="width:300px; border-radius:5px;"
          ></v-select>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>M.M.S.I:</h3>
          <v-text-field
            v-model="ShipTime.MMSIno"
            @input="valMMSI"
            :error="errMMSI"
            :error-messages="errMMSIMsg"
            label="Enter M.M.S.I Number "
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>L.O.A:</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="LOAno"
              @input="valLOA"
              :error="errLOA"
              :error-messages="errLOAMsg"
              label="Enter Length overall "
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <v-select
              v-model="LOAUnit"
              @input="valLOA"
              :error="errLOAUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:110px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div class="columnData">
          <h3>Breadth</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="BreadthNo"
              @input="valBreadth"
              :error="errBreadthNo"
              :error-messages="errBreadthMsg"
              label="Enter The Breadth"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <v-select
              v-model="BreadthUnit"
              @input="valBreadth"
              :error="errBreadthUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:110px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div class="columnData">
          <h3>N.R.T:</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="NRT"
              @input="valNRT"
              :error="errNRT"
              :error-messages="errNRTMsg"
              label="Enter the Net Tonnage "
              solo
              outlined
              dense
              style="width:2950px; border-radius:5px; "
            ></v-text-field>
            <h3 style="margin-left:9px; margin-top:7px;">MT</h3>
          </div>
        </div>
        <div class="columnData">
          <h3>Bale Capacity:</h3>
          <v-text-field
            v-model="ShipData.BaleCapacity"
            @input="valBaleCapacity"
            :error="errBaleCapacity"
            :error-messages="errBaleCapacityMsg"
            label="Enter Bale Capacity"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>Hold Type:</h3>
          <v-select
            v-model="ShipData.HoldType"
            @input="valHoldType"
            :error="errHoldType"
            :items="HoldTypes"
            label="Select Hold Type:"
            hide-details
            outlined
            dense
            solo
            style="width:300px; border-radius:5px;"
          ></v-select>
        </div>
        <div class="columnData">
          <h3>Summer Draft</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="SummerDraftNo"
              @input="valSummerDraft"
              :error="errSummerDraftNo"
              :error-messages="errSummerDraftNoMsg"
              label="Enter Summer Draft"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <v-select
              v-model="SummerDraftUnit"
              @input="valSummerDraft"
              :error="errSummerDraftUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:110px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Summer Freeboard</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="SummerFreeNo"
              @input="valSummerFreeNo"
              :error="errSummerFreeNo"
              :error-messages="errSummerFreeNoMsg"
              label="Enter Summer Freeboard"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <v-select
              v-model="SummerFreeUnit"
              @input="valSummerFreeNo"
              :error="errSummerFreeUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:110px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div class="columnData">
          <h3>Air Draft</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="AirDraftNo"
              @input="valAirDraft"
              :error="errAirDraftNo"
              :error-messages="errAirDraftNoMsg"
              label="Enter The Air Draft"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <v-select
              v-model="AirDraftUnit"
              @input="valAirDraft"
              :error="errAirDraftUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:110px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div class="columnData">
          <h3>Owner</h3>
          <v-text-field
            v-model="ShipData.Owner"
            @input="valOwner"
            :error="errOwner"
            :error-messages="errOwnerMsg"
            label="Enter Owner Name"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px;  "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>Operator:</h3>
          <v-text-field
            v-model="ShipData.Operator"
            @input="valOperator"
            :error="errOperator"
            :error-messages="errOperatorMsg"
            label="Enter The Operatot name"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Class</h3>
          <v-text-field
            v-model="ShipTime.Class"
            @input="valClass"
            :error="errClass"
            :error-messages="errClassMsg"
            label="Enter The Operatot name"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>

        <div class="columnData">
          <h3>Availability Sectors:</h3>
          <v-autocomplete
            v-model="ShipData.AvailabilitySector"
            @input="valAvailabilitySector"
            :error="errAvailabilitySector"
            :items="shipPorts"
            :menu-props="{ maxHeight: '200' }"
            outlined
            dense
            solo
            label="Search for Ports"
            multiple
            style="width:300px; border-radius:5px; "
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item.text }}</span>
              </v-chip>
              <span
                v-if="index === 1"
                class="caption"
              >(+{{ ShipData.AvailabilitySector.length - 1 }} others)</span>
            </template>
          </v-autocomplete>
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
              ref="contact"
              @input="valContactInfo"
              :error="errContactInfo[0]"
              :error-messages="errContactInfo0(0)"
              label="Enter Phone Number"
              solo
              outlined
              dense
              style="width:185px; border-radius:5px; "
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
              style="width:185px; border-radius:5px; "
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
      <!--
        =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
                    Right Data
        =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
      -->
      <div class="dataRight">
        <div class="columnData">
          <h3>Chartering Type:</h3>
          <v-select
            v-model="CharteringType"
            @input="valCharteringType"
            @change="DetectChartering"
            :error="errCharteringType"
            :items="CharteringTypes"
            label="Select Chatering Type:"
            hide-details
            outlined
            dense
            solo
            style="width:300px; border-radius:5px;"
          ></v-select>
        </div>
        <div class="columnData">
          <h3>Port of Registry:</h3>
          <v-text-field
            v-model="ShipData.PortOfRegistry"
            @input="valPortOfRegistry"
            :error="errPortOfRegistry"
            :error-messages="errPortOfRegistryMsg"
            label="Enter Port Of Registry"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>I.M.O:</h3>
          <v-text-field
            v-model="ShipData.IMO"
            @input="valIMO"
            :error="errIMO"
            :error-messages="errIMOMsg"
            label="Enter I.M.O Number "
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Call Sign:</h3>
          <v-text-field
            v-model="ShipTime.CallSign"
            @input="valCallSign"
            :error="errCallSign"
            :error-messages="errCallSignMsg"
            label="Enter the Call Sign"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>L.B.P:</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="LBPno"
              @input="valLBP"
              :error="errLBPno"
              :error-messages="errLBPNoMsg"
              label="Enter LBP Number "
              solo
              outlined
              dense
              style="width:240px; border-radius:5px; "
            ></v-text-field>
            <v-select
              v-model="LBPUnit"
              @input="valLBP"
              :error="errLBPUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:130px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Moulded Depth</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="ModDepthNo"
              @input="valModDepthNo"
              :error="errModDepthNo"
              :error-messages="errModDepthNoMsg"
              label="Enter Moulde Depth"
              solo
              outlined
              dense
              style="width:240px; border-radius:5px;  "
            ></v-text-field>
            <v-select
              v-model="MouldeUnit"
              @input="valModDepthNo"
              :error="errMouldeUnit"
              :items="Units"
              label="Unit"
              hide-details
              outlined
              dense
              solo
              style="width:130px; border-radius:5px;  margin-left:5px;"
            ></v-select>
          </div>
        </div>

        <div class="columnData">
          <h3>G.R.T</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="GRT"
              @input="valGRT"
              :error="errGRT"
              :error-messages="errGRTMsg"
              label="Enter the Gross Tonnage "
              solo
              outlined
              dense
              style="width:2950px; border-radius:5px; "
            ></v-text-field>
            <h3 style="margin-left:9px; margin-top:7px;">MT</h3>
          </div>
        </div>
        <div class="columnData">
          <h3>Grain Capacity:</h3>
          <v-text-field
            v-model="ShipData.GrainCapacity"
            @input="valGrainCapacity"
            :error="errGrainCapacity"
            :error-messages="errGrainCapacityMsg"
            label="Enter Grain Capacity"
            solo
            outlined
            dense
            style="width:300px; border-radius:5px; "
          ></v-text-field>
        </div>
        <div class="columnData">
          <h3>Hold Volume Cubic Meter:</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="HoldVolumeCubicMeter"
              @input="valHoldVolume"
              :error="errHoldVolume"
              :error-messages="errHoldVolumeMsg"
              label="Enter the Hold Volume"
              solo
              outlined
              dense
              style="width:2950px; border-radius:5px; "
            ></v-text-field>
            <h3 style="margin-left:9px; margin-top:7px;">M³</h3>
          </div>
        </div>
        <div class="columnData">
          <div style="    display: flex;
        width: 300px;">
            <h3>Ready to Carry Dangerous Goods:</h3>
            <v-checkbox v-model="ShipData.ReadyToCarryDangerousGoods" style="display:inline-block;"></v-checkbox>
          </div>
        </div>
        <div class="columnData">
          <h3>Dead Weight</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="DeadWeight"
              @input="valDeadWeight"
              :error="errDeadWeight"
              :error-messages="errDeadWeightMsg"
              label="Enter Dead Weight"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <h3 style="margin-left:9px; margin-top:7px;">MT</h3>
          </div>
        </div>
        <div class="columnData" style="width:300px;">
          <h3>Year of Built</h3>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="ShipData.BuildYear"
            transition="scale-transition"
            offset-y
            min-width="270px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="ShipData.BuildYear"
                @input="valBuildYear"
                :error="errBuildYear"
                :error-messages="errBuildYearMsg"
                label="Select Year"
                readonly
                outlined
                dense
                v-bind="attrs"
                v-on="on"
                solo
                style="width:120px; border-radius:5px;  "
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="ShipData.BuildYear"
              @input="valBuildYear"
              no-title
              scrollable
              :max="new Date().toISOString().substr(0, 10)"
              min="1920-01-01"
              @change="saveYear"
              type="year"
            ></v-date-picker>
          </v-menu>
        </div>
        <div class="AddressData">
          <h3>Owner Address:</h3>
          <div style="    display: flex;
    width: 500px;">
            <v-text-field
              v-model="OwnerAddressLine"
              @input="valOwnerAddress"
              :error="errOwnerAddress"
              :error-messages="errOwnerAddressMsg"
              label="Address"
              outlined
              dense
              style="width:100px; border-radius:5px;  "
            ></v-text-field>
            <v-autocomplete
              v-model="OwnerAddressCountry"
              @input="valOwnerCountry"
              :error="errOwnerCountry"
              :menu-props="{ maxHeight: '180' }"
              label="Country"
              :items="Countries"
              hide-details
              outlined
              dense
              style="width:82px; border-radius:5px;  "
            ></v-autocomplete>
            <v-text-field
              v-model="OwnerAddressZipCode"
              @input="valOwnerZipCode"
              :error="errOwnerZipCode"
              :error-messages="errOwnerZipCodeMsg"
              label="Zip Code"
              outlined
              dense
              style="width:80px; border-radius:5px;  "
            ></v-text-field>
            <v-text-field
              v-model="OwnerAddressPhone"
              @input="valOwnerPhone"
              :error="errOwnerPhone"
              :error-messages="errOwnerPhoneMsg"
              label="Phone"
              outlined
              dense
              style="width:95px; border-radius:5px;  "
            ></v-text-field>
          </div>
        </div>
        <div class="AddressData">
          <h3>Operator Address:</h3>
          <div style="    display: flex;
    width: 500px;">
            <v-text-field
              v-model="OperatorAddressLine"
              @input="valOperatorAddress"
              :error="errOperatorAddress"
              :error-messages="OperatorAddressMsg"
              label="Address"
              outlined
              dense
              style="width:100px; border-radius:5px;  "
            ></v-text-field>
            <v-autocomplete
              v-model="OperatorAddressCountry"
              @input="valOperatorCountry"
              :error="errOperatorCountry"
              :menu-props="{ maxHeight: '180' }"
              label="Country"
              :items="Countries"
              hide-details
              outlined
              dense
              style="width:82px; border-radius:5px;  "
            ></v-autocomplete>
            <v-text-field
              v-model="OperatorAddressZipCode"
              @input="valOperatorZipCode"
              :error="errOperatorZipCode"
              :error-messages="OperatorZipCodeMsg"
              label="Zip Code"
              outlined
              dense
              style="width:80px; border-radius:5px;  "
            ></v-text-field>
            <v-text-field
              v-model="OperatorAddressPhone"
              @input="valOperatorPhone"
              :error="errOperatorPhone"
              :error-messages="errOperatorPhoneMsg"
              label="Phone"
              outlined
              dense
              style="width:95px; border-radius:5px;  "
            ></v-text-field>
          </div>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Engine Power</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="EnginePower"
              @input="valEnginePower"
              :error="errEnginePower"
              :error-messages="errEnginePowerMsg"
              label="Enter Engine Power"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <h3 style="margin-left:9px; margin-top:7px;">HP</h3>
          </div>
        </div>
        <div v-show="this.ShipData.TimeCharterring" class="columnData">
          <h3>Economy Speed</h3>
          <div style="    display: flex;
    width: 300px;">
            <v-text-field
              v-model="EconomySpeed"
              @input="valEconomySpeed"
              :error="errEconomySpeed"
              :error-messages="errEconomySpeedMsg"
              label="Enter Economy Speed"
              solo
              outlined
              dense
              style="width:220px; border-radius:5px;  "
            ></v-text-field>
            <h3 style="margin-left:9px; margin-top:7px;">Knots</h3>
          </div>
        </div>

        <div class="columnData">
          <div class="columnData">
            <h3>Availability:</h3>
            <div style="    display: flex;
    width: 300px; justify-content:space-between;">
              <v-menu
                ref="menu1"
                v-model="menu1"
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
                  <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu1.save(fromDate)">OK</v-btn>
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
      </div>
      <div class="savebtn">
        <button class="btn" @click="save">Save</button>
      </div>
    </div>

    <!-- <div v-show="set">
      <p>{{ShipData.ShipName}}</p>
      <p>{{ShipData.Nationality}}</p>
      <p>{{ShipData.PortOfRegistry}}</p>
      <p>{{ShipData.TypeOfShip}}</p>
      <p>{{ShipData.IMO}}</p>
      <p>{{ShipData.LOA}}</p>
      <p>{{ShipData.LBP}}</p>
      <p>{{ShipData.Breadth}}</p>
      <p>{{ShipData.GRT}}</p>
      <p>{{ShipData.NRT}}</p>
      <p>{{ShipData.GrainCapacity}}</p>
      <p>{{ShipData.BaleCapacity}}</p>
      <p>{{ShipData.HoldVolumeCubicMeter}}</p>
      <p>{{ShipData.HoldType}}</p>
      <p>{{ShipData.ReadyToCarryDangerousGoods}}</p>
      <p>{{ShipData.SummerDraft}}</p>
      <p>{{ShipData.DeadWeight}}</p>
      <p>{{ShipData.AirDraft}}</p>
      <p>{{ShipData.Owner}}</p>
      <p>{{ShipData.OwnerAddress}}</p>
      <p>{{ShipData.Operator}}</p>
      <p>{{ShipData.OperatorAddress}}</p>
      <p>{{ShipData.BuildYear}}</p>
      <p>{{ShipData.Availability}}</p>
      <p>{{ShipData.AvailabilitySector}}</p>
      <p>{{ShipData.TimeCharterring}}</p>
      <p>{{ShipData.VoyageChartering}}</p>
      <p>{{ShipTime.EconomySpeed}}</p>
      <p>{{ShipTime.EnginePower}}</p>
      <p>{{ShipTime.Class}}</p>
      <p>{{ShipTime.SummerFreeBoard}}</p>
      <p>{{ShipTime.MouldeDepth}}</p>
      <p>{{ShipTime.MMSIno}}</p>
      <p>{{ShipTime.CallSign}}</p>
      <p>{{ShipTime.OfficialNo}}</p>
      <p>{{ShipVoyage.ContactInfo}}</p>
    </div>
    <p>{{ShipsVoyage.ContactInfo}}</p>
    <p>{{ShipTime}}</p>
    <p>{{ContactInfoCode}}</p> -->
  </v-sheet>
</template>


<script>
import firebase from "firebase";
import test from "../../assets/sectors.json";
// import CargoPhone from "./CargoPhone";
// import { EventBus } from "../main";
import country from "../../assets/countries.json";
import CountryFlag from "vue-country-flag";

export default {
  name: "AddShip",
  components: {
    CountryFlag
  },
  props: ["ShipData", "ShipTime"],
  data() {
    return {
      test,
      persistentHint: true,
      hint: "Address",
      CharteringType: "",
      CharteringTypes: [
        { text: "Time", value: "Time" },
        { text: "Voyage", value: "Voyage" },
        { text: "Time & Voyage", value: "Time & Voyage" }
      ],
      ContactInfoCode: [],
      ContactInfo: [],
      country,
      Countries: [],
      Units: [
        { text: "Meter", value: "Meter" },
        { text: "Feet", value: "Feet" }
      ],
      HoldTypes: [
        { text: "Box Shape", value: "Box Shape" },
        { text: "Frame", value: "Frame" }
      ],
      shipPorts: [],
      phone: 0,
      flag: null,
      add: false,
      addField: [],
      LOAno: this.ShipData.LOA.substring(
        0,
        this.ShipData.LOA.indexOf("M" || "F")
      ),
      LOAUnit: this.ShipData.LOA.substring(
        this.ShipData.LOA.indexOf("M" || "F"),
        this.ShipData.LOA.length
      ),
      LBPno: this.ShipData.LBP.substring(
        0,
        this.ShipData.LBP.indexOf("M" || "F")
      ),
      LBPUnit: this.ShipData.LBP.substring(
        this.ShipData.LBP.indexOf("M" || "F"),
        this.ShipData.LBP.length
      ),
      BreadthNo: this.ShipData.Breadth.substring(
        0,
        this.ShipData.Breadth.indexOf("M" || "F")
      ),
      BreadthUnit: this.ShipData.Breadth.substring(
        this.ShipData.Breadth.indexOf("M" || "F"),
        this.ShipData.Breadth.length
      ),
      NRT: this.ShipData.NRT.substring(0, this.ShipData.NRT.length - 2),
      GRT: this.ShipData.GRT.substring(0, this.ShipData.GRT.length - 2),
      EnginePower: this.ShipTime.EnginePower.substring(
        0,
        this.ShipTime.EnginePower.length - 2
      ),
      EconomySpeed: this.ShipTime.EconomySpeed.substring(
        0,
        this.ShipTime.EconomySpeed.length - 5
      ),
      HoldVolumeCubicMeter: this.ShipData.HoldVolumeCubicMeter.substring(
        0,
        this.ShipData.HoldVolumeCubicMeter.length - 2
      ),
      DeadWeight: this.ShipData.DeadWeight.substring(
        0,
        this.ShipData.DeadWeight.length - 2
      ),
      ModDepthNo: this.ShipTime.MouldeDepth.substring(
        0,
        this.ShipTime.MouldeDepth.indexOf("M" || "F")
      ),
      MouldeUnit: this.ShipTime.MouldeDepth.substring(
        this.ShipTime.MouldeDepth.indexOf("M" || "F"),
        this.ShipTime.MouldeDepth.length
      ),
      SummerDraftNo: this.ShipData.SummerDraft.substring(
        0,
        this.ShipData.SummerDraft.indexOf("M" || "F")
      ),
      SummerDraftUnit: this.ShipData.SummerDraft.substring(
        this.ShipData.SummerDraft.indexOf("M" || "F"),
        this.ShipData.SummerDraft.length
      ),
      SummerFreeNo: this.ShipTime.SummerFreeBoard.substring(
        0,
        this.ShipTime.SummerFreeBoard.indexOf("M" || "F")
      ),
      SummerFreeUnit: this.ShipTime.SummerFreeBoard.substring(
        this.ShipTime.SummerFreeBoard.indexOf("M" || "F"),
        this.ShipTime.SummerFreeBoard.length
      ),
      AirDraftNo: this.ShipData.AirDraft.substring(
        0,
        this.ShipData.AirDraft.indexOf("M" || "F")
      ),
      AirDraftUnit: this.ShipData.AirDraft.substring(
        this.ShipData.AirDraft.indexOf("M" || "F"),
        this.ShipData.AirDraft.length
      ),
      fromDate: this.ShipData.Availability.substring(0, 10),
      toDate: this.ShipData.Availability.substring(14, 24),
      OwnerAddressIndex: [],
      OperatorAddressIndex: [],
      OwnerAddressLine: "",
      OwnerAddressCountry: "",
      OwnerAddressZipCode: "",
      OwnerAddressPhone: "",
      OperatorAddressLine: "",
      OperatorAddressCountry: "",
      OperatorAddressZipCode: "",
      OperatorAddressPhone: "",
      ShipTypes: [
        { text: "Container Ship", value: "Container Ship" },
        { text: "Bulk Ship", value: "Bulk Ship" },
        { text: "Tank Ship", value: "Tank Ship" },
        { text: "Reefer", value: "Reefer" },
        { text: "Ro-Ro Ship", value: "Ro-Ro Ship" },
        { text: "Timber Carrier", value: "Timber Carrier" },
        { text: "General Cargo Ship", value: "General Cargo Ship" }
      ],
      menu: false,
      menu1: false,
      menu2: false,
      set: false,
      // Voyage Ships Table
      ShipsVoyage: {
        ShipID: "",
        ShipName: "",
        Nationality: "",
        PortOfRegistry: "",
        TypeOfShip: "",
        IMO: "",
        LOA: "",
        LBP: "",
        Breadth: "",
        GRT: "",
        NRT: "",
        GrainCapacity: "",
        BaleCapacity: "",
        HoldVolumeCubicMeter: "",
        HoldType: "",
        ReadyToCarryDangerousGoods: false,
        SummerDraft: "",
        DeadWeight: "",
        AirDraft: "",
        Owner: "",
        OwnerAddress: "",
        Operator: "",
        OperatorAddress: "",
        BuildYear: "",
        Availability: "",
        AvailabilitySector: [],
        ContactInfo: [],
        TimeCharterring: false,
        VoyageChartering: false,
        UserID: ""
      },
      // Time Ships Table
      ShipsTime: {
        ShipID: this.ShipData.ShipID,
        EconomySpeed: "",
        EnginePower: "",
        Class: "",
        SummerFreeBoard: "",
        MouldeDepth: "",
        MMSIno: "",
        CallSign: "",
        OfficialNo: ""
      },
      errShipName: false,
      errNationality: false,
      errTypeOfShip: false,
      errLOA: false,
      errLOAUnit: false,
      errBreadthNo: false,
      errBreadthUnit: false,
      errNRT: false,
      errBaleCapacity: false,
      errHoldType: false,
      errSummerDraftNo: false,
      errSummerDraftUnit: false,
      errAirDraftNo: false,
      errAirDraftUnit: false,
      errOwner: false,
      errOperator: false,
      errAvailabilitySector: false,
      errCharteringType: false,
      errPortOfRegistry: false,
      errIMO: false,
      errLBPno: false,
      errLBPUnit: false,
      errGRT: false,
      errGrainCapacity: false,
      errHoldVolume: false,
      errDeadWeight: false,
      errBuildYear: false,
      errFromDate: false,
      errToDate: false,
      errOwnerAddress: false,
      errOwnerCountry: false,
      errOwnerZipCode: false,
      errOwnerPhone: false,
      errOperatorAddress: false,
      errOperatorCountry: false,
      errOperatorZipCode: false,
      errOperatorPhone: false,
      //for time ships
      errOfficialNo: false,
      errCallSign: false,
      errMMSI: false,
      errModDepthNo: false,
      errMouldeUnit: false,
      errSummerFreeNo: false,
      errSummerFreeUnit: false,
      errClass: false,
      errEnginePower: false,
      errEconomySpeed: false,
      errContactInfo: []
    };
  },

  methods: {
    saveYear() {
      this.ShipData.BuildYear = this.ShipData.BuildYear.substring(0, 4);
      this.$refs.menu.save(this.ShipData.BuildYear);
    },
    DetectChartering() {
      if (this.CharteringType == "Voyage") {
        this.ShipData.TimeCharterring = false;
        this.ShipData.VoyageChartering = true;
      } else if (this.CharteringType == "Time & Voyage") {
        this.ShipData.TimeCharterring = true;
        this.ShipData.VoyageChartering = true;
      } else {
        this.ShipData.TimeCharterring = true;
        this.ShipData.VoyageChartering = false;
      }
    },
    AddPhone() {
      this.phone++;
      this.add = true;
      this.addField.push(this.phone);
    },
    /*
    =*=*=*=*=*=*=*=*=*=*=*=
     Left data validation
    =*=*=*=*=*=*=*=*=*=*=*=
    */
    valShipName() {
      if (this.ShipData.ShipName != "") {
        this.errShipName = false;
      } else {
        this.errShipName = true;
      }
    },
    valNationality() {
      if (this.ShipData.Nationality != "") {
        this.errNationality = false;
      } else {
        this.errNationality = true;
      }
    },
    valOfficialNo() {
      if (
        this.ShipTime.OfficialNo != "" &&
        !isNaN(this.ShipTime.OfficialNo) &&
        this.ShipTime.OfficialNo.length == 6
      ) {
        this.errOfficialNo = false;
      } else {
        this.errOfficialNo = true;
      }
    },
    valTypeOfShip() {
      if (this.ShipData.TypeOfShip != "") {
        this.errTypeOfShip = false;
      } else {
        this.errTypeOfShip = true;
      }
    },
    valMMSI() {
      if (this.ShipTime.MMSIno != "" && !isNaN(this.ShipTime.MMSIno)) {
        this.errMMSI = false;
      } else {
        this.errMMSI = true;
      }
    },
    valLOA() {
      if (!isNaN(this.LOAno) && this.LOAno != "" && this.LOAUnit != "") {
        this.errLOA = false;
        this.errLOAUnit = false;
      } else if (!isNaN(this.LOAno) && this.LOAno != "" && this.LOAUnit == "") {
        this.errLOA = false;
        this.errLOAUnit = true;
      } else if (
        isNaN(this.LOAno) ||
        (this.LOAno == "" && this.LOAUnit != "")
      ) {
        this.errLOA = true;
        this.errLOAUnit = false;
      } else {
        this.errLOA = true;
        this.errLOAUnit = true;
      }
    },
    valBreadth() {
      if (
        !isNaN(this.BreadthNo) &&
        this.BreadthNo != "" &&
        this.BreadthUnit != ""
      ) {
        this.errBreadthNo = false;
        this.errBreadthUnit = false;
      } else if (
        !isNaN(this.BreadthNo) &&
        this.BreadthNo != "" &&
        this.BreadthUnit == ""
      ) {
        this.errBreadthNo = false;
        this.errBreadthUnit = true;
      } else if (
        isNaN(this.BreadthNo) ||
        (this.BreadthNo == "" && this.BreadthUnit != "")
      ) {
        this.errBreadthNo = true;
        this.errBreadthUnit = false;
      } else {
        this.errBreadthNo = true;
        this.errBreadthUnit = true;
      }
    },
    valNRT() {
      if (this.NRT != "" && !isNaN(this.NRT)) {
        this.errNRT = false;
      } else {
        this.errNRT = true;
      }
    },
    valBaleCapacity() {
      if (
        this.ShipData.BaleCapacity != "" &&
        !isNaN(this.ShipData.BaleCapacity)
      ) {
        this.errBaleCapacity = false;
      } else {
        this.errBaleCapacity = true;
      }
    },
    valHoldType() {
      if (this.ShipData.HoldType != "") {
        this.errHoldType = false;
      } else {
        this.errHoldType = true;
      }
    },
    valSummerDraft() {
      if (
        !isNaN(this.SummerDraftNo) &&
        this.SummerDraftNo != "" &&
        this.SummerDraftUnit != ""
      ) {
        this.errSummerDraftNo = false;
        this.errSummerDraftUnit = false;
      } else if (
        !isNaN(this.SummerDraftNo) &&
        this.SummerDraftNo != "" &&
        this.SummerDraftUnit == ""
      ) {
        this.errSummerDraftNo = false;
        this.errSummerDraftUnit = true;
      } else if (
        isNaN(this.SummerDraftNo) ||
        (this.SummerDraftNo == "" && this.SummerDraftUnit != "")
      ) {
        this.errSummerDraftNo = true;
        this.errSummerDraftUnit = false;
      } else {
        this.errSummerDraftNo = true;
        this.errSummerDraftUnit = true;
      }
    },
    valSummerFreeNo() {
      if (
        !isNaN(this.SummerFreeNo) &&
        this.SummerFreeNo != "" &&
        this.SummerFreeUnit != ""
      ) {
        this.errSummerFreeNo = false;
        this.errSummerFreeUnit = false;
      } else if (
        !isNaN(this.SummerFreeNo) &&
        this.SummerFreeNo != "" &&
        this.SummerFreeUnit == ""
      ) {
        this.errSummerFreeNo = false;
        this.errSummerFreeUnit = true;
      } else if (
        isNaN(this.SummerFreeNo) ||
        (this.SummerFreeNo == "" && this.SummerFreeUnit != "")
      ) {
        this.errSummerFreeNo = true;
        this.errSummerFreeUnit = false;
      } else {
        this.errSummerFreeNo = true;
        this.errSummerFreeUnit = true;
      }
    },
    valAirDraft() {
      if (
        !isNaN(this.AirDraftNo) &&
        this.AirDraftNo != "" &&
        this.AirDraftUnit != ""
      ) {
        this.errAirDraftNo = false;
        this.errAirDraftUnit = false;
      } else if (
        !isNaN(this.AirDraftNo) &&
        this.AirDraftNo != "" &&
        this.AirDraftUnit == ""
      ) {
        this.errAirDraftNo = false;
        this.errAirDraftUnit = true;
      } else if (
        isNaN(this.AirDraftNo) ||
        (this.AirDraftNo == "" && this.AirDraftUnit != "")
      ) {
        this.errAirDraftNo = true;
        this.errAirDraftUnit = false;
      } else {
        this.errAirDraftNo = true;
        this.errAirDraftUnit = true;
      }
    },
    valOwner() {
      if (this.ShipData.Owner != "") {
        this.errOwner = false;
      } else {
        this.errOwner = true;
      }
    },
    valOperator() {
      if (this.ShipData.Operator != "") {
        this.errOperator = false;
      } else {
        this.errOperator = true;
      }
    },
    valClass() {
      if (this.ShipTime.Class != "") {
        this.errClass = false;
      } else {
        this.errClass = true;
      }
    },
    valAvailabilitySector() {
      if (this.ShipData.AvailabilitySector.length != 0) {
        this.errAvailabilitySector = false;
      } else {
        this.errAvailabilitySector = true;
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
    /*
    =*=*=*=*=*=*=*=*=*=*=*=
     Right data validation
    =*=*=*=*=*=*=*=*=*=*=*=
    */
    valCharteringType() {
      if (this.CharteringType != "") {
        this.errCharteringType = false;
      } else {
        this.errCharteringType = true;
      }
    },
    valPortOfRegistry() {
      if (this.ShipData.PortOfRegistry != "") {
        this.errPortOfRegistry = false;
      } else {
        this.errPortOfRegistry = true;
      }
    },
    valIMO() {
      if (this.ShipData.IMO != "" && !isNaN(this.ShipData.IMO)) {
        this.errIMO = false;
      } else {
        this.errIMO = true;
      }
    },
    valCallSign() {
      if (this.ShipTime.CallSign != "") {
        this.errCallSign = false;
      } else {
        this.errCallSign = true;
      }
    },
    valLBP() {
      if (!isNaN(this.LBPno) && this.LBPno != "" && this.LBPUnit != "") {
        this.errLBPno = false;
        this.errLBPUnit = false;
      } else if (!isNaN(this.LBPno) && this.LBPno != "" && this.LBPUnit == "") {
        this.errLBPno = false;
        this.errLBPUnit = true;
      } else if (
        isNaN(this.LBPno) ||
        (this.LBPno == "" && this.LBPUnit != "")
      ) {
        this.errLBPno = true;
        this.errLBPUnit = false;
      } else {
        this.errLBPno = true;
        this.errLBPUnit = true;
      }
    },
    valModDepthNo() {
      if (
        !isNaN(this.ModDepthNo) &&
        this.ModDepthNo != "" &&
        this.MouldeUnit != ""
      ) {
        this.errModDepthNo = false;
        this.errMouldeUnit = false;
      } else if (
        !isNaN(this.ModDepthNo) &&
        this.ModDepthNo != "" &&
        this.MouldeUnit == ""
      ) {
        this.errModDepthNo = false;
        this.errMouldeUnit = true;
      } else if (
        isNaN(this.ModDepthNo) ||
        (this.ModDepthNo == "" && this.MouldeUnit != "")
      ) {
        this.errModDepthNo = true;
        this.errMouldeUnit = false;
      } else {
        this.errModDepthNo = true;
        this.errMouldeUnit = true;
      }
    },
    valGRT() {
      if (this.GRT != "" && !isNaN(this.GRT)) {
        this.errGRT = false;
      } else {
        this.errGRT = true;
      }
    },
    valGrainCapacity() {
      if (
        this.ShipData.GrainCapacity != "" &&
        !isNaN(this.ShipData.GrainCapacity)
      ) {
        this.errGrainCapacity = false;
      } else {
        this.errGrainCapacity = true;
      }
    },
    valHoldVolume() {
      if (
        this.HoldVolumeCubicMeter != "" &&
        !isNaN(this.HoldVolumeCubicMeter)
      ) {
        this.errHoldVolume = false;
      } else {
        this.errHoldVolume = true;
      }
    },
    valDeadWeight() {
      if (this.DeadWeight != "" && !isNaN(this.DeadWeight)) {
        this.errDeadWeight = false;
      } else {
        this.errDeadWeight = true;
      }
    },
    valBuildYear() {
      if (this.ShipData.BuildYear != "") {
        this.errBuildYear = false;
      } else {
        this.errBuildYear = true;
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
    // Owner Address 4 inputs
    valOwnerAddress() {
      if (this.OwnerAddressLine != "") {
        this.errOwnerAddress = false;
      } else {
        this.errOwnerAddress = true;
      }
    },
    valOwnerPhone() {
      if (this.OwnerAddressPhone != "" && !isNaN(this.OwnerAddressPhone)) {
        this.errOwnerPhone = false;
      } else {
        this.errOwnerPhone = true;
      }
    },
    valOwnerCountry() {
      if (this.OwnerAddressCountry != "") {
        this.errOwnerCountry = false;
      } else {
        this.errOwnerCountry = true;
      }
    },
    valOwnerZipCode() {
      if (this.OwnerAddressZipCode != "" && !isNaN(this.OwnerAddressZipCode)) {
        this.errOwnerZipCode = false;
      } else {
        this.errOwnerZipCode = true;
      }
    },
    // Operator Address 4 inputs
    valOperatorAddress() {
      if (this.OperatorAddressLine != "") {
        this.errOperatorAddress = false;
      } else {
        this.errOperatorAddress = true;
      }
    },
    valOperatorPhone() {
      if (
        this.OperatorAddressPhone != "" &&
        !isNaN(this.OperatorAddressPhone)
      ) {
        this.errOperatorPhone = false;
      } else {
        this.errOperatorPhone = true;
      }
    },
    valOperatorCountry() {
      if (this.OperatorAddressCountry != "") {
        this.errOperatorCountry = false;
      } else {
        this.errOperatorCountry = true;
      }
    },
    valOperatorZipCode() {
      if (
        this.OperatorAddressZipCode != "" &&
        !isNaN(this.OperatorAddressZipCode)
      ) {
        this.errOperatorZipCode = false;
      } else {
        this.errOperatorZipCode = true;
      }
    },
    valEnginePower() {
      if (this.EnginePower != "" && !isNaN(this.EnginePower)) {
        this.errEnginePower = false;
      } else {
        this.errEnginePower = true;
      }
    },
    valEconomySpeed() {
      if (this.EconomySpeed != "" && !isNaN(this.EconomySpeed)) {
        this.errEconomySpeed = false;
      } else {
        this.errEconomySpeed = true;
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
            this.ShipData.ContactInfo[i] = {
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
    /*
    =*=*=*=*=*=*=*=*=*=*
      Saving the Data
    =*=*=*=*=*=*=*=*=*=*
    */
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
    remove(p) {
      this.addField.splice(p, 1);
      this.ContactInfo.splice(p + 1, 1);
      this.errContactInfo.splice(p + 1, 1);
      this.ContactInfoCode.splice(p + 1, 1);
    },
    // Check if all valid
    allValid() {
      this.valShipName();
      this.valNationality();
      this.valOfficialNo();
      this.valTypeOfShip();
      this.valMMSI();
      this.valLOA();
      this.valBreadth();
      this.valNRT();
      this.valBaleCapacity();
      this.valHoldType();
      this.valSummerDraft();
      this.valSummerFreeNo();
      this.valAirDraft();
      this.valOwner();
      this.valOperator();
      this.valClass();
      this.valAvailabilitySector();
      this.valCharteringType();
      this.valPortOfRegistry();
      this.valIMO();
      this.valCallSign();
      this.valLBP();
      this.valModDepthNo();
      this.valGRT();
      this.valGrainCapacity();
      this.valHoldVolume();
      this.valDeadWeight();
      this.valBuildYear();
      this.valAvailability();
      this.valOwnerAddress();
      this.valOwnerPhone();
      this.valOwnerCountry();
      this.valOwnerZipCode();
      this.valOperatorAddress();
      this.valOperatorPhone();
      this.valOperatorCountry();
      this.valOperatorZipCode();
      this.valEnginePower();
      this.valEconomySpeed();
      this.savePhone();

      // for Time Ships

      if (this.ShipData.TimeCharterring == true) {
        if (
          this.errShipName == false &&
          this.errNationality == false &&
          this.errTypeOfShip == false &&
          this.errLOA == false &&
          this.errLOAUnit == false &&
          this.errBreadthNo == false &&
          this.errBreadthUnit == false &&
          this.errNRT == false &&
          this.errBaleCapacity == false &&
          this.errHoldType == false &&
          this.errSummerDraftNo == false &&
          this.errSummerDraftUnit == false &&
          this.errAirDraftNo == false &&
          this.errAirDraftUnit == false &&
          this.errOwner == false &&
          this.errOperator == false &&
          this.errAvailabilitySector == false &&
          this.errCharteringType == false &&
          this.errPortOfRegistry == false &&
          this.errIMO == false &&
          this.errLBPno == false &&
          this.errLBPUnit == false &&
          this.errGRT == false &&
          this.errGrainCapacity == false &&
          this.errHoldVolume == false &&
          this.errDeadWeight == false &&
          this.errBuildYear == false &&
          this.errFromDate == false &&
          this.errToDate == false &&
          this.errOwnerAddress == false &&
          this.errOwnerCountry == false &&
          this.errOwnerZipCode == false &&
          this.errOwnerPhone == false &&
          this.errOperatorAddress == false &&
          this.errOperatorCountry == false &&
          this.errOperatorZipCode == false &&
          this.errOperatorPhone == false &&
          this.errOfficialNo == false &&
          this.errCallSign == false &&
          this.errMMSI == false &&
          this.errModDepthNo == false &&
          this.errModDepthNo == false &&
          this.errMouldeUnit == false &&
          this.errSummerFreeNo == false &&
          this.errSummerFreeUnit == false &&
          this.errClass == false &&
          this.errEnginePower == false &&
          this.errEconomySpeed == false &&
          this.flag == true
        ) {
          this.set = true;
        } else {
          this.set = false;
        }
      } else {
        // for Voyage Ships
        if (
          this.errShipName == false &&
          this.errNationality == false &&
          this.errTypeOfShip == false &&
          this.errLOA == false &&
          this.errLOAUnit == false &&
          this.errBreadthNo == false &&
          this.errBreadthUnit == false &&
          this.errNRT == false &&
          this.errBaleCapacity == false &&
          this.errHoldType == false &&
          this.errSummerDraftNo == false &&
          this.errSummerDraftUnit == false &&
          this.errAirDraftNo == false &&
          this.errAirDraftUnit == false &&
          this.errOwner == false &&
          this.errOperator == false &&
          this.errAvailabilitySector == false &&
          this.errCharteringType == false &&
          this.errPortOfRegistry == false &&
          this.errIMO == false &&
          this.errLBPno == false &&
          this.errLBPUnit == false &&
          this.errGRT == false &&
          this.errGrainCapacity == false &&
          this.errHoldVolume == false &&
          this.errDeadWeight == false &&
          this.errBuildYear == false &&
          this.errFromDate == false &&
          this.errToDate == false &&
          this.errOwnerAddress == false &&
          this.errOwnerCountry == false &&
          this.errOwnerZipCode == false &&
          this.errOwnerPhone == false &&
          this.errOperatorAddress == false &&
          this.errOperatorCountry == false &&
          this.errOperatorZipCode == false &&
          this.errOperatorPhone == false &&
          this.flag == true
        ) {
          this.set = true;
        } else {
          this.set = false;
        }
      }
    },
    save() {
      this.allValid();
      var db = firebase.firestore();
      var test = await db.collection("Cargo").add({test: "test"});
      if (this.set) {
        this.ShipsVoyage.LOA = this.LOAno + this.LOAUnit;
        this.ShipsVoyage.LBP = this.LBPno + this.LBPUnit;
        this.ShipsVoyage.Breadth = this.BreadthNo + this.BreadthUnit;
        this.ShipsTime.MouldeDepth = this.ModDepthNo + this.MouldeUnit;
        this.ShipsVoyage.SummerDraft =
          this.SummerDraftNo + this.SummerDraftUnit;
        this.ShipsTime.SummerFreeBoard =
          this.SummerFreeNo + this.SummerFreeUnit;
        this.ShipsVoyage.AirDraft = this.AirDraftNo + this.AirDraftUnit;
        this.ShipsVoyage.Availability = this.fromDate + " to " + this.toDate;
        this.ShipsVoyage.OwnerAddress =
          this.OwnerAddressLine +
          " / " +
          this.OwnerAddressCountry +
          " / " +
          this.OwnerAddressZipCode +
          " / " +
          this.OwnerAddressPhone;
        this.ShipsVoyage.OperatorAddress =
          this.OperatorAddressLine +
          " / " +
          this.OperatorAddressCountry +
          " / " +
          this.OperatorAddressZipCode +
          " / " +
          this.OperatorAddressPhone;
        this.ShipsVoyage.NRT = this.ShipsVoyage.NRT + "MT";
        this.ShipsVoyage.GRT = this.ShipsVoyage.GRT + "MT";
        this.ShipsVoyage.HoldVolumeCubicMeter =
          this.ShipsVoyage.HoldVolumeCubicMeter + "M³";
        this.ShipsVoyage.DeadWeight = this.ShipsVoyage.DeadWeight + "MT";
        this.ShipsTime.EnginePower = this.ShipsTime.EnginePower + "HP";
        this.ShipsTime.EconomySpeed = this.ShipsTime.EconomySpeed + "Knots";

        // firebase
        //   .database()
        //   .ref("ShipsVoyage/" + this.ShipsVoyage.ShipID)
        //   .set();
        var arr = test;
        var sector = "";

        
            for ( var i = 0; i < arr.length; i++){
        if (arr[i].ports.length != 0){
          for( var j = 0; j<arr[i].ports.length; j++){
            console.log(this.ShipsVoyage.AvailabilitySector)
            if(this.ShipsVoyage.AvailabilitySector == arr[i].ports[j].title){
              sector = {
                Macro: arr[i].title,
                Micro: "none",
              }
              console.log(sector)
              console.log(this.ShipsVoyage.AvailabilitySector)
            }else{
              console.log(this.ShipsVoyage.AvailabilitySector + "Not Found")
            }
          
        }
          
        }
        if(arr[i].children.length != 0){
          for( j = 0; j < arr[i].children.length; j++){
            if(arr[i].children[j].ports.length != 0){
            for( var z = 0; z<arr[i].children[j].ports.length; z++){
            if(this.ShipsVoyage.AvailabilitySector == arr[i].children[j].ports[z].title){
              sector =  {
                Macro: arr[i].title,
                Micro: arr[i].children[j].ports[z].title
              }
              console.log(sector)
            }else{
              console.log(this.ShipsVoyage.AvailabilitySector + "Not found")
            }
          }

          }

          }
          
          

        }
         
      }



        if (this.ShipsVoyage.VoyageChartering) {
        db.collection("Ships").doc(this.ShipData.ShipID).set({
            ShipID: this.ShipData.ShipID,
            ShipName: this.ShipsVoyage.ShipName,
            Nationality: this.ShipsVoyage.Nationality,
            PortOfRegistry: this.ShipsVoyage.PortOfRegistry,
            TypeOfShip: this.ShipsVoyage.TypeOfShip,
            IMO: this.ShipsVoyage.IMO,
            LOA: this.ShipsVoyage.LOA,
            LBP: this.ShipsVoyage.LBP,
            Breadth: this.ShipsVoyage.Breadth,
            GRT: this.ShipsVoyage.GRT,
            NRT: this.ShipsVoyage.NRT,
            GrainCapacity: this.ShipsVoyage.GrainCapacity,
            BaleCapacity: this.ShipsVoyage.BaleCapacity,
            HoldVolumeCubicMeter: this.ShipsVoyage.HoldVolumeCubicMeter,
            HoldType: this.ShipsVoyage.HoldType,
            ReadyToCarryDangerousGoods: this.ShipsVoyage
              .ReadyToCarryDangerousGoods,
            SummerDraft: this.ShipsVoyage.SummerDraft,
            DeadWeight: this.ShipsVoyage.DeadWeight,
            AirDraft: this.ShipsVoyage.AirDraft,
            Owner: this.ShipsVoyage.Owner,
            OwnerAddress: this.ShipsVoyage.OwnerAddress,
            Operator: this.ShipsVoyage.Operator,
            OperatorAddress: this.ShipsVoyage.OperatorAddress,
            BuildYear: this.ShipsVoyage.BuildYear,
            Availability: this.ShipsVoyage.Availability,
            AvailabilitySector: this.ShipsVoyage.AvailabilitySector,
            ContactInfo: this.ShipsVoyage.ContactInfo,
            TimeCharterring: this.ShipsVoyage.TimeCharterring,
            VoyageChartering: this.ShipsVoyage.VoyageChartering,
            UserID: this.ShipsVoyage.UserID,
            Sector: sector,
          })
        } else {
        db.collection("Ships").doc(this.ShipData.ShipID).set({
            ShipID: this.ShipData.ShipID,
            ShipName: this.ShipsVoyage.ShipName,
            Nationality: this.ShipsVoyage.Nationality,
            PortOfRegistry: this.ShipsVoyage.PortOfRegistry,
            TypeOfShip: this.ShipsVoyage.TypeOfShip,
            IMO: this.ShipsVoyage.IMO,
            LOA: this.ShipsVoyage.LOA,
            LBP: this.ShipsVoyage.LBP,
            Breadth: this.ShipsVoyage.Breadth,
            GRT: this.ShipsVoyage.GRT,
            NRT: this.ShipsVoyage.NRT,
            GrainCapacity: this.ShipsVoyage.GrainCapacity,
            BaleCapacity: this.ShipsVoyage.BaleCapacity,
            HoldVolumeCubicMeter: this.ShipsVoyage.HoldVolumeCubicMeter,
            HoldType: this.ShipsVoyage.HoldType,
            ReadyToCarryDangerousGoods: this.ShipsVoyage
              .ReadyToCarryDangerousGoods,
            SummerDraft: this.ShipsVoyage.SummerDraft,
            DeadWeight: this.ShipsVoyage.DeadWeight,
            AirDraft: this.ShipsVoyage.AirDraft,
            Owner: this.ShipsVoyage.Owner,
            OwnerAddress: this.ShipsVoyage.OwnerAddress,
            Operator: this.ShipsVoyage.Operator,
            OperatorAddress: this.ShipsVoyage.OperatorAddress,
            BuildYear: this.ShipsVoyage.BuildYear,
            Availability: this.ShipsVoyage.Availability,
            AvailabilitySector: this.ShipsVoyage.AvailabilitySector,
            ContactInfo: this.ShipsVoyage.ContactInfo,
            TimeCharterring: this.ShipsVoyage.TimeCharterring,
            TimeCharterringData: {
              EconomySpeed: this.ShipsTime.EconomySpeed,
              EnginePower: this.ShipsTime.EnginePower,
              Class: this.ShipsTime.Class,
              SummerFreeBoard: this.ShipsTime.SummerFreeBoard,
              MouldeDepth: this.ShipsTime.MouldeDepth,
              MMSIno: this.ShipsTime.MMSIno,
              CallSign: this.ShipsTime.CallSign,
              OfficialNo: this.ShipsTime.OfficialNo,
            },
            VoyageChartering: this.ShipsVoyage.VoyageChartering,
            UserID: this.ShipsVoyage.UserID,
            Sector: sector
          })

        }
      }
    }
  },
  computed: {
    errShipNameMsg() {
      return this.errShipName ? ["Insert Valid Name"] : [];
    },
    errLOAMsg() {
      return this.errLOA ? ["Insert LOA (Numbers only) and select unit"] : [];
    },
    errBreadthMsg() {
      return this.errBreadthNo
        ? ["Insert Breadth (Numbers only) and select unit"]
        : [];
    },
    errNRTMsg() {
      return this.errNRT ? ["Insert NRT (Numbers only)"] : [];
    },
    errBaleCapacityMsg() {
      return this.errBaleCapacity
        ? ["Insert Bale Capacity (Numbers only)"]
        : [];
    },
    errSummerDraftNoMsg() {
      return this.errSummerDraftNo
        ? ["Insert Summer Draft (Numbers only) and select unit"]
        : [];
    },
    errAirDraftNoMsg() {
      return this.errAirDraftNo
        ? ["Insert Air Draft (Numbers only) and select unit"]
        : [];
    },
    errOwnerMsg() {
      return this.errOwner ? ["Insert Valid Owner Name"] : [];
    },
    errOperatorMsg() {
      return this.errOperator ? ["Insert Valid Operator Name"] : [];
    },
    // right data error messages
    errPortOfRegistryMsg() {
      return this.errPortOfRegistry ? ["Insert Valid Registry Port "] : [];
    },
    errIMOMsg() {
      return this.errIMO ? ["Insert IMO (only numbers)"] : [];
    },
    errLBPNoMsg() {
      return this.errLBPno ? ["Insert LBP (Numbers only) and select unit"] : [];
    },
    errGRTMsg() {
      return this.errGRT ? ["Insert GRT (Numbers only)"] : [];
    },
    errGrainCapacityMsg() {
      return this.errGrainCapacity
        ? ["Insert Grain Capacity (Numbers only)"]
        : [];
    },
    errHoldVolumeMsg() {
      return this.errHoldVolume ? ["Insert Hold Volume (Numbers only)"] : [];
    },
    errDeadWeightMsg() {
      return this.errDeadWeight ? ["Insert Dead Weight (Numbers only)"] : [];
    },
    errBuildYearMsg() {
      return this.errBuildYear ? ["*Required"] : [];
    },
    errFromDateMsg() {
      return this.errFromDate ? ["Required"] : [];
    },
    errToDateMsg() {
      return this.errToDate ? ["Required"] : [];
    },
    // Owner Address 4 inputs
    errOwnerAddressMsg() {
      return this.errOwnerAddress ? ["*Required"] : [];
    },

    errOwnerZipCodeMsg() {
      return this.errOwnerZipCode ? ["*Required"] : [];
    },
    errOwnerPhoneMsg() {
      return this.errOwnerPhone ? ["*Required (numbers only)"] : [];
    },
    // Operator Address 4 inputs
    OperatorAddressMsg() {
      return this.errOperatorAddress ? ["*Required"] : [];
    },

    OperatorZipCodeMsg() {
      return this.errOperatorZipCode ? ["*Required"] : [];
    },
    errOperatorPhoneMsg() {
      return this.errOperatorPhone ? ["*Required (numbers only)"] : [];
    },
    //for time ships
    errOfficialNoMsg() {
      return this.errOfficialNo ? ["Insert Official No. (6 Numbers)"] : [];
    },
    errCallSignMsg() {
      return this.errCallSign ? ["Insert Valid Call Sign"] : [];
    },
    errMMSIMsg() {
      return this.errMMSI ? ["Insert MMSI (Numbers only)"] : [];
    },
    errModDepthNoMsg() {
      return this.errModDepthNo
        ? ["Insert Moulded Depth (Numbers only) and select unit"]
        : [];
    },
    errSummerFreeNoMsg() {
      return this.errSummerFreeNo
        ? ["Insert Summer Freeboard (Numbers only) and select unit"]
        : [];
    },
    errClassMsg() {
      return this.errClass ? ["Insert Valid Class"] : [];
    },
    errEnginePowerMsg() {
      return this.errEnginePower ? ["Insert Engine Power (Numbers only)"] : [];
    },
    errEconomySpeedMsg() {
      return this.errEconomySpeed
        ? ["Insert Economy Speed (Numbers only)"]
        : [];
    }
  },
  mounted() {
    //for contactinfo
    for (var p = 0; p < this.ShipData.ContactInfo.length; p++) {
      this.ContactInfo[p] = this.ShipData.ContactInfo[p].number;
      this.ContactInfoCode[p] = this.ShipData.ContactInfo[p].code;
      console.log(this.ShipData.ContactInfo.length - 1);
    }
    for (var c = 0; c < this.ShipData.ContactInfo.length - 1; c++) {
      this.AddPhone();
    }
    // for owner address
    for (var a = 0; a < this.ShipData.OwnerAddress.length; a++) {
      if (this.ShipData.OwnerAddress[a] == "/") this.OwnerAddressIndex.push(a);
    }
    this.OwnerAddressLine = this.ShipData.OwnerAddress.substring(
      0,
      this.OwnerAddressIndex[0] - 1
    );
    this.OwnerAddressCountry = this.ShipData.OwnerAddress.substring(
      this.OwnerAddressIndex[0] + 2,
      this.OwnerAddressIndex[1] - 1
    );
    this.OwnerAddressZipCode = this.ShipData.OwnerAddress.substring(
      this.OwnerAddressIndex[1] + 2,
      this.OwnerAddressIndex[2] - 1
    );
    this.OwnerAddressPhone = this.ShipData.OwnerAddress.substring(
      this.OwnerAddressIndex[2] + 2,
      this.ShipData.OwnerAddress.length
    );
    // for operator address
    for (var o = 0; o < this.ShipData.OperatorAddress.length; o++) {
      if (this.ShipData.OperatorAddress[o] == "/")
        this.OperatorAddressIndex.push(o);
    }
    console.log(this.OperatorAddressIndex);
    this.OperatorAddressLine = this.ShipData.OperatorAddress.substring(
      0,
      this.OperatorAddressIndex[0] - 1
    );
    this.OperatorAddressCountry = this.ShipData.OperatorAddress.substring(
      this.OperatorAddressIndex[0] + 2,
      this.OperatorAddressIndex[1] - 1
    );
    this.OperatorAddressZipCode = this.ShipData.OperatorAddress.substring(
      this.OperatorAddressIndex[1] + 2,
      this.OperatorAddressIndex[2] - 1
    );
    this.OperatorAddressPhone = this.ShipData.OperatorAddress.substring(
      this.OperatorAddressIndex[2] + 2,
      this.ShipData.OperatorAddress.length
    );

    // for CharteringType
    if (
      this.ShipData.TimeCharterring == false &&
      this.ShipData.VoyageChartering
    ) {
      this.CharteringType = "Voyage";
    } else if (
      this.ShipData.TimeCharterring &&
      this.ShipData.VoyageChartering == false
    ) {
      this.CharteringType = "Time";
    } else {
      this.CharteringType = "Time & Voyage";
    }
    // for Countries
    for (var i = 0; i < this.country.length; i++) {
      this.Countries.push({
        text: this.country[i].name,
        value: this.country[i].code,
        code: this.country[i].code,
        dialCode: this.country[i].dial_code
      });
    }

    for (var t = 0; t < 23; t++) {
      if (this.test[t].ports.length == 0) {
        for (var j = 0; j < this.test[t].children.length; j++) {
          for (var x = 0; x < this.test[t].children[j].ports.length; x++) {
            this.shipPorts.push({
              text: this.test[t].children[j].ports[x].title,
              value: this.test[t].children[j].ports[x].title
            });
          }
        }
      } else {
        for (var y = 0; y < this.test[t].ports.length; y++) {
          this.shipPorts.push({
            text: this.test[t].ports[y].title,
            value: this.test[t].ports[y].title
          });
        }
      }
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
.headS {
  display: flex;
  margin-left: 22px;
  height: 6%;
}
.i-ship {
  width: 23px;
  margin-bottom: -1.5px;
}
.i-plus {
  width: 28px;
  display: inline-block;
  margin-bottom: 22px;
  margin-left: 9px;
  cursor: pointer;
}
.shipData {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-height: 93%;
  overflow: auto;
  margin-top: 10px;
}
.dataLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;
}
.dataRight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 62%;
  height: 100%;
}
.columnData {
  height: 12%;
  height: 93px;
}
.AddressData {
  width: 350px;
  margin-left: 45px;
}
.savebtn {
  margin: 12px;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  width: 70px;
  margin-top: 115%;
}
.btn {
  border: none;
  padding: 1.7px 80px;
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
