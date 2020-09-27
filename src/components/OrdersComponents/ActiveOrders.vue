<template lang="html">
  <div class="ActiveTable">
    <div class="RowHeader">
      <div class="Col">
        <p>Active</p>
      </div>
      <div class="Col">
        <p>
          Ship Name/CargoID
        </p>
      </div>
      <div class="Col">
        <p>
          Order Date
        </p>
      </div>
      <div class="Col">
        <p>
          Contacts
        </p>
      </div>
      <div style="  border-right: none;
" class="Col">
        <p>
          Sector
        </p>
      </div>
    </div>
    <component v-for="n in 10" v-bind:key="n" :is="RowComponent" ></component>
  </div>
</template>

<script>
import RowDisplay from "@/components/OrdersComponents/RowDisplay";
export default {
  data: function(){
    return{
      RowComponent:"RowDisplay"
    }
  },
  components:{
    RowDisplay
  }
}
</script>

<style lang="css" scoped>
.ActiveTable{
  width: 100%;
  height: 100%;
  display: block;
  /* overflow-y: scroll;
  overflow-x: hidden; */
  border: 1px solid #ccc;
  border-radius: 0.8vw;
  background-color: white;
}
.RowHeader{
  height: 2.5vw;
  width: 100%;
  display: flex;
  border-bottom: 0.5px solid #ccc;
  flex-direction: row;
}
.Col{
  width: 25%;
  /* font-family:'Roboto', sans-serif;
  color: black; */
  font-size: 1.2vw;
  border-right: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
  align-items: center;
}
.Col p{
  margin-top: 2%;
}

</style>
