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
      <v-row>
    <v-btn @click="Login">Login</v-btn>
      </v-row>
      </v-col>
  </v-form>
</v-container>
</template>

<script>
import firebase from "firebase"
export default {
data()
{
    return{
        Email:"",
        Password:""
    }
},
methods:{
    Login()
    {
        if(this.Email != "" && this.Password != "")
        {
            var auth = firebase.auth()
            auth.signInWithEmailAndPassword(this.Email,this.Password).then(() => {
                this.$router.push({ path: "/"})
            }).catch((err) => {
                alert(err.message);
            })

        }
        else
        {
            alert("Wrong Input");
        }
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