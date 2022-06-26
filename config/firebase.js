import { firebase } from "@firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5neNLU2iaecJJau4QzwoorBvyhHnyK98",
  authDomain: "fir-music-dd964.firebaseapp.com",
  projectId: "fir-music-dd964",
  storageBucket: "fir-music-dd964.appspot.com",
  messagingSenderId: "1017600147737",
  appId: "1:1017600147737:web:8d0163e3f10c60ae9cc588",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;