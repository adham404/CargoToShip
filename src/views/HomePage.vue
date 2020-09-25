<template lang="html">
    <div class="Home">
        <div class="left">
            <div id = "map"></div>
            
        </div>

        <div class="right">
            <AddFab/>
            <SearchFab/>
        </div>
        <div v-if = "show" class="Overlay">
            <FindCargoShip></FindCargoShip>
        </div>
        
    </div>
</template>

<script>
/*eslint-disable*/
import AddFab from '@/components/HomePageComponents/AddFab'
import SearchFab from '@/components/HomePageComponents/SearchFab'
import FindCargoShip from "../views/FindCargoShip"
import {EventBus} from '@/main.js'
// import {LoadMap1, LoadMap2, LoadMap1String, LoadMap2String, simplemaps_worldmap_mapinfo,simplemaps_worldmap_mapdata as mapinfo} from '@/modules/worldmap.js'

export default {
    data () {
        return{
            show: false
        }
    },
    components:{
        AddFab,
        SearchFab,
        FindCargoShip
    },
    mounted(){
        EventBus.$on('SearchClicked', () => {
            this.show = true
        })
       
        // var one = LoadMap1(LoadMap1String)
        // eval(one)
        // var two = LoadMap2(LoadMap2String)
        // eval(two)
        window.LoadMap1(window.LoadMap1String)
        window.LoadMap2(window.LoadMap2String)

        
    },


}
</script>

<style lang="css" scoped>
    .Home{
        display: flex;
        justify-content: space-between;

    }
    .left{
        /* background-color: green; */
        width: 90%;
        height: 100%;
    }
    .right{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        /* background-color: red; */
        width: 10%;
        height: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .Overlay{
        position: absolute;
        z-index: 2;

    }
</style>
