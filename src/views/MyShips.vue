<template>
  <div
    style="border-radius:15px;
    justify-content:center;
    align-self:center; width:97%;
    height:90%;  "
  >
    <component :is="ComponentName" :ShipData="ShipData" :ShipTime="ShipTime"></component>
    <!-- <p>{{ShipTime}}</p> -->
  </div>
</template>

<script>
import Shiplist from "../components/MyShipsComponents/Shiplist";
import EditShip from "../components/MyShipsComponents/EditShip";
import AddShip from "../components/MyShipsComponents/AddShip";
import { EventBus } from "../main";
export default {
  components: {
    Shiplist,
    EditShip,
    AddShip
  },
  data() {
    return {
      ComponentName: "Shiplist",
      edit: false,
      ShipData: {},
      ShipTime: {},
      I: "",
      AddShip: false
    };
  },
  //   editCargo(edit, Cargo, Index) {
  //     this.edit = edit;
  //     this.I = Index;
  //     this.CargoData = Cargo;
  //     if (this.edit) {
  //       this.ComponentName = "EditCargo";
  //     }
  //     // console.log(this.I, this.CargoData);
  //   },
  //   Switch() {}
  mounted() {
    EventBus.$on("editShip", (edit, Data, TimeData) => {
      this.edit = edit;
      this.ShipData = Data;
      this.ShipTime = TimeData;
      if (this.ShipData.TimeCharterring == false) {
        this.ShipTime = {
          ShipID: this.ShipData.ShipID,
          EconomySpeed: "",
          EnginePower: "",
          Class: "",
          SummerFreeBoard: "",
          MouldeDepth: "",
          MMSIno: "",
          CallSign: "",
          OfficialNo: ""
        };
        console.log(this.ShipTime);
      }
      if (this.edit) {
        this.ComponentName = "EditShip";
      }
    });
    EventBus.$on("addShip", AddShip => {
      this.AddShip = AddShip;
      if (this.AddShip) {
        this.ComponentName = "AddShip";
      }
    });
  }
};
</script>

<style scoped>
</style>
