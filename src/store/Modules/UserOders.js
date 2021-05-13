import firebase from "firebase"


const state = {
    UserOrders : {}

}

const getters = {

}

const mutations = {

}

const actions = {
    async GetUserOrders({state}){
        await firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                console.log(user.uid)
                const Orders =  await firebase.firestore().collection("orders").where("userId", "==", user.uid).where("status","==","Confirmed").get()
                console.log(await Orders.docs)
                state.UserOrders = await Orders.docs
                
            }
        })
    }

}

export default {
    state,
    getters,
    actions,
    mutations,
}