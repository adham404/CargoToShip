const functions = require('firebase-functions');
const admin = require('firebase-admin');
exports.NewcreateUser1 = functions.auth.user().onCreate(async (user) =>{
    const customer = await admin.firestore().collection('Users').doc(user.uid).set({ 
        email: user.email ,
        metadata: {
            "UserId" : user.uid
        },
    });

})