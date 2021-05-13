<template>
  <div>
      <Header class="mb-7 mt-3 ml-2" UserName= "My Cargo"/>
      <v-card
      class="d-flex flex-wrap ml-3"
      
      flat
      tile
    >
    <Add class="ma-10"/>
    <Card v-for="n in 20"
        :key="n" class="ma-10" />
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
import Card from "./Cargo/CargoCard"
import Add from "./Cargo/AddCargo"
export default {
    components:{
        Header,
        Card,
        Add
    }

}
</script>

<style>

</style>