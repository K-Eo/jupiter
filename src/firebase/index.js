import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyC2h3pmaOjPFMR7YUi7NDS7DIuM60jbUGM',
  authDomain: 'jupiter-9b937.firebaseapp.com',
  databaseURL: 'https://jupiter-9b937.firebaseio.com',
  projectId: 'jupiter-9b937',
  storageBucket: 'jupiter-9b937.appspot.com',
  messagingSenderId: '715449895595',
}

firebase.initializeApp(config)

export const db = firebase.database()

export const uiConfig = {
  callbacks: { signInSuccessWithAuthResult: () => false },
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

export default firebase
