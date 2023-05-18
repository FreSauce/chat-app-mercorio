import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ0CXBvfzvtGgfYoaOyMblYUrzBU2_Hw0",
  authDomain: "chat-app-225c7.firebaseapp.com",
  projectId: "chat-app-225c7",
  storageBucket: "chat-app-225c7.appspot.com",
  messagingSenderId: "812026209995",
  appId: "1:812026209995:web:e6b64d66486a2f474f5d4e",
  measurementId: "G-DG1DEC3FHF",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
