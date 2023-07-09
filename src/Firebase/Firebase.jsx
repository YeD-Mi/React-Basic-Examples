import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {GoogleAuthProvider, getAuth,signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAr5kjZbEU1NTGsJycp3Pjj_i58awwe53Q",
  authDomain: "project-1970541724823148137.firebaseapp.com",
  projectId: "project-1970541724823148137",
  storageBucket: "project-1970541724823148137.appspot.com",
  messagingSenderId: "683855964146",
  appId: "1:683855964146:web:b4adbf18f637f52231ad6b",
  measurementId: "G-B5E91JQBYQ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth,provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const userPic = result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("userPic",userPic);
    
    console.log(result)
  }).catch((error) => {console.log(error)});
}