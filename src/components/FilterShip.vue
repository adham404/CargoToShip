<template lang="html">
  <div class="FilterForm">
  <div class="FirstSection">
    <div class="Location">
      <label for="Location">Location</label>
      <input id="Location" type="text" name="" value="">
    </div>
    <div class="TypeOfShip">
      <label for="TypeOfShip">Type of Ship</label>
      <input id="TypeOfShip" type="text" name="" value="">
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

export default {
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
