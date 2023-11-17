// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9peWHRbywvbbJ4lqy8ZQ85PxrmQHj-ng",
  authDomain: "codecademy-a8f06.firebaseapp.com",
  projectId: "codecademy-a8f06",
  storageBucket: "codecademy-a8f06.appspot.com",
  messagingSenderId: "483526946095",
  appId: "1:483526946095:web:c235ee29f8750f1db445da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;