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

export const CreateUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const userSnapshot = await userRef.get()

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log(`Error creating user: ${error}`)
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
