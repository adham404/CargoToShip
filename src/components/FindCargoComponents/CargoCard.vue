<template lang="html">
  <div :style="CardExpandStyle" class="ShipItem" @mouseover="Expand" @mouseleave="Collapse" >
  <div class="ItemTitle">
  <svg xmlns="http://www.w3.org/2000/svg" width="56.774" height="35.185" viewBox="0 0 56.774 35.185"><g transform="translate(0 -5.063)"><path d="M5.5,5.177.553,8.4A2.248,2.248,0,0,0,0,10.125V35.187a2.248,2.248,0,0,0,.553,1.728L5.5,40.134Z"/><path d="M54.771,8.469,7,5.063V40.248l47.771-3.406a1.974,1.974,0,0,0,2-1.767V10.237a1.974,1.974,0,0,0-2-1.767ZM17.248,31.527a2.02,2.02,0,0,1-2.2,1.774,2.02,2.02,0,0,1-2.2-1.774V13.785a2.02,2.02,0,0,1,2.2-1.774,2.02,2.02,0,0,1,2.2,1.774Zm11.711-1.183a2.02,2.02,0,0,1-2.2,1.774,2.02,2.02,0,0,1-2.2-1.774V14.968a2.02,2.02,0,0,1,2.2-1.774,2.02,2.02,0,0,1,2.2,1.774ZM40.67,29.161a2.246,2.246,0,0,1-4.392,0V16.15a2.246,2.246,0,0,1,4.392,0Zm10.248-.591a2.246,2.246,0,0,1-4.392,0V17.333a2.246,2.246,0,0,1,4.392,0Z" transform="translate(0)"/></g></svg>    <p>{{ShipData.Id}}</p>
  </div>
  <div class="Line"></div>
  <div class="ShipItemDetails">
    <div class="FirstCol">
      <p>Availability: {{ShipData.DateFrom.split('T')[0]}} to {{ShipData.DateTo.split('T')[0]}}</p>
      <div class="DangerousGoods">
        <p>Dangerous goods:</p>
        <!-- <img v-if="ShipData.DangerousGoods" src="../assets/Check.svg" alt=""> -->
      </div>
      <p v-if="ShowMoreTrigger">Type of Cargo: {{ShipData.Type}} </p>
      <p v-if="ShowMoreTrigger">Hold Volume cubic meter: {{ShipData.Volume}}cm3</p>
    </div>
    <div class="SecondCol">
      <p>Dead weight: {{ShipData.Weight}}Mt </p>
      <p v-if="ShowMoreTrigger">Chartering Type: {{ShipData.CharteringType}}</p>
      <p v-if="ShowMoreTrigger">Build Year: {{ShipData.Build}} </p>
      <div v-if="ShowMoreTrigger" class="AvailableSector">
        <p>Available Sector: </p>
        <ul>
          <li>Sector A</li>
          <li>Sector B</li>
          <li>Sector C</li>
        </ul>
      </div>
    </div>
    </div>
    <button id="MoreButton" v-if="ShowMoreTrigger">MORE</button>
</div>

</template>

<script>
import firebase from 'firebase';
// import { EventBus } from '../main';
export default {
  data:function(){
    return{
      ShowMoreTrigger:false,  //Triger value to show more details when card is clicked
      CardExpandStyle:{       // Styling Object for the card component to manipulate the styling of the card during the js code
        height:""
      },
      ShipData:{   //Object to hold the ship data

      },
      HoverCard:false,
      Key:""    //Key data property to hold the ID of each card

    }
  },
  props: ['IdFlag'],   //the Number of iteration is passed down to the shipcard
  methods:{
    Expand: function() //function to expand card
    {
      this.ShowMoreTrigger = true;
      this.CardExpandStyle.height = 70 + "%";
    },
    Collapse: function() //function to collapse card
    {
      this.ShowMoreTrigger = false;
      this.CardExpandStyle.height = 35 + "%";
    },
  },
  mounted(){
     //Recieve Signal from App.vue with the ID of the of Each Card
      this.Key = this.IdFlag;  //Assign the ID of each card according to it's order to the data property Key
      let self = this   // To Access Local data properties inside Async() functions
      //When the Card is created the object retrieve the data from the database According to it's unique ID when the Event signal is transmitted
      firebase.database().ref('Ships/' + self.Key).once('value').then(function(snapshot){
        self.ShipData = snapshot.val()
        // console.log(self.ShipData);
      })
   }
}
</script>

<style lang="css" scoped>
.ShipItem{
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom:5%;
  margin-left: 1%;
  cursor: pointer;
  background-color: white;
  /* border: 1px solid #ccc; */
  border-radius: 1vw;
  box-shadow: rgba(0,0,0,0.28) 0px 1px 7px 0px;
}
.ItemTitle{
  display: flex;
  margin-top: 1%;
  padding-left: 5%;
  margin-bottom: 1%;
}
.ItemTitle svg{
  margin-right: 6%;
  width:2vw;
}
.ItemTitle p{
  font-size: 1.4vw;
}
.Line{
  width: 100%;
  height: 0.1vw;
  background-color: #D3CDCD;
}
.ShipItemDetails{
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  margin-top: 5%;
}
.ShipItemDetails p{
  margin-bottom: 15%;
}
.FirstCol{
  display: flex;
  flex-direction: column;
  margin-right: 15%;
  margin-left: 5%;
}
.FirstCol p{
  margin-bottom: 10%;
}
.SecondCol{
  display: flex;
  flex-direction: column;
}
.ShipItemDetails p{
  font-size: 0.8vw;
}
.DangerousGoods{
  /* width: 100%; */
  display: flex;
  flex-direction: row;
}
.AvailableSector ul{
  margin-top: 0;
  margin-left: 30%;
  font-size: 0.9vw;
}
#MoreButton{
  width: 20%;
  margin-left: 40%;
  margin-top: 1vw;
  font-size: 0.9vw;
  font-family: 'Quicksand', sans-serif;
  color: white;
  font-weight: bold;
  height: 3vw;
  cursor: pointer;
  background-color: #3542bd;
  border-radius: 1vw;
  border: 0;
}
</style>
