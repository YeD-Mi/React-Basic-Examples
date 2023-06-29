import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnJpPnzSKUkng6EBCamRu0cH-Ij2azGEk",
  authDomain: "project-management-22705.firebaseapp.com",
  projectId: "project-management-22705",
  storageBucket: "project-management-22705.appspot.com",
  messagingSenderId: "234327680916",
  appId: "1:234327680916:web:2c0884a7e9f72310a29181"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);