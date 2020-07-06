import firebase from "firebase";
let email = '';
let password = ''
function signupnewuser(){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
       console.log(error);
        // ...
    });
    alert('signup done sucssful');
};

function signinnewuser(){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
    });
    alert('signin done sucssful');
}

function getuserdata(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           console.log(user)
        } else {
            // User is signed out.
            // ...
            console.log('please signin first')
        }
    });
}
function signout(){
    let user = firebase.auth().currentUser ;
    if (user){
        firebase.auth().signOut().then(function(){
            console.log('sign out successful');
        }).catch(function(error) {
           console.log(error)
        });
    }
}



