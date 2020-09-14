<template lang="html">
  <div class="FilterForm">
  <div class="FilterHeading">
    <p id="FilterTitle">Filters</p>
    <button type="button" name="button">
        Filter
    </button>
  </div>
  <div class="FirstSection">
    <div class="Location">
      <label  for="Location">Cargo Description</label>
      <select class="" name="">
        <option value="Panama">Cargo 1</option>
        <option value="Red Sea">Cargo 2</option>
        <option value="Arabian Gulf">Cargo 3</option>
        <option value="Carribean">Cargo 4</option>
        <option value="North Sea">Cargo 5</option>
        <option value="Mideterian">Cargo 6</option>
        <option value="The North">Cargo 7</option>
        <option value="">All</option>
      </select>
    </div>
    <div class="TypeOfShip">
      <label for="TypeOfShip">Type of Cargo</label>
      <select  v-model="ShipType"  class="" name="">
        <option value="Fishing">Fishing</option>
        <option value="container">container</option>
        <option value="AboLayla">AboLayla</option>
        <option value="AboHamed">AboHamed</option>
        <option value="military">military</option>
        <option value="navy">navy</option>
        <option value="">All</option>
      </select>
      <!-- <input v-model="ShipType" @input="Filter" id="TypeOfShip" type="text" name="" value=""> -->
    </div>
  </div>
  <div class="FirstSection">
    <div class="Location">
      <label  for="Location">Loading Port</label>
      <select  class="" name="">
        <option value="Panama">Port 1</option>
        <option value="Red Sea">Port 2</option>
        <option value="Arabian Gulf">Port 3</option>
        <option value="Carribean">Port 4</option>
        <option value="North Sea">Port 5</option>
        <option value="Mideterian">Port 6</option>
        <option value="The North">Port 7</option>
        <option value="">All</option>
      </select>
    </div>
    <div class="TypeOfShip">
      <label for="TypeOfShip">Discharging Port</label>
      <select   class="" name="">
        <option value="Fishing">Port 1</option>
        <option value="container">Port 2</option>
        <option value="AboLayla">Port 3</option>
        <option value="AboHamed">Port 4</option>
        <option value="military">Port 5</option>
        <option value="navy">Port 6</option>
        <option value="">All</option>
      </select>
      <!-- <input v-model="ShipType" @input="Filter" id="TypeOfShip" type="text" name="" value=""> -->
    </div>
  </div>

  <!-- <div class="CharteringType">
    <p>Chartering Type:</p>
    <div class="Checkboxes">
      <input @input="setOptions"  v-model="CharteringType" id="Voyage" type="checkbox" name="" value="Voyage">
      <label for="Voyage">Voyage</label>
      <input @input="setOptions"  v-model="CharteringType" id="Time" type="checkbox" name="" value="Time">
      <label  for="Time">Time</label>
      <input @input="setOptions"  v-model="CharteringType" type="checkbox" name="" value="Both">
      <label for="Both">Both</label>
    </div>
  </div> -->
  <p>Quantity:</p>
  <div class="Inquiry">
    <div class="InquiryWithError">
      <div class="InquiryInput">
        <label for="FromVolume">From</label>
        <input
          v id="FromVolume" type="text" name="" value="">
        <label for="FromVolume">cm3</label>
      </div>
    </div>
    <div class="InquiryWithError">
      <div class="InquiryInput">
        <label for="ToVolume">To</label>
        <input
         id="ToVolume" type="text" name="" value="">
          <label for="ToVolume">cm3</label>
        </div>
    </div>
  </div>
  <div class="DangerousGoods">
    <label for="Dangerous">Dangerous Goods:</label>
    <input id="Dangerous" type="checkbox" name="" value="">
  </div>
  <!-- <p>Summer Draft: </p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="FromDraft">From</label>
        <input v-model="FromDraft" id="FromDraft" type="text" name="" value="">
        <label for="FromDraft">m</label>
    </div>
    <div class="InquiryInput">
        <label for="ToDraft">To</label>
        <input v-model="ToDraft" id="ToDraft" type="text" name="" value="">
        <label for="ToDraft">m</label>
    </div>
  </div>
  <p>Dead Weight: </p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="FromWeight">From</label>
        <input v-model="FromWeight" id="FromWeight" type="text" name="" value="">
        <label for="FromWeight">MT</label>
    </div>
    <div class="InquiryInput">
        <label for="ToWeight">To</label>
        <input v-model="ToWeight" id="ToWeight" type="text" name="" value="">
        <label for="ToWeight">MT</label>
    </div>
  </div> -->
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
import { EventBus } from "../../main";
import firebase from 'firebase';
export default {
  data: function() {
      return{

      }
    },
  methods:{
    MountDisplay: function(){  //this function display all the contents of the database when the apllication is first mounted
      var database =  firebase.database();   //Create a Database object to simply use it
      var GeneralReq =  database.ref('Ships'); //Create a ref for the database object
      GeneralReq.on('value',this.GeneralFilter,this.errData); // return a promise
    },
    GeneralFilter: function(data){  //This Function handles the filtered data object retrieved from the database
      var Ships = data.val();  //Ships hold the whole data object
      this.AllFieldIds = Object.keys(Ships); //FilteredIds object holds the IDs of the filtered object
      EventBus.$emit("SendFilter",this.AllFieldIds);
    },
    errData: function(err){ //This Function output an error if an error exists
      console.log('Error!')
      console.log(err);
    }
  },
  mounted(){
    this.MountDisplay();
  }
}
</script>

<style lang="css" scoped>
#FilterTitle{
  /* text-align: center; */
  font-size: 2vw;
  font-weight: normal;
  margin-right: 10%;
}
.FilterHeading{
  margin-left: 40%;
  margin-bottom: 2%;
  display: flex;
  width:20%;
}
.FilterHeading button{
  width: 50%;
}
.FilterHeading button img{
  width: 2vw;
  height: 2vw;
  object-fit: cover;
}
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
.FirstSection select{
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
  height: 7%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}
.InquiryInput{
  height: 99%;
  display: flex;
  align-items: center;
  margin-right: 10%;
}
.InquiryWithError{
  display: block;
}
.InquiryWithError p{
  height: 1%;
  color:red;
  margin-left:12%;
  font-size: 0.8vw;
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
