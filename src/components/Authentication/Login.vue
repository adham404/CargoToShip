<template>
<v-container>
  <v-form class="mt-10">
      <v-col>
      <v-row>
      <v-text>Don't Have an account <a @click="GoToSignUp">Sign Up</a></v-text>
      </v-row>
      <v-row>
      <v-text-field
      v-model="Email"
      type="email"
      label="Email"
      ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
      v-model="Password"
      type="password"
      label="Password"
      ></v-text-field>
      </v-row>
      <v-row class="mb-2">
          <div><a @click="Forgot">Forgot your password</a></div>
      </v-row>
      <v-row>
         <v-btn @click="Login">Login</v-btn>
      </v-row>
      </v-col>
  </v-form>
</v-container>
</template>

<script>
import firebase from "firebase"
import {mapActions} from "vuex"

export default {
data()
{
    return{
        Email:"",
        Password:"",
        LoginSuccess:true
    }
},
methods:{
    ...mapActions(["CheckAuth","FetchCurrentUserData"]),
    async Login()
    {
        if(this.Email != "" && this.Password != "") //Quick Validation
        {
            var auth = firebase.auth()
            await auth.signInWithEmailAndPassword(this.Email,this.Password).then(() => {
                this.$router.push({ path: "/"})
            }).catch((err) => {
                this.LoginSuccess = false;
                alert(err.message);
            })
            if(this.LoginSuccess)
            {
                //Check Auth
                await this.CheckAuth()            
                //Fetch User Current Data
                await this.FetchCurrentUserData()
                //Route to HomePage
                this.$router.push({ path: "/"})
            }

        }
        else
        {
            alert("Please Fill in the Missing Details");
        }
    },
    Forgot()
    {

    },
    GoToSignUp()
    {
        this.$router.push({ path: "/SignUp2"})
    }
}
}
</script>

<style>

</style>