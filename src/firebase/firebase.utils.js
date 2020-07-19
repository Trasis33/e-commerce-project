import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAk1p4EwUWDoYCGmSTF9JwdgtSOLFHDsxM',
  authDomain: 'e-commercedb-77dfb.firebaseapp.com',
  databaseURL: 'https://e-commercedb-77dfb.firebaseio.com',
  projectId: 'e-commercedb-77dfb',
  storageBucket: 'e-commercedb-77dfb.appspot.com',
  messagingSenderId: '741591262049',
  appId: '1:741591262049:web:d6cd3b87a1b388babcdb20',
  measurementId: 'G-PKCKJWJZ5B',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
