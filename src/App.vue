<template>
  <div id="app">
    <h1>hello</h1>
    <input type="text" name="" value="" v-model = "input">
    <input type="submit" value="Submit" @click="sendnow()" />
    <p>{{input}}</p>
    <div id="map">

    </div>
  </div>

</template>


<script>
export default {
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
    });
    alert(this.input)
}
},
mounted(){
  alert(simplemaps_worldmap.mapdata.main_settings.current_id)
}
};
</script>



<style>

</style>
