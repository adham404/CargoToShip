<template>
  <v-app>
    <h1>hello</h1>
    <input type="text" name value v-model="input" />
    <input type="submit" value="Submit" @click="sendnow()" />
    <p>{{input}}</p>
    <div id="map"></div>
    <!-- <CargoPhone /> -->
    <!-- <AddShip /> -->
    <!-- <AddCargo /> -->

    <!-- <router-view></router-view> -->
    <!-- <MyCargo /> -->
    <Cargo />
    <!-- <EditCargo /> -->
    <!-- <MyShip /> -->
  </v-app>
</template>


<script>
import firebase from "firebase";

// import AddShip from "./components/AddShip";
// import CargoPhone from "./components/CargoPhone";
// import AddCargo from "./components/AddCargo";
// import EditCargo from "./components/EditCargo";
// import MyCargo from "./views/MyCargo";
import Cargo from "./components/Cargo";
// import MyShip from "./views/MyShip";
export default {
  components: {
    // CargoPhone
    // AddShip
    // AddCargo
    // EditCargo,
    // MyShip,
    // MyCargo
    Cargo
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    sendnow() {
      /*eslint-disable*/
      firebase
        .database()
        .ref("lists/" + this.input)
        .set({
          name: this.input
        });
      alert(this.input);
    }
  },
  mounted() {
    alert(simplemaps_worldmap.mapdata.main_settings.current_id);
  }
};
</script>



<style>
</style>
