import firebase from "firebase"

const state = {
    CargoListing:[],
    ShipListing:[]
}

const getters = {
GetCargoCards: state => state.CargoListing,
GetShipCards: state => state.ShipListing,

}

const mutations = {


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