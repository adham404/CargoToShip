<template lang="html">
  <v-speed-dial
  v-model="fab"
  :top="top"
  :bottom="bottom"
  
  :left="left"
  :direction= "direction"
  :open-on-hover="hover"
  :transition="transition"
>
  <template v-slot:activator>
    <v-btn
      v-model="fab"
      color="blue darken-2"
      dark
      fab
    >
      <v-icon v-if="fab">mdi-close</v-icon>
      <v-icon v-else>mdi-account-circle</v-icon>
    </v-btn>
  </template>
  <v-btn
    fab
    dark
    small
    color="green"
  >
    <v-icon>mdi-pencil</v-icon>
  </v-btn>
  <v-btn
    fab
    dark
    small
    color="indigo"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
  <v-btn
    fab
    dark
    small
    color="red"
  >
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</v-speed-dial>
</template>

<script>
export default {
  data(){
    return {
    direction: 'left',
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'slide-x-reverse-transition',
    }
  },
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { class: 'purple', icon: 'account_circle' }
        case 'two': return { class: 'red', icon: 'edit' }
        case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    },
  },

  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    },
  },
}
</script>

<style lang="css" scoped>

</style>
