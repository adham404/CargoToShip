import Firebase from "firebase"

const state = {
    MyShips : {},

}

const getters = {

}

const mutations = {

}

const actions = {
    async GetMyShips({state}){
        await Firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
            const ShipsQuery = await Firebase.firestore().collection("Ships").where("UserID","==",user.uid).get()
            console.log(ShipsQuery.docs)
            state.MyShips = await ShipsQuery.docs
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