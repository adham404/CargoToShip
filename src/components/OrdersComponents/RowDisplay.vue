<template lang="html">
  <div class="Row">
    <div class="Col">
      <p>{{OrdersObject.Type}}</p>
    </div>
    <div class="Col">
      <p>
        {{OrdersObject.Id}}
      </p>
    </div>
    <div class="Col">
      <p>
        {{OrdersObject.date}}
      </p>
    </div>
    <div class="Col">
      <p>
        {{OrdersObject.Volume}}
      </p>
    </div>
    <div style="  border-right: none;
" class="Col">
          <p>
            {{OrdersObject.District}}
          </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  props:['OrderKey'],  //ID of this item is recieved as a data props
  data: function(){
    return{
      OrdersObject:"",  //This data object is used to recieve the whole child data of a current ID

    }
  },
  methods:{
    RecieveOrders(){ //this function is used to retrieve the whole data object of a specific child with a key
      let self = this;
      firebase.database().ref('Ships/' + self.OrderKey).once('value').then(function(snapshot){
        self.OrdersObject = snapshot.val();
      })
    }
  },
  mounted(){
    this.RecieveOrders(); //this function is called when the component is mounted
  }
}
</script>

<style lang="css" scoped>
.Row{
  height: 3vw;
  width: 100%;
  display: flex;
  border-bottom: 0.5px solid #ccc;
  flex-direction: row;
}
.Col{
  font-family:'Roboto', sans-serif;
  color: black;
  width: 25%;
  font-size: 1vw;
  border-right: 1px solid #ccc;
  text-align: center;
}
.Col p{
  margin-top: 5%;
}
</style>
