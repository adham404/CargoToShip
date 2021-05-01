<template>
    <div >
        <div id="map" class="mt-5"></div>
        <v-dialog

      v-model="dialog"
      max-width="1200"
    >
        <v-card>
            <ShortListing class="absolute" v-if="dialog" />
        </v-card>
    </v-dialog>
        
        <v-btn
            v-show="!hidden"
            color="blue"
            fab
            dark
            absolute
            middle
            right
            class="mb-16 mr-8"
            @click=" dialog=!dialog"
        >
                  <v-icon>mdi-card-search</v-icon>
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
import {mapMutations,mapGetters, mapActions} from "vuex";
// import firebase from "firebase";

import ShortListing from '../ShortListing.vue';


    export default {
        data(){
            return{
                hidden: false,
                List: true,
                dialog: false,
            }
        },
        mounted(){
            //Fetch Cargo and Ship Cards
            this.FetchCargoAndShipCards();
            let self = this;
            simplemaps_worldmap.load();
            simplemaps_worldmap.hooks.click_location = function(id){
                //Filter the Map Cargo and Ship Array
                var SectorName = simplemaps_worldmap_mapdata.locations[id].name
                self.MapRegionSelect(SectorName);
                self.ChangeSector({name: simplemaps_worldmap_mapdata.locations[id].name, Macro: true});
                // const db = firebase.firestore();
                // db.collection("Cargo").add({hello: "hello"})
                simplemaps_worldmap.location_zoom(id, '4');
                // alert(self.Sector.name)  
            };
            // alert(this.GetSector);
            simplemaps_worldmap.hooks.back = function(){
                //Set Map Cargo and Ship to initial Cards Values
                self.InitializeCargoAndShips();
            };
            simplemaps_worldmap.location_zoom('0', '4');

            
            
        },
        computed: {
            simplemaps_worldmap: function () {return window.simplemaps_worldmap;},
            ...mapGetters(["GetSector"])
            
        },
        components:{
            ShortListing
        },
        methods: {
            ...mapMutations(["ChangeSector","MapRegionSelect","InitializeCargoAndShips"]),
            ...mapActions(["FetchCargoAndShipCards"])


        }

    }
</script>

<style scoped>
#map{
    width: 94%;
    height: 60%;
}

</style>