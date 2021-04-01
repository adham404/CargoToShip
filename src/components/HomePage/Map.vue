<template>
    <div>
        <h1>hello</h1>
        <div id="map"></div>
        <ShortListing class="absolute" v-if="List" />
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
            color="blue"
            fab
            dark
            absolute
            middle
            right
            class="mb-16 mr-8"
            @click="List = !List"
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
import {mapMutations,mapGetters} from "vuex";
<<<<<<< HEAD
import firebase from "firebase";

=======
import ShortListing from '../ShortListing.vue';
>>>>>>> a94ceb495d374f438d143cd3b4a46c4606ffcd33

    export default {
        data(){
            return{
                hidden: false,
                List: false
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
        components:{
            ShortListing
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