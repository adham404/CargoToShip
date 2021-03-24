<template>
  <div>
      <h2>HIIIIIII</h2>
      <AddCridet/>
      <ListCards/>
  </div>
</template>

<script>
import {mapGetters,mapActions}  from "vuex"
 import AddCridet from "./AddCridetCard"
 import ListCards from "./ListCards"
export default {
    components:{
       AddCridet,
       ListCards 
    },
    computed:{
        ...mapGetters(["UserData","UserCridetCards"]) , 
    },
    async mounted(){
        await this.GETUserData() ;
        await this.GetUserCards() ;
        console.log(this.UserData)
        console.log(this.UserCridetCards)

    },
    methods:{
        ...mapActions(["GETUserData","GetUserCards"]),
    }

}
</script>

<style>

</style>