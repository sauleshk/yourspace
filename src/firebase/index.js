import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR_QWU2GZhcU4pVUXZJC5jZXNprbwUNNE",
  authDomain: "hakaton-cc8f1.firebaseapp.com",
  projectId: "hakaton-cc8f1",
  storageBucket: "hakaton-cc8f1.appspot.com",
  messagingSenderId: "52310040927",
  appId: "1:52310040927:web:b3bc4c35749b94f42d16ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);