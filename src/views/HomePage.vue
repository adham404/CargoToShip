<template>
    <div class="d-flex flex-column hello">
        <Header/>
        <Map/>              
    </div>
</template>

<script>
import Header from "@/components/HomePage/Header.vue"
import Map from "@/components/HomePage/Map.vue"
    export default {
        data () {
      return {
      }
    },
    components: {
      Header,
      Map
    },
    mounted(){
      
    }
    }
</script>

<style scoped>
.hello{
  background-color: #C5D7D9;
  height: 100%;
}

</style>