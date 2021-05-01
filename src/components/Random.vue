<template>
<div>
  <div>Random Factory</div>
    <v-btn @click="CargoRandom">CargoRandom</v-btn>
    <v-btn @click="ShipRandom">ShipRandom</v-btn>
    <v-btn @click="RemoveCargo">Remove Cargo Data collection</v-btn>
    <v-btn @click="RemoveShip">Remove Ship Data collection</v-btn>
    <div>{{GetCargoList}}</div>
</div>
</template>

<script>
import firebase from "firebase"
import {mapGetters} from "vuex"

export default {
    data()
    {
        return{
            Sectors:[] 
        }
    },
    computed:{
        ...mapGetters(["GetCargoList"])
    },
    mounted()
    {
        this.Sectors = require("../sectors.json")
    },
    methods:{
    CargoRandom()
    {
        var db = firebase.firestore()
        //Random Cargo Doc template
        var CargoData = {
            Macro:"",
            CargoType:""
        }
        //Random Numbers generator
        var num = Math.floor(Math.random() * 24);
        var num2 = Math.floor(Math.random() * 500);
        //Assign Random Cargo Doc
        CargoData.Macro = this.Sectors[num].title
        CargoData.CargoType = "Cargo" + num2;
        //Write the Randomly generated Cargo Doc
        db.collection("Cargo").add(CargoData);
    },
    RemoveCargo()
    {

    },
    RemoveShip()
    {

    },

    ShipRandom()
    {

    },

}
}
</script>

<style>

</style>