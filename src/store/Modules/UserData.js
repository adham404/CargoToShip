import Firebase from "firebase"

const state = {
    Data : {},

}

const getters = {
    UserData : state => state.Data ,
}

const mutations = {

}

const actions = {
    async GETUserData({  state}){
       let firebase_user_data =  await Firebase.firestore().collection("Users").doc("AA").get() ;
       state.Data = await firebase_user_data.data()
    }

}

export default {
    state,
    getters,
    actions,
    mutations,
}