<template lang="html">
  <div :style="CardExpandStyle" class="ShipItem" @mouseover="Expand" @mouseleave="Collapse" >
  <div class="ItemTitle">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21.675" viewBox="0 0 29 25.637"><g transform="translate(0 -35.488)"><path d="M9.586,50.541a39.85,39.85,0,0,1-6.943,2.908V48.306a1.209,1.209,0,0,1,.529-1l1.981-1.347a1.423,1.423,0,0,1,.68-.209h3.18V43.877h3.579V45.75h2.742a.806.806,0,0,1,.806.806v1.114A51.055,51.055,0,0,0,9.586,50.541Zm-.573-8.514V43h3.579v-.972a.9.9,0,0,0-.9-.9H9.915A.9.9,0,0,0,9.013,42.027ZM6.935,39.192a1.846,1.846,0,0,0,.725-.148,1.357,1.357,0,0,0,1.559.505c0,.025-.008.049-.008.075a.863.863,0,1,0,.863-.863h0A1.39,1.39,0,0,0,8.787,36.84c-.026,0-.049.006-.075.008a1.849,1.849,0,1,0-1.778,2.345Zm18.13,18.13a.809.809,0,0,0,0,.895l1.067,1.6a.841.841,0,0,1-.764,1.305L1.631,59.257a1.519,1.519,0,0,1-1.35-1.131A7.623,7.623,0,0,1,0,56.3c0-1.239.5-1.47,1.517-1.713,9.111-2.174,11.616-7.414,26.818-8.272a.631.631,0,0,1,.66.715A27.135,27.135,0,0,1,25.065,57.322ZM23.9,53.406a.4.4,0,1,0-.806,0,1.381,1.381,0,0,1-.981,1.317V51.945a.918.918,0,1,0-.806,0v2.775a1.381,1.381,0,0,1-.981-1.317.4.4,0,1,0-.806,0,2.19,2.19,0,0,0,4.381,0Z"/></g></svg>
    <p>{{ShipData.Id}}</p>
  </div>
  <div class="Line"></div>
  <div class="ShipItemDetails">
    <div class="FirstCol">
      <p>Availability: {{ShipData.DateFrom.split('T')[0]}} to {{ShipData.DateTo.split('T')[0]}}</p>
      <div class="DangerousGoods">
        <p>Ready to carry Dangerous goods:</p>
        <!-- <img v-if="ShipData.DangerousGoods" src="../assets/Check.svg" alt=""> -->
      </div>
      <p v-if="ShowMoreTrigger">Type of Ship: {{ShipData.Type}} </p>
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
      console.log("Expand Bro");
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
