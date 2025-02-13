// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore"; 

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr9uQA02wIfxZfw2k5ZyCQh2QlKMW_kC8",
  authDomain: "todo-60899.firebaseapp.com",
  projectId: "todo-60899",
  storageBucket: "todo-60899.appspot.com", 
  messagingSenderId: "371108934726",
  appId: "1:371108934726:web:72dd2458a76220f9aec647",
  measurementId: "G-5X6E7GNMDM"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const tasksCollection = collection(db, "tasks");


export { db, tasksCollection, addDoc, getDocs, deleteDoc, doc, onSnapshot };
