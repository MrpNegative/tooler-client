
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig  = {
  apiKey: "AIzaSyClBBbtIJMBH4zZmDSGD5zqGCDcnlzF-BM",
  authDomain: "assignment12-aaae1.firebaseapp.com",
  projectId: "assignment12-aaae1",
  storageBucket: "assignment12-aaae1.appspot.com",
  messagingSenderId: "365542945409",
  appId: "1:365542945409:web:2c0d44fe4924c5b6fe5380"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;