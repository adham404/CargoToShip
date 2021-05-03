import firebase from "firebase"

const state = {
    UserData:"",
    IsUserIn:null,
    PreUserData:"",
    UserId:""
}

const getters = {
    GetAuthState: state => state.IsUserIn, 
    GetUserData: state => state.UserData
}

const mutations = {
    SetAuthState(state,x)
    {
        state.IsUserIn = x;
    },
    SetUserDataToSignUp(state,data)
    {
        state.PreUserData = data;
    },
    SetCurrentUserData(state,x)
    {
        state.UserData = x;
    },
    SetUserCurrentID(state,id)
    {
        state.UserId = id;
    }

}

const actions = {
    async CheckAuth({commit})
    {
        const auth = firebase.auth()
        await auth.onAuthStateChanged(async (user) => {
            if(user)
            {
                await commit('SetAuthState',true)
                await commit('SetUserCurrentID',user.uid)
            }
            else {
                commit('SetAuthState',false)
            }
        })
    },
    async FetchCurrentUserData({commit,state})
    {
        alert("FetchCurrentUserData"+state.UserId)
        var db = firebase.firestore()
        const doc = await db.collection("Users").doc(state.UserId).get()
        alert("Hey Username from fetching here is: " + doc.data());
        commit('SetCurrentUserData',doc.data())
        
    },
    async CreateUserDoc({state})
    {
        // alert("Recieved form here the id: "+ x.Uid);
        var db = firebase.firestore()
        //Check If User Is logged in or not
        var auth = firebase.auth()
        console.log("ppopoppop")
        await auth.onAuthStateChanged(async (user) => {
            console.log(user)
            if(user)
            {
                
                 alert("Recieved form here the email123456: "+ state.PreUserData.FirstName);
                //User Is Logged in create it's doc
                var UserObj = {
                    UserID: user.uid,
                    Name: state.PreUserData.FirstName + " " + state.PreUserData.LastName,
                    Email: state.PreUserData.Email,
                    NumOfOrders: 0,
                    PhoneNumber: "",
                    CompanyWebsite: ""
                }

                const vv = await db.collection("Users").doc(user.uid).set(UserObj)
                console.log("pp", vv)
            }
            else
            {
                //User Is Not Logged in Don't Create it's doc
            }
        })
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}