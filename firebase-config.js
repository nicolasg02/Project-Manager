// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'project-manager-f6dc7.firebaseapp.com',
  projectId: 'project-manager-f6dc7',
  storageBucket: 'project-manager-f6dc7.appspot.com',
  messagingSenderId: '445619031026',
  appId: '1:445619031026:web:56386b441fc077502db96b',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
