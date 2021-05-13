<template>
  <v-card @click="LongList"   width="500" >
                      <v-row align="center" >
                        <v-icon class="pl-3 mt-3" x-large right>
                            mdi-package-variant-closed
                        </v-icon>
                        <v-card-title class="pt-6">Cargo</v-card-title>
                        <!-- <v-col class="col-6">
                        </v-col>
                        <v-col class="col-6">
                        </v-col> -->
                      </v-row>
                      <v-card-subtitle>
                          <div class="display-1">{{card.Id}}</div>
                       </v-card-subtitle>
                    <v-card-text>
                    <v-row class="ml-2 mb-2">
                        <v-col>
                            <v-row>Cargo Type {{card.CargoType}}</v-row>
                            <!-- <v-row>Cargo Description <span style="font-weight:bold">Test</span></v-row> -->
                            <v-row>Dangerous Goods {{card.DangerousGoods}}</v-row>
                            <v-row>Cargo Quantity {{card.CargoQuantity}}</v-row>
                            <v-row>Cargo Description: {{card.CargoDescription}}</v-row>
                        </v-col>
                        <v-col>
                            <v-row>Loading Port {{card.LoadingPort}}</v-row>
                            <v-row>Discharging Port {{card.DischargingPort}}</v-row>
                            <v-row>From Date {{card.FromDate}}</v-row>
                            <v-row>To Date {{card.ToDate}}</v-row>
                        </v-col>
                    </v-row>
                    </v-card-text>
                  </v-card>
</template>

<script>
export default {
    data(){
        return{
            card : {}
        }
    }

}
</script>

<style>

</style>