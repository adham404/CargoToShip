<template>
  <v-container>
  <v-form class="mt-10">
      <v-col>
      <v-row>
      <v-text>Already Have an account <a @click="GoToLogIn">Log in</a></v-text>
      </v-row>
      <v-row>
      <v-text-field
      v-model="FirstName"
      type="name"
      label="First Name"
      ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
      v-model="LastName"
      type="name"
      label="Last Name"
      ></v-text-field>
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
      <v-text-field
      v-model="ConfirmPassword"
      type="password"
      label="Confirm Password"
      ></v-text-field>
      </v-row>
      <v-row>
    <v-btn @click="SignUp">Sign Up</v-btn>
      </v-row>
      </v-col>  
  </v-form>
</v-container>

</template>

<script>
import firebase from "firebase"
import {mapActions,mapMutations} from "vuex"

export default {
  data()
  {
    return {
      FirstName:"",
      LastName:"",
      Email:"",
      Password:"",
      ConfirmPassword:"",
      SignUpSuccess:true
    }
  },
  // computed:{
  //   },
  methods:{
    ...mapActions(["CreateUserDoc","CheckAuth","FetchCurrentUserData"]),
    ...mapMutations(["SetUserDataToSignUp"]),
Validate()
  {
    //Validate that all Data are not empty
    if(this.FirstName != "" && this.LastName != "" && this.Email != "" && this.Password != "" && this.ConfirmPassword != "")
    {
      
      // return false
      if(this.Password != this.ConfirmPassword)
      {
        alert("Password doesn't match with confirm password");
        return false
      }
      else {
        return true
      }
    }
    //Validate that Password matches with the confirmed password
    else {
      alert("Please fill in the missing content")
      return false
    }
  },
  async SignUp()
  {
    //First Validate
    if(this.Validate())
    {
      var auth = firebase.auth()
      await auth.createUserWithEmailAndPassword(this.Email,this.Password).then(async (user) => {
        console.log(user);
        }).catch((error) => {
        this.SignUpSuccess = false;
        alert("This is error: "+error.message);
      })
        if(this.SignUpSuccess)
        {
          //Create User Doc in Firestore
          var UserObj = {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
          }
          await this.SetUserDataToSignUp(UserObj);
          await this.CreateUserDoc();
          //Initialize the User State with the User Credentials (UserData & IsUserIN)
           await this.CheckAuth()            
           await this.FetchCurrentUserData()
          //Route To The Home Page
          this.$router.push({ path: "/"})
        }

    }
  },
  GoToLogIn()
  {
    this.$router.push({ path: "/Login2"})    
  }
}
}
</script>

<style>

</style>