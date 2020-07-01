<template>
  <div id="app">
    <!-- <h1>hello</h1>
    <input type="text" name="" value="" v-model = "input">
    <input type="text" name="" value="" v-model = "input">
    <input type="submit" value="Submit" @click="sendnow()" />
    <button  @click = "receive()">batee5</button>
    <p>{{input}}</p> -->
    <!-- <div id="map">

    </div> -->
    <!-- <HomePage/> -->
    <Trial/>

  </div>
</template>


<script>
// import HomePage from '@/components/HomePage.vue'
import Trial from '@/components/Trial.vue'
import firebase from 'firebase';
export default {
  components: {
    // HomePage,
    Trial
  },
data() {
  return {
    input: "",
  };
},
methods: {
  sendnow() {
    /*eslint-disable*/
    firebase.database().ref('lists/' + this.input ).set({
      name: this.input,
      maree5: this.input + "talat"
    });
    alert(this.input)
},
receive(){
  firebase.database().ref('lists/' + 'shemy3').once('value').then(function(snapshot){
    var name = snapshot.val()
    console.log(name)
  })

}
},

mounted(){
  alert(simplemaps_worldmap.mapdata.main_settings.current_id)
}
};

</script>



<style>
html{
  background-color: #1A3365;
  overflow-x: hidden;
}
</style>
