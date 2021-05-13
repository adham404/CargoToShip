const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_51IXoICJeByZuBuxO4F0Iaeo34VusE93uZo4Akw5jL0e7nM28MTcF7ohVK6sTgCOjzD8YHUjLVc0skWCLGLhufutk00hujjYcas');
exports.GetCards = functions.https.onCall(async (data,context)=>{
    
    let CardsData = [] ;
    console.log(context.auth.uid)
    var customer = await admin.firestore().collection('Users').doc(context.auth.uid).get();
    //var customer = await admin.firestore().collection('Users').doc("r7DhHLKQIDmgKN07wEH8").get();
    console.log(customer.data())
    var customerid = await customer.data().customer_id
    
    const paymentMethods = await stripe.paymentMethods.list({
        customer: customerid,
        type: 'card',
      });
    //console.log(paymentMethods.data)

    paymentMethods.data.forEach( (value)=>{
         let cardDATA = {
            id : value.id ,
            brand : value.card.brand,
            exp_month : value.card.exp_month,
            exp_year : value.card.exp_year,
            last4 : value.card.last4 ,
        }
        CardsData.push(cardDATA)
    })
    console.log(CardsData)
    // for( i in paymentMethods.data ){
    //     console.log( i )
   
    return paymentMethods.data
})

exports.DeletCards = functions.https.onCall(async (data,context)=>{
     await stripe.paymentMethods.detach(
        data.cardId
      );
})