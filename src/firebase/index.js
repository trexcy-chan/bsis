import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvKTY-e842CQZPrw4KGqi0dzTehiCG_4E",
  authDomain: "bcis-44d27.firebaseapp.com",
  projectId: "bcis-44d27",
  storageBucket: "bcis-44d27.appspot.com",
  messagingSenderId: "831399351799",
  appId: "1:831399351799:web:905ede291a95164b958af2",
  measurementId: "G-RMF7Z1DL70"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const db = getFirestore(app);
const residentsColRef = collection(db, 'residents');
const clearanceColRef = collection(db, 'Clearance Requests');
const indigencyColRef = collection(db, 'Indigency Requests');
const residencyColRef = collection(db, 'Residency Requests');
const permitColRef = collection(db, 'Permit Requests');
const releasedColRef = collection(db, 'Released Requests');
const resident_adminColRef = collection(db, 'Residents Admin');
const AdminColRef = collection(db, 'Admin');

export { auth,residentsColRef,clearanceColRef,permitColRef,resident_adminColRef,releasedColRef, app,AdminColRef,db,
        indigencyColRef, residencyColRef}