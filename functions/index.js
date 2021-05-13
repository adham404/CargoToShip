const functions = require("firebase-functions");
const admin = require('firebase-admin');
//admin.initializeApp();
process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:7000';
process.env['FIREBASE_AUTH_EMULATOR_HOST'] = 'localhost:9099';
admin.initializeApp({});


exports.Customer = require("./Stripe/Customer")
exports.Session = require("./Stripe/Session")
exports.Cards = require("./Stripe/Cards")
exports.payment = require("./Stripe/Payment")
exports.update = require("./auth/UpdateData")
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
