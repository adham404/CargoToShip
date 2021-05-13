<template>
  <v-container>
      
      <v-row justify="start" align="center">
          <v-col cols="1">
              <h3 >Email</h3>
          </v-col>
          <v-col cols="4">
              <h3  class="pl-5 font-weight-light" >{{data.Email}}</h3>
              <!-- <v-text-field v-if="Edit_email" solo dense v-model="email" :rules="emailRules" label="New E-mail" required ></v-text-field> -->
          </v-col>
        </v-row>




      <v-row justify="start" align="center">
          <v-col cols="1">
              <h3 >Phone</h3>
          </v-col>
          <v-col cols="4">
              <h3  class="pl-5 font-weight-light" >{{data.PhoneNumber ? data.PhoneNumber : "Null"  }}</h3>
              <!-- <v-text-field v-if="Edit_email" solo dense v-model="email" :rules="emailRules" label="New E-mail" required ></v-text-field> -->
          </v-col>
          
          
      </v-row>

      <v-row justify="start" align="center">
          <v-col cols="5">
              <Edit :data="data"  />
          </v-col>
          
          
          
      </v-row>
  </v-container>
</template>

<script>
import Edit from "./editUser"
export default {
    props:["data"],
    components:{
        Edit
    },
    data(){
        return{
            Edit_email : false
        }
    },
    mounted(){
        console.log(this.data.Email)
    }

}
</script>

<style>

</style>