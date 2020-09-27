<template>
  <v-app >

    <div class="app">
      <div class="nav">
          <NavBar @HomePageChanged = 'RemoveComponents'/>
      </div>
      <div class="Body">
        <Header id="foot"/>
        <keep-alive>
          <router-view id="head"></router-view>
          </keep-alive>

      </div>
    </div>
  </v-app >
</template>

<script>
import Header from '@/Skeleton/Header.vue'
import NavBar from '@/Skeleton/NavBar.vue'
// import FindCargoShip from '../src/views/FindCargoShip'
export default {
  name: 'App',
  data(){
    return{
      HomePageChanged: false
    }
  },
  components: {
    NavBar,
    Header,
    // HomePageNew
    // HomePage,
    // AddFab
    // LoginSignUp
    // AddFab
  },
 methods: {
   RemoveComponents(){
     this.HomePageChanged = true
   }
 }

};
</script>


<style media="screen" scoped>
  .nav{
    width: 3%;
  }
  .app{
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    height: 100%;
  }
  .body{
    width: 97%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #foot{
    position: absolute;
    /* z-index: 1; */
  }
  #head{
  position: absolute;
  margin-top: 5vw;
  z-index: 2;
  height: 90vh;
  width:100%;
  }
  .v-application {
  background-color: #C5D7D9
}
</style>
