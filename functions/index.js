const functions = require('firebase-functions')
const firebase = require('firebase-admin')
const firebaseConfig = require('../firebaseConfigurations.json')

// const Axios = require('axios')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    //   functions.logger.info("Hello logs!", {structuredData: true});

    response.send('Firebase helloWorld Function')
})

// exports.byeWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Bye logs!", {structuredData: true});
//     response.send("Bye from Firebase!");
//   });
