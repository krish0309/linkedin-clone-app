import { initializeApp } from 'firebase/app';
 import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import "firebase/auth"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOtGs_25dPlkFbWkoLG6F9tUlutZoj0XA",
  authDomain: "linkedin-clone-e8289.firebaseapp.com",
  projectId: "linkedin-clone-e8289",
  storageBucket: "linkedin-clone-e8289.appspot.com",
  messagingSenderId: "941827310648",
  appId: "1:941827310648:web:7de7b6e7815812b3e312cd"
 };

 const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
 const auth = getAuth(firebaseApp);

 export { auth,firebaseApp };

