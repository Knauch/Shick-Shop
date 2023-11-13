import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA-9Zei9LnVjGaCTa_8cpImcs-12Zji_Kw",
    authDomain: "shick-shop-db.firebaseapp.com",
    projectId: "shick-shop-db",
    storageBucket: "shick-shop-db.appspot.com",
    messagingSenderId: "1071714526954",
    appId: "1:1071714526954:web:762d41054ba64173c95993"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})
//seting the auth
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

//seting the DB
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

    if(!userAuth) return; 
    
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log('userDocRef', userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log('userSnapshot', userSnapshot)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch(err) {
            console.log('error creating the user', err.message)
        }

    }
    return userDocRef

}

//making function to autentificate the user so it will have asign pas and stuf
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    //condition that when we dont have it the auth stops
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    //condition that when we dont have it the auth stops
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)

}