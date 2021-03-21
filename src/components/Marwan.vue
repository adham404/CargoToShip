<template>
  <div>
      <h2>HIIIIIII</h2>
  </div>
</template>

<script>
import {mapGetters,mapActions}  from "vuex"
export default {
    computed:{
        ...mapGetters(["UserData"]) , 
    },
    async mounted(){
        await this.GETUserData() ;
        console.log(this.UserData)

    },
    methods:{
        ...mapActions(["GETUserData"]),
    }

}
</script>

<style>

</style>