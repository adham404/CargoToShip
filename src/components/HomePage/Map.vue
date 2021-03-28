<template>
    <div>
        <h1>hello</h1>
        <div id="map"></div>
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

</style>