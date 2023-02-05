import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAHBBx5buvkempJoiAXQZBGwVAAOYZH3cw",
  authDomain: "itzwebapp.firebaseapp.com",
  projectId: "itzwebapp",
  storageBucket: "itzwebapp.appspot.com",
  messagingSenderId: "368927960084",
  appId: "1:368927960084:web:79e207d2bbe32ad0784b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
