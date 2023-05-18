import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGEM6_ALtr0veb0UPUFaHzn1ocaKh40kk",
  authDomain: "boreal-card-387104.firebaseapp.com",
  projectId: "boreal-card-387104",
  storageBucket: "boreal-card-387104.appspot.com",
  messagingSenderId: "549391576004",
  appId: "1:549391576004:web:dd621111090d3e6772d291",
  measurementId: "G-93K14R5ZRS"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
