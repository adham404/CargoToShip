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
        ...mapGetters(["UserData","UserCridetCards","GetUserData"]) , 
    },
    async mounted(){
        await this.CheckAuth() ;
        
        await this.GetUserCards() ;
        await this.FetchCurrentUserData() ;
        //console.log(this.UserData)
        console.log(this.UserCridetCards)
        console.log(this.GetUserData)

    },
    methods:{
        ...mapActions(["GetUserCards","CheckAuth","FetchCurrentUserData"]),
    }

}
</script>

<style>

</style>