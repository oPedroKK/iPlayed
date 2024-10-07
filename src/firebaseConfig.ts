import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAatkET13i6Uo6VX5n0JdtpeyqO51zuigU",
  authDomain: "gameinfos-939e6.firebaseapp.com",
  projectId: "gameinfos-939e6",
  storageBucket: "gameinfos-939e6.appspot.com",
  messagingSenderId: "664760822607",
  appId: "1:664760822607:web:80a7ffc8e6f99c4543733a",
  measurementId: "G-2QC57RCQFS"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);