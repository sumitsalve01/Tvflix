
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALldTN6adSXMGJVmNJFFBKGCF_etzRayQ",
  authDomain: "react-netflix-clone1-67237.firebaseapp.com",
  projectId: "react-netflix-clone1-67237",
  storageBucket: "react-netflix-clone1-67237.appspot.com",
  messagingSenderId: "895345728681",
  appId: "1:895345728681:web:51e92a95e7f8200bb31db8",
  measurementId: "G-GPYCXMVRS7"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth (app);
