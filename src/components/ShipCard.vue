<template lang="html">
  <div :style="CardExpandStyle" class="ShipItem" v-on:click="ShowMore">
  <div class="ItemTitle">
    <img src="../assets/Ship.svg" alt="">
    <p>Ship Name</p>
  </div>
  <hr>
  <div class="ShipItemDetails">
    <div class="Row">
      <p style="margin-right:10%;">Availability: 1/1/2020 to 1/1/2021</p>
      <p id="SecCol">Dead weight: 1000Mt </p>
    </div>
    <div class="Row">
      <div class="DangerousGoods">
        <p>Ready to carry Dangerous goods:</p>
        <img src="../assets/Check.svg" alt="">
      </div>
      <p v-if="ShowMoreTrigger" id="SecCol">Chartering Type: Voyage&time</p>
    </div>
    <div v-if="ShowMoreTrigger" class="Row">
      <p style="margin-right:18%;">Type of Ship: Container ship </p>
      <p id="SecCol">Build Year: 2001 </p>
    </div>
    <div v-if="ShowMoreTrigger" class="Row">
      <p style="margin-right:8%;">Hold Volume cubic meter: 1000cm3</p>
      <div class="AvailableSector">
        <p id="SecCol">Available Sector: </p>
        <ul>
          <li>Sector 1</li>
          <li>Sector 1</li>
          <li>Sector 1</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data:function(){
    return{
      ShowMoreTrigger:false,  //Triger value to show more details when card is clicked
      CardExpandStyle:{       // Styling Object for the card component to manipulate the styling of the card during the js code
        height:""
      }
    }
  },
  methods:{
    ShowMore: function(){    //When The card is clicked the ShowMoreTrigger is swapped and the extra details are shown and the card expand
      this.ShowMoreTrigger = !this.ShowMoreTrigger;
      if(this.ShowMoreTrigger)
      {
        this.CardExpandStyle.height = 70 + "%";
      }
      else{
        this.CardExpandStyle.height = 35 + "%";
      }
    }
  }
}
</script>

<style lang="css" scoped>
.ShipItem{
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom:5%;
  cursor: pointer;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2vw;
}
.ItemTitle{
  display: flex;
  padding-left: 5%;
  flex-direction: row;
  justify-content: flex-start;
}
.ItemTitle img{
  width: 6%;
  height: 6%;
  margin-top: 1%;
  margin-right: 2%;
  object-fit: contain;
}
.ItemTitle p{
  font-size: 1.6vw;
}
.ShipItemDetails{
  display: flex;
  flex-direction: column;
}
.ShipItemDetails p{
  font-size: 1vw;
}
.Row{
  display: flex;
  margin-top: 2%;
  margin-bottom: 6%;
  margin-left: 5%;
}
.Row p{
  margin-right: 13%;
}
#SecCol{
  margin-right: 0%;
}
.DangerousGoods{
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: row;
  margin-right: 5%;
}
.DangerousGoods p{
  margin-right: 0%;
}
.DangerousGoods img{
    width: 10%;
    height: 10%;
    object-fit: contain;
}
.AvailableSector ul{
  margin-left: 30%;
  font-size: 0.9vw;
}
</style>
