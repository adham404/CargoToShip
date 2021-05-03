const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
exports.Customer = require("./Stripe/Customer")
exports.Session = require("./Stripe/Session")
exports.Cards = require("./Stripe/Cards")
exports.payment = require("./Stripe/Payment")
exports.NEWUSer = require("./auth/newuser")
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
