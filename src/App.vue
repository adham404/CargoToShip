<template>
  <div id="app" class="hh">
<!--    <h1>hello</h1>-->
<!--    <input type="text" name="" value="" v-model = "input">-->
<!--    <input type="submit" value="Submit" @click="sendnow()" />-->
<!--    <p>{{input}}</p>-->
<!--    <div id="map">-->
<!--    </div>-->
      <div id="links" >
          <div class="link" ><router-link :to="{name :'orderpayment'}" >order</router-link></div>
          <div class="link" > <router-link to="/profile" >profile</router-link></div>
          <div class="link" ><router-link :to="{name :'orderinfo'}" >order data</router-link></div>
      </div>




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



<style  >
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   body{
       background-color: #039be5;
       font-family: Roboto sans-serif;
   }
    #links{
        display: flex;
        justify-content: space-around;

    }
    .link{
        color: black;
        font-family: Roboto sans-serif;
        font-size: 1.4vw;
        padding: 1vw;

    }
   .link a{
       color: black;
       text-decoration: none;
   }

</style>
