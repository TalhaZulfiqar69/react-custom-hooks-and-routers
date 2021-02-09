const functions = require('firebase-functions')
const firebase = require('firebase-admin')
const cors = require('cors')({ origin: true })

// http://localhost:5001/training-project-be1c1/us-central1/helloWorld

exports.getFirstAndLastName = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        functions.logger.info('getFirstAndLastName logs!', { structuredData: true })

        console.log('req.body', req.body)
        const { fName, lName } = req.body
        console.log('fName', fName)
        console.log('lName', lName)
        console.log('Full Name', fName + ' ' + lName)
        res.send('Firebase helloWorld Function')
        // res.send('Passed.')
    })
})

// exports.byeWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Bye logs!", {structuredData: true});
//     response.send("Bye from Firebase!");
//   });

// difference between express router and
// cloudfunctuons routers
