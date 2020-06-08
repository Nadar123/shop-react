import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAdGRgn2bOhQ5Di4jdszPKeVT3wyy6q_cw",
  authDomain: "the-online-shop-fd713.firebaseapp.com",
  databaseURL: "https://the-online-shop-fd713.firebaseio.com",
  projectId: "the-online-shop-fd713",
  storageBucket: "the-online-shop-fd713.appspot.com",
  messagingSenderId: "708136868591",
  appId: "1:708136868591:web:20cc8824f919271ac1191a",
  measurementId: "G-J51J2RC3S6"
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

