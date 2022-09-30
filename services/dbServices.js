import { collection, addDoc, getDocs ,query,limit} from "firebase/firestore"; 
import { storage,db,app } from '../firebase';
import {FacebookAuthProvider,signInWithPopup, signInWithCredential, getAuth, onAuthStateChanged, signOut} from "firebase/auth";
// add a new discussion to the database
export async function  addDiscussions(itemToAdd)
    {   
       await addDoc(collection(db, "discussions"),itemToAdd);
  }

  
  // get all the data from the database firebase
  export async function getDb()
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  return querySnapshot;
 
}
// get limited data from the database firebase
export async function getLimitedDb(counter)
{
  const citiesRef = collection(db, "discussions");

  const q =  query(citiesRef, limit(counter));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
 
}

