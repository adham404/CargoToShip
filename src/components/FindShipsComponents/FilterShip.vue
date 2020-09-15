<template lang="html">
  <div class="FilterForm">
  <div class="FilterHeading">
    <p id="FilterTitle">Filters</p>
    <button @click="Filter" type="button" name="button">
        Filter
    </button>
  </div>
  <div class="FirstSection">
    <div class="Location">
      <label  for="Location">Location</label>
      <select  v-model="ShipDistrict"  class="" name="">
        <option value="Panama">Panama</option>
        <option value="Red Sea">Red Sea</option>
        <option value="Arabian Gulf">Arabian Gulf</option>
        <option value="Carribean">Carribean</option>
        <option value="North Sea">North Sea</option>
        <option value="Mideterian">Mideterian</option>
        <option value="The North">The North</option>
        <option value="">All</option>
      </select>
    </div>
    <div class="TypeOfShip">
      <label for="TypeOfShip">Type of Ship</label>
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
  <div class="CharteringType">
    <p>Chartering Type:</p>
    <div class="Checkboxes">
      <input @input="setOptions"  v-model="CharteringType" id="Voyage" type="checkbox" name="" value="Voyage">
      <label for="Voyage">Voyage</label>
      <input @input="setOptions"  v-model="CharteringType" id="Time" type="checkbox" name="" value="Time">
      <label  for="Time">Time</label>
      <input @input="setOptions"  v-model="CharteringType" type="checkbox" name="" value="Both">
      <label for="Both">Both</label>
    </div>
  </div>
  <p>Hold Volume Cubic centimeter:</p>
  <div class="Inquiry">
    <div class="InquiryWithError">
      <div class="InquiryInput">
        <label for="FromVolume">From</label>
        <input
        @input="()=>{
          this.Validate(this.FromVolume,1)
          }"
          v-model="FromVolume" id="FromVolume" type="text" name="" value="">
        <label for="FromVolume">cm3</label>
      </div>
      <p v-if="Err1">{{ErrMsg}}</p>
    </div>
    <div class="InquiryWithError">
      <div class="InquiryInput">
        <label for="ToVolume">To</label>
        <input
        @input="()=>{
          this.Validate(this.ToVolume,2)
          }"
          v-model="ToVolume" id="ToVolume" type="text" name="" value="">
          <label for="ToVolume">cm3</label>
        </div>
        <p v-if="Err2">{{ErrMsg}}</p>
    </div>
  </div>
  <div class="DangerousGoods">
    <label for="Dangerous">Ready to carry Dangerous Goods:</label>
    <input @input="Filter" v-model="DangerGoodFlag" id="Dangerous" type="checkbox" name="" value="">
  </div>
  <p>Summer Draft: </p>
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
  </div>
  <p>Availability Date From/To: </p>
  <div class="Inquiry">
    <div class="InquiryInput">
        <label for="from">From</label>
        <input v-model="FromDate" style="width:100%;" id="from date" type="date" name="" value="">
    </div>
    <div class="InquiryInput">
        <label for="to">To</label>
        <input v-model="ToDate" style="width:100%;" id="to date" type="date" name="" value="">
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
      AllFieldIds:"",  //Array the holds all the id of the childs of the database
      FilteredIds:"", //Array that holds the filtered ids of the childs of the database
      NumberOfQueries:0, //a counter to indicate the number queries entered by the user
      FromVolume:"", //-----------START--------------------------------------
      ToVolume:"",
      ErrMsg:"",
      Err1:false,
      Err2:false,
      ShipType:"",
      ShipDistrict:"",
      FromDraft:"",
      ToDraft:"", //--------------EXPLANATION: Data properties that hold the value of each filter input
      FromWeight:"",
      ToWeight:"",
      FromDate:"",
      CharteringType: [""],
      NormalString:"",
      DangerGoodFlag:"",
      ToDate:"", //-------------END---------------------------------------
      searchQuery: //-----------START------------------
        {
          NumberOfQueries:0,
          Type:"",
          District:"",
          CharteringType:"",
          DraftFrom:"",
          DraftTo:"",   //----------------This data object store the input values after some validation done to be passed to the firebase function
          DangerousGoods:"",
          VolumeFrom:"",
          VolumeTo:"",
          WeightFrom:"" ,
          DateFrom:"",
          DateTo:"",
        } //----------END------------------
    }
  },
  methods:{
    MountDisplay: function(){  //this function display all the contents of the database when the apllication is first mounted
      var database =  firebase.database();   //Create a Database object to simply use it
      var GeneralReq =  database.ref('Ships'); //Create a ref for the database object
      GeneralReq.on('value',this.GeneralFilter,this.errData); // return a promise
    },
    setOptions: function(e) //This function handles the logic of the checkbox as it to be like a radio button
    {
      this.CharteringType = [e.target.value];
    },
    Validate: function(Input,ErrNum)
    {
      if(ErrNum == 1 && Input !== "")
      {
        this.Err1 = true;
      }
      else{
        this.Err1 = false;
      }
      if(ErrNum == 2 && Input !== "")
      {
        this.Err2 = true;
      }
      else{
        this.Err2 = false;
      }
      if(!(/^\d+$/.test(Input)))
      {
        this.ErrMsg = "Must contain numbers only";
      }
      else{
        var NumberTest = "2000";
        var Integer = parseInt(NumberTest, 10);
        if (Integer > 1000000) {
          this.ErrMsg = "Limit Number Exceeded";
        }
        console.log(Integer);
        this.ErrMsg = "";
      }

    },
    Filter: function(){  //When the filter button is clicked this filter function is executed
      //------------Reset all the data values inside the searchQueryObject whenever the filter button is clicked
      this.searchQuery.NumberOfQueries = 0
      this.searchQuery.Type = ""
      this.searchQuery.District = ""
      this.searchQuery.CharteringType = ""
      this.searchQuery.VolumeFrom = ""
      this.searchQuery.VolumeTo = ""
      this.searchQuery.DraftFrom = ""
      this.searchQuery.DraftTo = ""
      this.searchQuery.WeightFrom = ""
      this.searchQuery.WeightTo = ""
      this.searchQuery.DateFrom = ""
      this.searchQuery.DateTo = ""
      this.NumberOfQueries = 0
      //----------assigning the data properties that hold the value of each filteration form input to the values inside the searchQuery data object
      if (this.ShipDistrict !== "") {
        this.searchQuery.District = this.ShipDistrict;
        console.log("Triggerd District");
        this.NumberOfQueries++;
      }
      if (this.DangerGoodFlag !== "") {
        this.searchQuery.DangerousGoods = this.DangerGoodFlag;
        console.log("Triggerd Danger");
        this.NumberOfQueries++;
      }
      if (this.ShipType !== "") {
        this.searchQuery.Type = this.ShipType;
        console.log("Triggerd Type");
        this.NumberOfQueries++;
      }
      if(this.CharteringType[0] == "Voyage" || this.CharteringType[0] == "Time" || this.CharteringType[0] == "Both" )
      {
        this.searchQuery.CharteringType = this.CharteringType[0] ;
        console.log("Triggerd Chartering");
        this.NumberOfQueries++;
      }
      if (this.FromVolume !== "" && this.ToVolume !== "" ) {
          this.searchQuery.VolumeFrom = this.FromVolume;
          this.searchQuery.VolumeTo = this.ToVolume;
        console.log("Triggerd Volume");
          this.NumberOfQueries++;
      }
      if (this.FromDraft !== "" && this.ToDraft !== "" ) {
        this.searchQuery.DraftFrom = this.FromDraft;
        this.searchQuery.DraftTo = this.ToDraft;
        console.log("Triggerd Draft");
        this.NumberOfQueries++;
      }
      if (this.FromWeight !== "" && this.ToWeight !== "" ) {
        this.searchQuery.WeightFrom = this.FromWeight;
        this.searchQuery.WeightTo = this.ToWeight;
        console.log("Triggerd Weight");
        this.NumberOfQueries++;
      }
      if (this.FromDate !== "" && this.ToDate !== "" ) {
        this.searchQuery.DateFrom = this.FromDate;
        this.searchQuery.DateTo = this.ToDate;
        console.log("Triggerd Date");
        this.NumberOfQueries++;
      }
      this.searchQuery.NumberOfQueries = this.NumberOfQueries;
//---------------------
      console.log(this.searchQuery);
//-------------Calling the firebase callable cloud function that is responsible for the searching and passing it the searchQuery dataobject to apply the filteration technique
      const Test = firebase.functions().httpsCallable('GetShip');
      Test({ list: this.searchQuery}).then(result => {
          this.FilteredIds = result.data
          console.log(this.FilteredIds);
          EventBus.$emit("SendFilter",this.FilteredIds);
      }).catch(error =>{
        console.log('Error is: '+ error);
      });
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
  height: 100%;
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
