<template>
<v-container>
    <div class="display-4">Profile Details</div>
    <!-- <v-input
    ></v-input> -->    
  <v-form>
    <v-text-field
    :disabled="tD"
    label="First Name"
    v-model="Fn"    
    >
    </v-text-field>
    <v-text-field
    :disabled="tD"
    label="Last Name"
    v-model="Ln"    
    >
    </v-text-field>
    <v-text-field
    :disabled="tD"
    label="Phone"
    v-model="Ph"    
    >
    </v-text-field>
    <v-text-field
    :disabled="tD"
    label="Country"
    v-model="Country"    
    >
    </v-text-field>
    <v-text-field
    :disabled="tD"
    label="Company website(optional)"
    v-model="Cwebsite"    
    >
    </v-text-field>    
  </v-form>
  <v-btn v-if="tD" @click="()=>{tD=!tD}">Edit your details</v-btn>
  <v-btn v-if="!tD" @click="Done">Done</v-btn>

  <v-form>
      
  </v-form>
</v-container>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
    data()
    {
        return{
            random:"Hey",
            tD:true,
            Fn:"",
            Ln:"",
            Ph:"",
            Country:"",
            Cwebsite:""
        }
    },
    computed:{
      ...mapGetters(["GetUserData"])
    },
    methods:{
      ...mapActions(["UpdateUserData"]),
      Done()
      {
        //Validate Data
        //All data are essential except for the website data
        if(this.Fn != "" && this.Ln != "" && this.Ph != "" && this.Country != "")
        {
          //All Good to Go
          //TODO Check for phone number validity
          //TODO Check for Country validaty
          var ObjSend = {
            Fn: this.Fn,
            Ln: this.Ln,
            Ph: this.Ph,
            Country: this.Country,
            CWebsite: this.Cwebsite
          }
          this.UpdateUserData(ObjSend);
          this.tD=!this.tD
        }
        else 
        {
          //Wrong Data
          alert("Missing fields")
        }
      }
    },
    mounted()
    {
      //Fetch User Data
      this.Fn = this.GetUserData.Name.substr(0,this.GetUserData.Name.indexOf(' '));
      this.Ln = this.GetUserData.Name.substr(this.GetUserData.Name.indexOf(' ')+1,this.GetUserData.Name.length);
      this.Ph = this.GetUserData.PhoneNumber
      this.Country = this.GetUserData.Country
      this.Cwebsite = this.GetUserData.CompanyWebsite
    }

}
</script>

<style>

</style>