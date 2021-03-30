const state = {
    CurrentSectorDataToBeShownOnTheMap:"",
    AllSectorData: require("../../sectors.json"),
    FilteredCargoCards:[],
    FilteredShipCards:[]
}

const getters = {
    GetCurrentSectorData : state => state.CurrentSectorDataToBeShownOnTheMap 

}

const mutations = {
    SetSectorDataFromTheDropDown(state,x)
    {
        state.CurrentSectorDataToBeShownOnTheMap = x;
    },
    CalendearFilter(state,From,To)
    {
            var CargoCards; //This Supposed to be the Global Cargo state that hold all cargo docs
            var ShipCards; //This Supposed to be the Global Ship state that hold all Ship docs
            //Loop through Cargo Data
            state.FilteredCargoCards = [];
            CargoCards.forEach((card) => {
                if(card.ToDate > From && card.FromDate < To)
                {
                        state.FilteredCargoCards.push(card);
                }
            })
            //Loop Through Ship Data
            state.FilteredShipCards = [];
            ShipCards.forEach((card) => {
                if(card.ToDate > From && card.FromDate < To)
                {
                        state.FilteredShipCards.push(card);
                }
            })
        
    }
}

const actions = {


}

export default {
    state,
    getters,
    mutations,
    actions
}