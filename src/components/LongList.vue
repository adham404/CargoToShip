<template>
    <v-card>
      <v-card-title>
        Long List
      </v-card-title>
      <v-card-text>
          <v-col>
          <v-row v-for="(data,x) in GetLongListObject" :key="x">
                <v-col>
                    <v-text>{{data.name}}</v-text>
                </v-col>
                <v-col>
                    <v-text>{{data.value}}</v-text>
                </v-col>
          </v-row>
          </v-col>
      </v-card-text>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters(["GetLongListObject"])
    },
}
</script>

<style>

</style>