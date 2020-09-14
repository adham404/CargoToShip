<template>
  <div
    style="border-radius:15px;
    justify-content:center;
    align-self:center; width:100%;
    height:100%;  "
  >
    <component :is="ComponentName" :CargoData="CargoData" :CargoDangerous="CargoDangerous"></component>
    <!-- <p>{{CargoData}}</p> -->
  </div>
</template>

<script>
import CargoList from "@/components/MyCargoComponents/CargoList";
import EditCargo from "@/components/MyCargoComponents/EditCargo";
import AddCargo from "@/components/MyCargoComponents/AddCargo";
import { EventBus } from "@/main";
export default {
  components: {
    CargoList,
    EditCargo,
    AddCargo
  },
  data() {
    return {
      ComponentName: "CargoList",
      edit: false,
      AddCargo: false,
      CargoData: {},
      CargoDangerous: {},
      I: ""
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
    EventBus.$on("editCargo", (edit, Data, CargoDangerous) => {
      this.edit = edit;
      this.CargoData = Data;
      this.CargoDangerous = CargoDangerous;
      if (this.CargoData.DangerousGoods == false) {
        this.CargoDangerous = {
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
        };
      }
      if (this.edit) {
        this.ComponentName = "EditCargo";
      }
    });
    EventBus.$on("addCargo", AddCargo => {
      this.AddCargo = AddCargo;
      if (this.AddCargo) {
        this.ComponentName = "AddCargo";
      }
    });
  }
};
</script>

<style scoped>
</style>
