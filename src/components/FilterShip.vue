<template lang="html">
  <div class="FilterForm">
  <div class="FirstSection">
    <div class="Location">
      <label for="Location">Location {{Possible}}</label>
      <input id="Location" type="text" name="" value="">
    </div>
    <div class="TypeOfShip">
      <label for="TypeOfShip">Type of Ship</label>
      <input v-model="ShipType" @input="Filter" id="TypeOfShip" type="text" name="" value="">
    </div>
  </div>
  <div class="CharteringType">
    <p>Chartering Type:</p>
    <div class="Checkboxes">
      <input id="Voyage" type="checkbox" name="" value="">
      <label for="Voyage">Voyage</label>
      <input id="Time" type="checkbox" name="" value="">
      <label for="Time">Time</label>
      <input type="checkbox" name="" value="">
      <label for="Both">Both</label>
    </div>
  </div>
  <p>Hold Volume Cubic centimeter:</p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="from">From</label>
        <input id="from" type="text" name="" value="">
        <label for="from">cm3</label>
    </div>
    <div class="InquiryInput">
        <label for="to">To</label>
        <input id="to" type="text" name="" value="">
        <label for="to">cm3</label>
    </div>
  </div>
  <div class="DangerousGoods">
    <label for="Dangerous">Ready to carry Dangerous Goods:</label>
    <input id="Dangerous" type="checkbox" name="" value="">
  </div>
  <p>Summer Draft: </p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="from">From</label>
        <input id="from" type="text" name="" value="">
        <label for="from">m</label>
    </div>
    <div class="InquiryInput">
        <label for="to">To</label>
        <input id="to" type="text" name="" value="">
        <label for="to">m</label>
    </div>
  </div>
  <p>Dead Weight: </p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="from">From</label>
        <input id="from" type="text" name="" value="">
        <label for="from">MT</label>
    </div>
    <div class="InquiryInput">
        <label for="to">To</label>
        <input id="to" type="text" name="" value="">
        <label for="to">MT</label>
    </div>
  </div>
  <p>Availability Date From/To: </p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="from">From</label>
        <input style="width:100%;" id="from date" type="date" name="" value="">
    </div>
    <div class="InquiryInput">
        <label for="to">To</label>
        <input style="width:100%;" id="to date" type="date" name="" value="">
    </div>
  </div>
</div>
</template>

<script>
import { EventBus } from "../main";
import firebase from 'firebase';

export default {
  data: function() {
    return{
      ShipType:"",  //Data Property that holds Search term for testing purposes
      FilteredIds:""
    }

  },
  methods:{
    Filter: function(){
      var database =  firebase.database();   //Create a Database object to simply use it
      var ref = database.ref('Ships');  //Create an instance of our Table as a ref object
      if(this.ShipType=="")
      {
        ref.on('value',this.gotData,this.errData);  //Assign the query selectors and the filteration to the ref object and by using the "on" method we will retrieve from the database everytime something is updated in the database and by using the 'value' event we indicate that we want the value of the filtered object and pass it to gotData() function in case there is value and pass to errData() function in case there is an error
      }
      else{
        ref.orderByChild("Type").equalTo(this.ShipType).on('value',this.gotData,this.errData);  //Assign the query selectors and the filteration to the ref object and by using the "on" method we will retrieve from the database everytime something is updated in the database and by using the 'value' event we indicate that we want the value of the filtered object and pass it to gotData() function in case there is value and pass to errData() function in case there is an error
      }
    },
    gotData: function(data){  //This Function handles the filtered data object retrieved from the database
      var Ships = data.val();  //Ships hold the whole data object
      this.FilteredIds = Object.keys(Ships); //FilteredIds object holds the IDs of the filtered object
      EventBus.$emit("SendFilter",this.FilteredIds);
      console.log(this.FilteredIds);
    },
    errData: function(err){ //This Function output an error if an error exists
      console.log('Error!')
      console.log(err);
    }
  },
  mounted(){
    this.Filter();
  }
}
</script>

<style lang="css" scoped>
.FilterForm{
  width: 90%;
  /* border: 1px solid #ccc; */
  height: 80%;
  border-radius: 0.5vw;
  margin-left: 5%;
  background-color: white;
}
.FilterForm label{
  font-size: 0.8vw;
  font-family:'Roboto', sans-serif;
  /* font-weight: bold; */
  color: black;
}
.FilterForm p{
  font-size: 1vw;
  margin-left: 2%;
  margin-bottom: 2%;
  text-align: left;
  font-weight: bold;
}
.FirstSection{
  margin-left: 2%;
  margin-top: 2%;
  display: flex;
  margin-bottom: 6%;
  justify-content: space-between;
  height: 10%;
}
.FirstSection input{
  width: 80%;
  font-size: 0.8vw;
  height: 100%;
  border: 0.1vw solid black;
  border-radius: 0.3vw;
}
 .Location{
   width: 45%;
   height: 100%;
   display:flex;
   flex-direction: column;
}
 .Location label{
   font-size: 1vw;
   font-weight: bold;
 }
.TypeOfShip{
  width: 45%;
  display:flex;
  flex-direction: column;
}
.TypeOfShip label{
  font-size: 1vw;
  font-weight: bold;
}
.CharteringType{
  margin-left: 2%;
  margin-bottom: 2%;
}
.CharteringType div{
  align-items: center;
  display: flex;
  justify-content: center;
}
.CharteringType p{
  font-size: 1vw;
  font-weight: bold;
  text-align: left;
}
.CharteringType input{
  height: 2vw;
  margin-right: 0.5vw;
}
.CharteringType label{
  text-align: center;
  margin-right: 10% ;
}
.Inquiry{
  display: flex;
  width: 100%;
  height: 5%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}
.InquiryInput{
  display: flex;
  align-items: center;
  margin-right: 10%;
}
.InquiryInput input{
  width: 50%;
  height: 90%;
  font-size: 0.8vw;
  margin-left: 2%;
  margin-right: 2%;
  border: 0.1vw solid black;
  border-radius: 0.3vw;

}
.DangerousGoods{
  display: flex;
  align-items: center;
  margin-left: 2%;
  margin-bottom: 2%;
}
.DangerousGoods label{
  font-size: 1vw;
  font-weight: bold;
  margin-right:2%;
}
.DangerousGoods input{
  height: 2vw;
}
</style>
