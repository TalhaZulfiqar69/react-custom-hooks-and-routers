import firebase from 'firebase'
let firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyC6ZVgvvauakAOmd54NmhHhnjon2uUAGzE',
  authDomain: 'training-project-be1c1.firebaseapp.com',
  // databaseURL: 'https://training-project-be1c1-default-rtdb.firebaseio.com',
  projectId: 'training-project-be1c1',
  storageBucket: 'training-project-be1c1.appspot.com',
  messagingSenderId: '146902802271',
  appId: '1:146902802271:web:9bf5a24572b7e721e7e0ea',
  // measurementId: 'G-XHJXS5HVHX',
})

const db = firebaseConfig.firestore()

export { firebase, db, firebaseConfig }
