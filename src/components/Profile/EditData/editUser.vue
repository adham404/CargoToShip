<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mt-4 white--text"
           
          color="purple darken-4"
          @click="Doc= Object.assign({}, data) "
          v-bind="attrs"
          v-on="on"
        >
          Edit Profile
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                
              >
                <v-text-field
                v-model="Doc.Name"
                  label="Name*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
               
              >
                <v-text-field
                v-model="Doc.PhoneNumber"
                  label="Phone Number"
                  required
                ></v-text-field>
              </v-col>
              
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="Doc.Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model="Doc.pass"
                  label="New Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="Click"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-alert dismissible class="mt-2" v-model="showAlert" type="error">
      {{AlertMassage}}
    </v-alert>
    </v-dialog>
  </v-row>
</template>



<script>
import firebase from "firebase"
export default {
    props:["data"],
    data(){
        return{
           Doc : {},
            dialog : false,
            showAlert : false,
            AlertMassage : "",
            Good : true
        }
    },
   
    methods:{
        Click(){
            //this.dialog = false 
            console.log(this.data)
            this.Check()
        },
        async Check(){
            let updatedData = {}
            const checklist = ["Name","PhoneNumber","Email"]
            await checklist.forEach(async(i)=>{
                //console.log(i)
                if (this.Doc[i] != this.data[i]){
                    if(i == "Name"){
                       await this.UpdateName()
                    }else if(i == "PhoneNumber"){
                       await this.UpdatePhone()
                    }else if (i == "Email"){
                        await this.UpdateEmail()
                        updatedData["email"] = this.Doc[i]
                       console.log(updatedData)
                    }
                }
            })



            if (this.Doc.pass != null  ){
                 updatedData["password"] = this.Doc.pass
            }

            if (updatedData != {}){
               await this.SendUpdate(updatedData)
            }
            if (this.Good){

                this.dialog = false 
            }
        },
        async UpdateName(){
            try{
                await firebase.firestore().collection("Users").doc(this.data.UserID).update({Name : this.Doc.Name })
            }catch(e){
                this.SendAlert(e.massage)
                this.Good = false
            }
        },
        async UpdateEmail(){
            try{
                await firebase.firestore().collection("Users").doc(this.data.UserID).update({Email : this.Doc.Email })
            }catch(e){
                this.SendAlert(e.massage)
                this.Good = false
            }
        },
        async UpdatePhone(){
            try{
            firebase.firestore().collection("Users").doc(this.data.UserID).update({PhoneNumber : this.Doc.PhoneNumber })
            }catch(e){
                this.SendAlert(e.massage)
                this.Good = false
            }

        },
        async SendUpdate(updatedData){
            const Update = await firebase
        .functions()
        .httpsCallable("update-UpdateUserData");
        console.log(updatedData)
        try{
            const res =  await Update({NewDate : updatedData})
            console.log(res)
        }catch(e){
            console.log(e)
            this.SendAlert(e)
            this.Good = false
        }


        },
        SendAlert(massage){
            console.error(massage)
            this.showAlert = true
            this.AlertMassage = massage
        }

    }

}
</script>

<style>

</style>