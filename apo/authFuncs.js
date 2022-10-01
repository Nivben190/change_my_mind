// import * as firebase from "firebase";
import {getAuth,updateProfile, createUserWithEmailAndPassword ,signOut,signInWithEmailAndPassword} from "firebase/auth";
import "firebase/firestore";
import { setDoc } from "firebase/firestore";
export async function registration(name,email, password,navigation) {
    const auth = getAuth();
    
     createUserWithEmailAndPassword(auth, email, password)
     .then( (userCredential) => {
       const user = userCredential.user;      
      updateProfile(auth.currentUser, {
        displayName:name,
      })      
    
      navigation.navigate("Home")


     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorCode);
     
     });
 
}
//edit profile 
export async function updateProfileFunc(displayName, photoURL,phoneNumber, navigation) {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: displayName ? displayName:auth.currentUser.displayName,
        photoURL: photoURL ? photoURL:auth.currentUser.photoURL,
        phoneNumber:phoneNumber ? phoneNumber:auth.currentUser.phoneNumber,
    }).then(() => {
      navigation.navigate('Profile');
      
    }).catch((error) => {
        alert(error);
    });
}

export async function signIn(email, password,navigation) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
         navigation.navigate("Home")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)

      });
}

export async function loggingOut(navigaqtion) {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigaqtion.navigate("Home")
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
