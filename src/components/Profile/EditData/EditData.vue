<template>
  <v-container>
      <v-row>
          <v-col cols="4">
              <User :data="data"/>
          </v-col>
          <v-col cols="4">
              <CardsList/>
          </v-col >
      </v-row>
  </v-container>
</template>

<script>
import User from "./UserData"
import CardsList from "../../ListCards"

export default {
    props:["data"]
    ,
    components:{
        User,
        CardsList
    },
    
}
</script>

<style>

</style>