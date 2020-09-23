<template lang="html">
  <v-btn
    fab
    dark
    color="#0E153A"
    @click = "emitMethod"
  >
    <v-icon>mdi-magnify</v-icon>
  </v-btn>

</template>

<script>
import {EventBus} from '@/main.js'
export default {
  methods:{
        emitMethod () {
       EventBus.$emit('SearchClicked');
    }
    }
}
</script>

<style lang="css" scoped>
</style>
