import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCTrUez6GSaM8TE1McDvpYkmEoGJko8lRM",
    authDomain: "changemymindapp-a0945.firebaseapp.com",
    projectId: "changemymindapp-a0945",
    storageBucket: "changemymindapp-a0945.appspot.com",
    messagingSenderId: "208593947790",
    appId: "1:208593947790:web:867a3b5c8376a138664ddf",
    measurementId: "G-CBE8JYCCBQ"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app)
  