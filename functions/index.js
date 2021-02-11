const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')({ origin: true })

admin.initializeApp(functions.config().firebase)

const app = express()
const db = admin.firestore()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const router = require('express').Router()

exports.api = functions.https.onCall(router)

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

router.post('/addUser', async (req, res) => {
    const { firstName, lastName } = req.body

    try {
        const myData = await db.collection('users').add({
            firstName,
            lastName,
        })
        return res.send(myData.data())
    } catch (error) {
        return res.send(error)
    }
})

// Triggers
exports.createUser = functions.firestore.document('users/{userId}').onCreate((data, context) => {
    functions.logger.info('createUser logs!', { structuredData: true })
    return console.log('User is created', data.data())
})

exports.deleteUser = functions.firestore.document('/users/{userId}').onDelete((data, context) => {
    functions.logger.info('createUser logs!', { structuredData: true })
    return console.log('User is deleted')
})
