<template>
  <v-card width="500" height="180"  >
                      <v-row   align="center" justify="center">
                        <v-col  cols="4">
                            <v-sheet class="pl-10"  width="180" height="180" >
                            <v-btn @click="$router.push('/ShipForm')" 
                            class="mt-14 ml-2"  fab icon>
                            <v-icon  color="black" x-large >
                                mdi-plus
                            </v-icon>
                            </v-btn>
                            <h3>Add Ship</h3>
                            </v-sheet>
                        </v-col>
                    </v-row>
                    
                  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>