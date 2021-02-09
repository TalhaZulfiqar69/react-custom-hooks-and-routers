const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')({ origin: true })

admin.initializeApp(functions.config().firebase)

const app = express()
const router = require('express').Router()
const main = express()
const db = admin.firestore()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

exports.api = functions.https.onRequest(router)

router.get('/first-route', (req, res) => {
    console.log('This is first firebase express route implementation example')
    res.send('This is first firebase express route implementation example')
})

router.get('/second-route', (req, res) => {
    console.log('This is second firebase express route implementation example')
    res.send('This is second firebase express route implementation example')
})

router.get('/third-route', (req, res) => {
    console.log('This is third firebase express route implementation example')
    res.send('This is third firebase express route implementation example')
})

router.get('/fourth-route', (req, res) => {
    console.log('This is fourth firebase express route implementation example')
    res.send('This is fourth firebase express route implementation example')
})

router.get('/fifth-route', (req, res) => {
    console.log('This is fifth firebase express route implementation example')
    res.send('This is fifth firebase express route implementation example')
})

// exports.addNewUserData = functions.https.document('users').onCreate((req, res) => {
// cors(req, res, () => {
//     functions.logger.info('createUser logs!', { structuredData: true })
//     const { first_name, last_name } = req.body
//     console.log('first_name', first_name)
//     console.log('last_name', last_name)
//     console.log('Full name', first_name + ' ' + last_name)
//     res.send(first_name + ' ' + last_name)
// })
// })
exports.createUser = functions.firestore.document('/users/{userId}').onCreate((data, context) => {
    functions.logger.info('createUser logs!', { structuredData: true })
    const userId = context.params.userId
    console.log('The value of userId', userId)
})
