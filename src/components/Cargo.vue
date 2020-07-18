<template>
  <div
    style="border-radius:15px; 
    justify-content:center;
    align-self:center; width:65vw;
    height:35vw;  "
  >
    <component :is="ComponentName" :CargoData="CargoData"></component>
    <p>{{CargoData}}</p>
  </div>
</template>

<script>
import MyCargo from "../views/MyCargo";
import EditCargo from "./EditCargo";
import { EventBus } from "../main";
export default {
  components: {
    MyCargo,
    EditCargo
  },
  data() {
    return {
      ComponentName: "MyCargo",
      edit: false,
      CargoData: {},
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
    EventBus.$on("editCargo", (edit, Data) => {
      this.edit = edit;
      this.CargoData = Data;
      if (this.edit) {
        this.ComponentName = "EditCargo";
      }
    });
  }
};
</script>

<style scoped>
</style>