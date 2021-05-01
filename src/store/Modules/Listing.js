import firebase from "firebase"

const state = {
    CargoCards:[],
    ShipCards:[],
    MapCargo:[],
    MapShip:[],
    CargoListing:[],
    ShipListing:[],
    ObjectLongListing:[],
    CargoStatus:null
}

const getters = {
GetCargoList: state => state.MapCargo,
GetShipList: state => state.MapShip,
GetLongListObject: state => state.ObjectLongListing,
GetCargoStatus: state => state.CargoStatus
}

const mutations = {
    SetObjectLongListing(state,ListObject)
    {
        if(state.CargoStatus)
        {
            state.ObjectLongListing = [
                {
                    name:"Cargo Type",
                    value:ListObject.CargoType
                },
                {
                    name:"Dangerous Goods",
                    value:ListObject.DangerousGoods
                },
                {
                    name:"Quantity",
                    value:ListObject.Quantity
                },
                {
                    name:"Loading Port",
                    value:ListObject.LoadingPort
                },
                {
                    name:"Discharging Port",
                    value:ListObject.DischargingPort
                },
                {
                    name:"From Date",
                    value:ListObject.FromDate
                },                
                {
                    name:"To Date",
                    value:ListObject.ToDate
                },
                {
                    name:"freight",
                    value:ListObject.Freight
                },
                    {
                        name:"Cargo Description",
                        value:ListObject.CargoDescription
                    },
            ]
        }
        else
        {
            state.ObjectLongListing = [
                {
                    name:"Charterting Type",
                    value:ListObject.ChartertingType
                },
                {
                    name:"Type Of Ship",
                    value:ListObject.TypeOfShip
                },
                {
                    name:"HoldVolume",
                    value:ListObject.HoldVolume
                },
                {
                    name:"Ready To Carry Dangerous Goods",
                    value:ListObject.ReadyToCarryDangerousGoods
                },
                {
                    name:"Dead Weight",
                    value:ListObject.DeadWeight
                },
                {
                    name:"Year Of Built",
                    value:ListObject.YearOfBuilt
                },
                {
                    name:"From",
                    value:ListObject.FromDate
                },
                {
                    name:"To",
                    value:ListObject.ToDate
                },
                {
                    name:"Available Sector",
                    value:ListObject.AvailableSector
                },            
            ]
        }
    },
    InitializeCargoAndShips(state)
    {
        state.MapCargo = state.CargoCards
        state.MapShip = state.ShipCards
    },
    MapRegionSelect(state,Sector)
    {
        state.MapCargo = []
        state.MapShip = []
        alert("Sector clicked is: "+ Sector);
        state.CargoCards.forEach((card) => {
            if(card.Macro == Sector)
            {
                state.MapCargo.push(card);
            }
        })
        state.ShipCards.forEach((card) => {
            if(card.Macro == Sector)
            {
                state.MapShip.push(card);
            }            
        })
        //Assign the Listing Array from the map array
        // console.log("Filtered Cargos on Map: "+ state.MapCargo)
        // state.CargoListing = state.MapCargo
        // state.ShipListing = state.MapShip

    },
    SetCargoStatus(state,x)
    {
        state.CargoStatus = x
    }
}

const actions = {
async FetchCargoAndShipCards({state})
{
    //Set the Original Cargo and ship states
    var db = firebase.firestore()
    await db.collection("Cargo").get().then(async (query) => {
        await query.forEach((doc) => {
            state.CargoCards.push(doc.data())
        })
        state.MapCargo = state.CargoCards
        // state.CargoListing = state.CargoCards
        // console.log("Hey list "+state.CargoListing);
    })
    await db.collection("Ships").get().then(async (query) => {
        await query.forEach((doc) => {
            state.ShipCards.push(doc.data())
        })
        state.MapShip = state.ShipCards
        // state.ShipListing = state.ShipCards
    })
    //Initialize the Ship and Cargo Listing and Map Data

}

}

export default {
    state,
    getters,
    mutations,
    actions
}