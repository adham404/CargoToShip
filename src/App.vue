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
        <v-icon class="ml-3" large>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-navigation-drawer color="#0E153A" width="50" app>
      <v-tooltip  right>
      <template  v-slot:activator="{ on, attrs }">
        <v-btn
        class="mb-6 mt-4"
          color="white"
          icon
          v-bind="attrs"
          v-on="on"
          @click="$router.push('/Profile')"
        >
          <v-icon class="ml-3" large>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <span>Profile</span>
    </v-tooltip>


      <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mb-6"
          color="white"
          icon
          v-bind="attrs"
          v-on="on"
           @click="$router.push('/MyShips')"
        >
          <v-icon class="ml-3" large>mdi-ferry</v-icon>
        </v-btn>
      </template>
      <span>My Ships</span>
    </v-tooltip>


      <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mb-6"
          color="white"
          icon
          v-bind="attrs"
          v-on="on"
           @click="$router.push('/MyCargo')"
        >
          <v-icon class="ml-3" large>mdi-package-variant-closed</v-icon>
        </v-btn>
      </template>
      <span>My Cargo</span>
    </v-tooltip>


      <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mb-6"
          color="white"
          icon
          v-bind="attrs"
          v-on="on"
           @click="$router.push('/Orders')"
        >
          <v-icon class="ml-3" large>mdi-card-account-phone</v-icon>
        </v-btn>
      </template>
      <span>My Orders</span>
    </v-tooltip>


      <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mb-6"
          color="white"
          icon
          v-bind="attrs"
          v-on="on"
           @click="$router.push('/')"
        >
          <v-icon class="ml-3" large>mdi-home</v-icon>
        </v-btn>1
      </template>
      <span>Home</span>
    </v-tooltip>

      
      
      
      
      
    
  </v-navigation-drawer>

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
        //this.$router.push({path: "/"})

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
