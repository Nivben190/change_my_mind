// import * as firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword ,signOut,signInWithEmailAndPassword} from "firebase/auth";
import "firebase/firestore";
import { db } from "../firebase";
import {Alert} from "react-native";

export async function registration(email, password) {
    const auth = getAuth();

     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
    
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorCode);
     
     });
 
}

export async function signIn(email, password) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
       
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)

      });
}

export async function loggingOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
}
export function getCurrentUser() {
  const auth = getAuth();
  const user = auth.currentUser;
  return user;

}
