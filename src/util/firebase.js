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

// export const auth = firebase.auth()
// export const funcs = firebase.functions()
// export const firesotre = firebase.firestore()
// // export const storage = firebase.storage()

// if(window.location.host.link('localhost')) {
//   auth.useEmulator('http://localhost:9099');
//   firesotre.useEmulator('localhost', 5002);
//   // storage.useEmulator('localhost', 9000);
//   funcs.useEmulator('localhost', 5001);
// }
export { firebase, db, firebaseConfig }
