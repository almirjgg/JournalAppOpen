// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfV56mGaj1BAdWor-ZQy6UyqO-sIoGTJU',
  authDomain: 'journalapp-6a8ac.firebaseapp.com',
  projectId: 'journalapp-6a8ac',
  storageBucket: 'journalapp-6a8ac.appspot.com',
  messagingSenderId: '248377267061',
  appId: '1:248377267061:web:fd7d07a64375df7bf9793c',
  measurementId: 'G-N8YQ75GD6X',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(Firebaseapp);
