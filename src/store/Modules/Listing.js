import firebase from "firebase"

const state = {
    CargoListing:[],
    ShipListing:[],
    ObjectLongListing:[],
    CargoStatus:null
}

const getters = {
GetCargoCards: state => state.CargoListing,
GetShipCards: state => state.ShipListing,
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
    SetCargoStatus(state,x)
    {
        state.CargoStatus = x
    }
}

const actions = {
async FetchCargoAndShipCards({state})
{
    var db = firebase.firestore()
    await db.collection("Cargo").get().then((query) => {
        query.forEach((doc) => {
            state.CargoListing.push(doc.data())
        })
    })
    await db.collection("Ship").get().then((query) => {
        query.forEach((doc) => {
            state.ShipListing.push(doc.data())
        })
    })
}

}

export default {
    state,
    getters,
    mutations,
    actions
}