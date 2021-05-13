<template>
  <div>
      <Header class="mb-7 mt-3 ml-2" UserName= "My Ships"/>
      <v-card
      class="d-flex flex-wrap ml-3"
      
      flat
      tile
    >
    <Add class="ma-10"/>
    <Card v-for="(doc,x) in MyShips.MyShips"
        :key="x" :card="doc.data()" class="ma-10" />
      <!-- <v-card
        v-for="n in 20"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card> -->
    </v-card>
  </div>
</template>

<script>
import Header from "./Header"
import Card from "./Ships/ShipCard"
import Add from "./Ships/AddShip"
import {mapState , mapActions} from "vuex"
import firebase from "firebase"
export default {
    components:{
        Header,
        Card,
        Add
    },
    async mounted(){
        await firebase.auth().onAuthStateChanged(async(user)=>{
            if(user){
                await this.GetMyShips()
                console.log(this.MyShips)
            }
        })

    },
    computed:{
        ...mapState(["MyShips"]),
    },
    methods:{
        ...mapActions(["GetMyShips"])
    }

}
</script>

<style>

</style>