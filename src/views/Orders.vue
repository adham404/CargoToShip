<template lang="html">
  <div class="OrdersComponent">
    <div class="TabButtons">
      <button @click="ToHistory" id="HistoryBtn" :style="HistoryBtn"   type="button" name="button">History</button>
      <button @click="ToActive" id="ActiveBtn"  :style="ActiveBtn" type="button" name="button">Active orders</button>
    </div>
    <div class="OrdersTable">
     <keep-alive>
      <component :is="OrderCurrentComponent"></component>
    </keep-alive>
    </div>
  </div>
</template>

<script>
import OrdersHistory from "@/components/OrdersComponents/OrderHistory";
import ActiveOrders from "@/components/OrdersComponents/ActiveOrders";
import firebase from 'firebase';
import { EventBus } from '../main';

export default {
  data: function(){
    return{
      OrderCurrentComponent:"OrdersHistory", //Data property that holds the value of the component's name wether it's history or active orders
      HistoryBtn:{  //Styling Object that change the styling of a cretain button when is clicked
        backgroundColor:"",
        color:""
      },
      ActiveBtn:{ //Styling Object that change the styling of a cretain button when is clicked
        backgroundColor:"",
        color:""
      },
      OrdersId:[]  //Data Array that hold the Keys of the user's orders
    }
  },
  mounted(){
    this.OrdersReq(); //Activate this function when this component is mounted
  },
  methods:{
    ToHistory: function(){                      //Function activated when the History button is clicked
      if(this.OrderCurrentComponent=="ActiveOrders")   //A lot of things changed such as styling and swapping between orders components
      {
        this.HistoryBtn.backgroundColor = "#0E153A";
        this.ActiveBtn.backgroundColor = "#06457C";
        this.ActiveBtn.color = "black";
        this.HistoryBtn.color = "white";
        this.OrderCurrentComponent = "OrdersHistory";
      }
    },
    ToActive: function(){             //Function activated when the History button is clicked
      if(this.OrderCurrentComponent=="OrdersHistory")  //A lot of things changed such as styling and swapping between orders components
      {
        this.HistoryBtn.backgroundColor = "#06457C";
        this.ActiveBtn.backgroundColor = "#0E153A";
        this.ActiveBtn.color = "white";
        this.HistoryBtn.color = "black";
        this.OrderCurrentComponent = "ActiveOrders";
      }
  },
  OrdersReq(){                     //This function communicate with a ceratin database in firebase
    var database = firebase.database();
    var OrdersReq = database.ref('Ships');
    OrdersReq.on('value',this.getOrders,this.getErr);
  },
  getOrders(data){             //this function retrieve the Keys of the wanted childs in a certain database
    var Orders = data.val();
    this.OrdersId = Object.keys(Orders);
    EventBus.$emit("HistoryOrdersTable",this.OrdersId);
  },
  getErr(Err){    //this function displays an explanation Error in the console
    console.log(Err);
  }

},
  components:{   //components instance hold the current swapping vue components
    OrdersHistory,
    ActiveOrders
  }
}
</script>

<style lang="css" scoped>
*{
  padding: 0;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
}
.OrdersTable{
  width: 100%;
  height: 100%;
}

.TabButtons{
  display: flex;
  margin-left: 1%;
  flex-direction: row;
  height: 3vw;
  width: 25%;
  z-index:-1;
}
.TabButtons button{
  color: white;
  font-size: 1vw;
  border: 0;
  border-radius: 1.5vw;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  width: 50%;
  height: 100%;
}
#HistoryBtn{
    background-color: #0E153A;
    color: white;
}
#ActiveBtn{
  background-color: #06457C;
  color: black;
}
.OrdersComponent{
  /* margin-left: 9vw; */
  height: 45vw;
  width: 82vw;
}
</style>
