import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
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
export const firestore = getFirestore(app);