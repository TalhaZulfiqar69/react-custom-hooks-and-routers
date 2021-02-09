const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')({ origin: true })

admin.initializeApp(functions.config().firebase)

const app = express()
const main = express()
const db = admin.firestore()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

exports.webApi = functions.https.onRequest(app)

app.get('/first-route', (req, res) => {
    console.log('req', req)
    console.log('This is first firebase express route implementation example')
    res.send('This is first firebase express route implementation example')
})

app.get('/second-route', (req, res) => {
    console.log('req', req)
    console.log('This is second firebase express route implementation example')
    res.send('This is second firebase express route implementation example')
})

app.get('/third-route', (req, res) => {
    console.log('req', req)
    console.log('This is third firebase express route implementation example')
    res.send('This is third firebase express route implementation example')
})

app.get('/fourth-route', (req, res) => {
    console.log('req', req)
    console.log('This is fourth firebase express route implementation example')
    res.send('This is fourth firebase express route implementation example')
})

app.get('/fifth-route', (req, res) => {
    console.log('req', req)
    console.log('This is fifth firebase express route implementation example')
    res.send('This is fifth firebase express route implementation example')
})
