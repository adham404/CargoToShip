import Firebase from "firebase"
/*
Username
Email address
Date created 
Password change 
Total number of orders
Phone number
Social login links
Company website

*/
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