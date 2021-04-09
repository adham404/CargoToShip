<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import {mapActions} from "vuex"
import firebase from "firebase"
export default {
  name: "App",

  components: {
    // HelloWorld
    
  },
  methods:{
    ...mapActions(["CheckAuth","FetchCurrentUserData"])
  },
  computed:{
    // ...mapGetters(["GetAuthState"])
  },
  async mounted()
  {
    var auth = firebase.auth()
    await auth.onAuthStateChanged(async (user) =>{
      if(user)
      {
        await this.CheckAuth()
        //Fetch User Data
        await this.FetchCurrentUserData()
        //Route To Homepage
        this.$router.push({path: "/"})

      }
      else{
        //Route To SignUp/Login
        this.$router.push({path: "/Login2"})
      }
    })
    //Check Auth
    //Is User Logged in or not
    // var flag = await this.GetAuthState 
    // alert("Hey: "+ flag);
    // if(flag)
    // {
    // }
    // else {

    // }

  },
  data: () => ({
    //
  })
};
</script>
