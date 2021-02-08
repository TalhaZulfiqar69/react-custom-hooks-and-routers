const functions = require('firebase-functions')
const firebase = require('firebase-admin')

// http://localhost:5001/training-project-be1c1/us-central1/helloWorld

exports.getFirstAndLastName = functions.https.onRequest((request, response) => {
    functions.logger.info('getFirstAndLastName logs!', { structuredData: true })

    const { firstName, lastName } = request.body
    console.log('firstName', firstName)
    console.log('lastName', lastName)
    console.log('Full Name', firstName + ' ' + lastName)
    response.send('Firebase helloWorld Function')
})

// exports.byeWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Bye logs!", {structuredData: true});
//     response.send("Bye from Firebase!");
//   });
