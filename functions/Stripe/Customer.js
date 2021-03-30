const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_51IXoICJeByZuBuxO4F0Iaeo34VusE93uZo4Akw5jL0e7nM28MTcF7ohVK6sTgCOjzD8YHUjLVc0skWCLGLhufutk00hujjYcas');


exports.NewcreateStripeCustomer = functions.firestore.document("Users/{id}").onCreate(async (snap,context) =>{
    const customer = await stripe.customers.create({ 
        email: snap.data().Email ,
        metadata: {
            "UserId" : snap.data().UserId
        },
    });
    
    
    
    return snap.ref.set({
        customer_id :customer.id,
      }, {merge: true});
});
exports.deleteStripeCustomer = functions.auth.user().onDelete( async (user) => {
    var customer = await admin.firestore().collection('Users').doc(user.uid).get()
    await stripe.customers.del(customer.val().customer_id);
});