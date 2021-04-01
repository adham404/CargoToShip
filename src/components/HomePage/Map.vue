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
import {mapMutations,mapGetters} from "vuex";
import firebase from "firebase";


    export default {
        data(){
            return{
                hidden: false,
            }
        },
        mounted(){
            let self = this;
            simplemaps_worldmap.load();
            simplemaps_worldmap.hooks.click_location = function(id){
                self.ChangeSector({name: simplemaps_worldmap_mapdata.locations[id].name, Macro: true});
                const db = firebase.firestore();
                db.collection("Cargo").add({hello: "hello"})
                // alert(self.Sector.name)  
            };
            alert(this.GetSector);
            
            
        },
        computed: {
            simplemaps_worldmap: function () {return window.simplemaps_worldmap;},
            ...mapGetters(["GetSector"])
            
        },
        methods: {
            ...mapMutations(["ChangeSector"]),


        }

    }
</script>

<style scoped>
#map{
    width: 100%;
    height: 100%;
}

</style>