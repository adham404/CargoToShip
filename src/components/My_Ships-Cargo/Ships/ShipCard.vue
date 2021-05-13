<template>
  <v-card width="500"  >
                      <v-row align="center">
                        <v-icon class="pl-3 mt-3" x-large right>
                            mdi-ferry
                        </v-icon>
                        <v-card-title class="pt-6">Ship</v-card-title>
                        <!-- <v-col class="col-6">
                        </v-col>
                        <v-col class="col-6">
                        </v-col> -->
                      </v-row>
                      <v-card-subtitle>
                          <div class="display-1">{{card.Id}}</div>
                       </v-card-subtitle>
                    <v-card-text>
                    <v-row class="ml-2 mb-4">
                        <v-col>
                            <v-row>Ready to carry Dangerous Goods {{card.DangerousGoods}}</v-row>
                            <v-row>Dead weight {{card.DeadWeight}}</v-row>
                            <v-row>Available Sector {{card.AvailabilitySector}}</v-row>
                        </v-col>
                        <v-col>
                            <v-row>From Date {{card.Availability.split(" ")[0]}}</v-row>
                            <v-row>To Date {{card.Availability.split(" ")[2]}}</v-row>
                            <v-row>Charterting Type {{card.TypeOfShip}}</v-row>
                        </v-col>
                    </v-row>
                    </v-card-text>
                  </v-card>
</template>

<script>
export default {
    props:["card"],
    data(){
        return{
            // card : {
            //     // Id:"dfffdggefgfgf"
            // }
        }
    },
    mounted(){
        console.log(this.card)
    }

}
</script>

<style>

</style>