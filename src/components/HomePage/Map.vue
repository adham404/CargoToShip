<template>
    <div>
        <h1>hello</h1>
        <div id="map"></div>
        <v-btn
            v-show="!hidden"
            color="pink"
            fab
            dark
            absolute
            top
            right
            class="mt-16"
        >
                  <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn
            v-show="!hidden"
            color="pink"
            fab
            dark
            absolute
            bottom
            right
            class="mb-16 mr-8"
        >
                  <v-icon>mdi-account-circle</v-icon>
        </v-btn>
    </div>
</template>

<script>
/*eslint-disable*/

    export default {
        mounted(){
            simplemaps_worldmap.load();
        },
        computed: {
            simplemaps_worldmap: function () {return window.simplemaps_worldmap;}
        }

    }
</script>

<style scoped>
#map{
    width: 100%;
    height: 100%;
}

</style>