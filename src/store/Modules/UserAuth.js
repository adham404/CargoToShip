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
        var db = firebase.firestore()
        await db.collection("Users").doc(state.UserId).get().then((doc) => {
            // alert("Hey Username from fetching here is: " + doc.data().Name);
            commit('SetCurrentUserData',doc.data())
        })
    },
    async CreateUserDoc({state})
    {
        // alert("Recieved form here the id: "+ x.Uid);
        var db = firebase.firestore()
        //Check If User Is logged in or not
        var auth = firebase.auth()
        await auth.onAuthStateChanged((user) => {
            if(user)
            {
                
                 alert("Recieved form here the email: "+ state.PreUserData.FirstName);
                //User Is Logged in create it's doc
                var UserObj = {
                    UserID: user.uid,
                    Name: state.PreUserData.FirstName + " " + state.PreUserData.LastName,
                    Email: state.PreUserData.Email,
                    NumOfOrders: 0,
                    PhoneNumber: "",
                    CompanyWebsite: ""
                }

                db.collection("Users").doc(user.uid).set(UserObj)
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