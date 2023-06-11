import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANJb51nWCwGEnydo819NolTR8uWsOstCk",
  authDomain: "mase-jar-website.firebaseapp.com",
  projectId: "mase-jar-website",
  storageBucket: "mase-jar-website.appspot.com",
  messagingSenderId: "766717695392",
  appId: "1:766717695392:web:5f2741d216e81b828380c5",
  measurementId: "G-5H1ZZ0TZH9"
};

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);

// export firebase
export const db = getFirestore(app);