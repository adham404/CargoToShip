<template>
<div >
  <Header class="mb-7 mt-3 ml-2" :UserName= "GetUserData.Name"/>
  <v-sheet
  color="white"
  height="6vh"
  width="100" ></v-sheet>
  <Edit :data="GetUserData" />
  <v-sheet
  color="white"
  height="20vh"
  width="100" ></v-sheet>
  <Orders />
</div> 
</template>

<script>
import Header from "./Header"
import Edit from "./EditData/EditData"
import Orders from "./RecentOrders/Rececnt"
import { mapGetters } from 'vuex'
export default {
  computed:{
        ...mapGetters(["GetUserData"])
    },
    components:{
        Header,
        Edit,
        Orders
    },
    mounted(){
        console.log(this.GetUserData)
    }

}
</script>

<style>

</style>