<template>
   <v-card
    class="mx-auto"
    max-width="400"
    
  >
    <v-list rounded>
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in UserCridetCards"
          :key="i"
        >
          <v-list-item-icon>
            <img v-if="item.card.brand=='visa'" src="../assets/Icons/visa.svg" alt="visa">
            <img v-else-if="item.card.brand=='mastercard'" src="../assets/Icons/master.svg" alt="MasterCard">
            <img v-else-if="item.card.brand=='amex'" src="../assets/Icons/amex.svg" alt="amex">
            <h6 v-else>
                {{item.card.brand}}
            </h6>
            
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >**** **** **** {{item.card.last4}}</v-list-item-title>
            <v-list-item-subtitle>{{item.card.exp_month}}/{{item.card.exp_year}} </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action >
              <v-dialog
              v-model="dialog"
              width="350"
              >
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                    v-bind="attrs"
                    v-on="on"
                    >mdi-delete</v-icon>
       
                </template>

                <v-card>
                    <v-card-title class="headline">
                        Are you sure  you want <br> to delete this card ?
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn
                        color="primary"
                        text
                        
                        @click="mmd(i)"
                    >
                        Yes
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        No
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>

                
              </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-card-actions>
        <v-row
        class="mb-1"
          align="center"
          justify="center"
        >
      <v-btn
        @click="AddCridetCard"
        text
        
      >
        
        <v-icon>mdi-plus</v-icon>
        Add Card
      </v-btn>
      <v-btn v-if="ShowRefresh" flat icon color="black" @click="refreshCards">
            <v-icon>mdi-refresh</v-icon>
        </v-btn>
        </v-row>
        
    </v-card-actions>
    <!-- <v-btn color="success" @click="odrder">pay</v-btn>
    <v-btn color="success" @click="confermodrder">confirm</v-btn> -->
  </v-card>
</template>

<script>
import {mapGetters,mapActions}  from "vuex"
import firebase from "firebase"
export default {
     computed:{
        ...mapGetters(["UserCridetCards"]) ,

    },
    methods:{
        async odrder(){
            console.log("paymemt by :", this.UserCridetCards[this.selectedItem ].id)
           const pay = await firebase.functions().httpsCallable("payment-CreatePyment")
           const pymentinit =  await pay({CardId : this.UserCridetCards[this.selectedItem ].id , ItemId : "PkOaIr3IFEC92ni2fQLW", Itype: "cargo"})
           console.log(pymentinit)
            
        },
        async confermodrder(){
            
           const pay = await firebase.functions().httpsCallable("payment-Confirm_order")
           const pymentinit =  await pay({orderId : "kEtTaN5Igc1ZGkWuXrs8" })
           console.log(pymentinit)
            
        },
        ...mapActions(["GetUserCards","DeletUserCard"]),
        mmd(s){
            this.DeletUserCard(s)
            this.dialog = false
        },
        AddCridetCard(){
            window.open( "/AddCard");
            this.ShowRefresh = true ; 
        },
        refreshCards(){
            this.GetUserCards() ;
        }
    },
    async mounted(){
        
        await this.GetUserCards() ;
        console.log(this.UserCridetCards);
        

    },
    data(){
        return{
            items : [],
            selectedItem : 0,
            dialog :false,
            ShowRefresh:false
        }
    }

}
</script>

<style>

</style>