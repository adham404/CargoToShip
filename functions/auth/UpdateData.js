const functions = require('firebase-functions');
const admin = require('firebase-admin');


exports.UpdateUserData = functions.https.onCall(async (data,context)=>{
    
      console.log(context.auth.uid)    
      console.log(data.NewDate)    
    try{
        const userRecord = await admin.auth().updateUser(context.auth.uid, data.NewDate)
       
         // See the UserRecord reference doc for the contents of userRecord.
         console.log('Successfully updated user', userRecord.toJSON());
         return "ok"
    }catch(error){

        //console.log('Error updating user:', error);
        throw new functions.https.HttpsError('invalid-argument', ' ' +
        error.errorInfo.message);
    }
  
  
      
  
} )



// const listAllUsers = admin.auth().getUser("xSn13EI5P5HjoxSy2PZwAkey5Jd3").then((userRecord) => {
//   // See the UserRecord reference doc for the contents of userRecord.
//   console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
// })
// .catch((error) => {
//   console.log('Error fetching user data:', error);
// });
  // Start listing users from the beginning, 1000 at a time.
 //listAllUsers();