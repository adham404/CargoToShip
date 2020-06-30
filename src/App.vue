<template>
  <div id="app" class="hh">
<!--    <h1>hello</h1>-->
<!--    <input type="text" name="" value="" v-model = "input">-->
<!--    <input type="submit" value="Submit" @click="sendnow()" />-->
<!--    <p>{{input}}</p>-->
<!--    <div id="map">-->
<!--    </div>-->

      <router-link to="/orderpayment" >order         </router-link>
      <router-link to="/profile" >profile</router-link>
      <router-view></router-view>

  </div>

</template>


<script>
  // import firebase from 'firebase' ;
  // import confirmorder from "./components/confirmorder";
export default {
  components :{
    // confirmorder,
  },
data() {
  return {
    // input: "",
  };
},
methods: {
  // sendnow() {
  //   /*eslint-disable*/
  //   firebase.database().ref('lists/' + this.input ).set({
  //     name: this.input,
  //   });
  //   alert(this.input)
//}
},
// mounted(){
//   // alert(simplemaps_worldmap.mapdata.main_settings.current_id)
// }
};
</script>



<style >
   body{
       background-color: #039be5;
   }

</style>
