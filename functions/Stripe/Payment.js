const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_51IXoICJeByZuBuxO4F0Iaeo34VusE93uZo4Akw5jL0e7nM28MTcF7ohVK6sTgCOjzD8YHUjLVc0skWCLGLhufutk00hujjYcas');
exports.CreatePyment = functions.https.onCall(async (data,context)=>{
    
    
    var customer = await admin.firestore().collection('Users').doc(context.auth.uid).get();
    //var customer = await admin.firestore().collection('Users').doc("r7DhHLKQIDmgKN07wEH8").get();
    var customerid = await customer.data().customer_id
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method : data.CardId,
        confirmation_method : 'automatic',
        capture_method: 'manual',
        customer: customerid,
      });
      console.log(paymentIntent)
      let paymentIntentconfirm
      if (paymentIntent.status=="requires_confirmation"){
         paymentIntentconfirm = await stripe.paymentIntents.confirm(
            paymentIntent.id
          );
      }
      if(paymentIntentconfirm.status =="requires_capture" ||paymentIntent.status=="requires_capture" ){
        admin.firestore().collection("orders").doc().set({
            //userId: context.auth.uid , 
            userId: context.auth.uid , 
            type : data.Itype,
            Productid : data.ItemId ,
            paymentIntentId : paymentIntent.id,
            status : "requires_owner_confirmation" ,
            order_created : admin.firestore.FieldValue.serverTimestamp(),
        })

        return [paymentIntent,paymentIntentconfirm]
      }else{
          return "error"
      }
      
})
exports.Confirm_order = functions.https.onCall(async(data,context)=>{
  //console.log(await GetOrderData("WCK1Af22VCw0AgT6VyeQ"))
  order = await admin.firestore().collection("orders").doc(data.orderId).get()
  paymentID = order.data().paymentIntentId
  const intent = await stripe.paymentIntents.capture(paymentID, {
    // amount_to_capture: 500,
  })
  //status: "succeeded"
  if (intent.status == "succeeded"){
    const {ContactInfo,Name} =await  GetOrderData(data.orderId)
    await admin.firestore().collection("orders").doc(data.orderId).update({status : "Confirmed" , order_confirmed : admin.firestore.FieldValue.serverTimestamp(),Name,ContactInfo })
    return "OK"
  }else{
    await admin.firestore().collection("orders").doc(data.orderId).update({status : "payment_error"})
    return "error"
  }

})

exports.ConfirmPyment = functions.https.onCall(async(data,context)=>{
    
    
    const intent = await stripe.paymentIntents.capture(data.paymentIntentID, {
        // amount_to_capture: 500,
      })
      return intent
})

GetOrderData = async(Order_id)=> {
  OrderDoc = await admin.firestore().collection("orders").doc(Order_id).get()
  const {type , Productid}  = await OrderDoc.data()
  //console.log(Productid)
  if(type == "ship"){
    ShipDoc = await admin.firestore().collection("Ships").doc(Productid).get()
    const {ContactInfo , ShipName} =await ShipDoc.data()
    //console.log(await ContactInfo)
    return await{ ContactInfo,Name: ShipName}
  
  }
  else if(type == "cargo"){
    ShipDoc = await admin.firestore().collection("Cargo").doc(Productid).get()
    const {ContactInfo , CargoDescription} =await ShipDoc.data()

    return {ContactInfo ,Name: CargoDescription}
  }
}

