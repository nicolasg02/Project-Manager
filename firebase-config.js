// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'project-manager-60cfe.firebaseapp.com',
  projectId: 'project-manager-60cfe',
  storageBucket: 'project-manager-60cfe.appspot.com',
  messagingSenderId: '10760229753',
  appId: '1:10760229753:web:5df49c191a928b5d8955a8',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
