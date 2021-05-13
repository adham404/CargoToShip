<template>
  <div>
      <v-card max-width="400" class="rounded-xl" elevation="2">
          <v-card-title>
              <v-icon v-if="data.type=='ship'" class="mr-2">mdi-ferry</v-icon> 
              <v-icon v-if="data.type=='cargo'" class="mr-2">mdi-package-variant-closed</v-icon> 
               {{data.Name}}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
              <!-- <h4 class="mb-5">Email : mm@fffff.com</h4> -->
              <h4 class="mb-5" v-for="i in data.ContactInfo" :key="i.number" >Phone :{{i.code}} {{i.number}}</h4>
          </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
    props:["data"]

}
</script>

<style>

</style>