// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'quillpages-1e457.firebaseapp.com',
  projectId: 'quillpages-1e457',
  storageBucket: 'quillpages-1e457.appspot.com',
  messagingSenderId: '753417602542',
  appId: '1:753417602542:web:108659f27ae97bc4e0faff',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
