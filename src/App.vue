<template class="app">
  <v-app >
    <!-- <AddFab/> -->
    <!-- <HomePage/> -->
    <!-- <LoginSignUp/> -->
    <!-- <HomePageNew/> -->
    <div class="app">
      <div class="nav">
          <NavBar @HomePageChanged = 'RemoveComponents'/>
      </div>


      <div class="Body">
        <Header id="foot"/>
        <router-view id="head"></router-view>

      </div>

    </div>

  </v-app>
</template>

<script>
// import AddFab from '@/components/AddFab.vue'
import Header from '@/components/Header.vue'
// import LoginSignUp from '@/components/LoginSignUp.vue'
// import HomePageNew from '@/components/HomePageNew'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  data(){
    return{
      HomePageChanged: false
    }
  },
  components: {
    NavBar,
    Header
    // HomePageNew
    // HomePage,
    // AddFab
    // LoginSignUp
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
    width: 3vw;
  }
  .app{
    display: flex;
  }
  .body{
    width: 97vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  #foot{
    position: absolute;
    z-index: 1;
  }
  #head{
  position: absolute;
  margin-top: 5vw;
  z-index: 2;
  }

</style>
