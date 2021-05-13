import Firebase from "firebase"

const state = {
    MyCargo : {},

}

const getters = {

}

const mutations = {

}

const actions = {
    async GetMyCargo({state}){
        await Firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
            const CargoQuery = await Firebase.firestore().collection("Cargo").where("UserID","==",user.uid).get()
            console.log(CargoQuery.docs)
            state.MyCargo = await CargoQuery.docs
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