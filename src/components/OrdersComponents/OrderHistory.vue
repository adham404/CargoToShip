<template lang="html">
  <div class="HistoryTable">
    <div class="RowHeader">
      <div class="Col">
        <p>Type</p>
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
    <component v-for="key in OrdersKey" v-bind:key="key" :OrderKey="key" :is="RowComponent" ></component>
  </div>
</template>

<script>
import RowDisplay from "@/components/OrdersComponents/RowDisplay";
import { EventBus } from '@/main';

export default {
  data: function(){
    return{
      RowComponent:"RowDisplay",   //Data property that assigned as a binding component whcih holds the name value of the actual component
      OrdersKey:""  //Data Array that is used to recieve the IDs fromm the event signal of the child of a certain database
    }
  },
  components:{
    RowDisplay
  },
  methods:{
    RecieveOrdersKeys: function(){  //this function is used to recieve a signal from the EventBus method
      EventBus.$on("HistoryOrdersTable",(value)=>{
        this.OrdersKey = value;
      });
    }
  },
  mounted(){
    this.RecieveOrdersKeys();  //The function is called when the component is first mounted
  }
}
</script>

<style lang="css" scoped>
.HistoryTable{
  width: 100%;
  height: 100%;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid #ccc;
  border-radius: 0.8vw;
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
