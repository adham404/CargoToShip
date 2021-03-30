const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_51IXoICJeByZuBuxO4F0Iaeo34VusE93uZo4Akw5jL0e7nM28MTcF7ohVK6sTgCOjzD8YHUjLVc0skWCLGLhufutk00hujjYcas');
exports.createcheckout = functions.https.onCall(async (data,context)=>{
    
    
    //var customer = await admin.firestore().collection('Users').doc(context.auth.uid).get();
    var customer = await admin.firestore().collection('Users').doc("r7DhHLKQIDmgKN07wEH8").get();
    var customerid = await customer.data().customer_id
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: customerid ,
      
        mode: 'setup',
        success_url: `${data.url}/Success`,
        cancel_url: `${data.url}/Cancel`,
      });
    
    return session.id
})