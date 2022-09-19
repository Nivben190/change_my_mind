import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { storage,db,app } from '../firebase';

export async function  addDiscussions(itemToAdd)
    {   
       await addDoc(collection(db, "discussions"),itemToAdd);
  }
  export async function getDb()
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  return querySnapshot;
  // querySnapshot.forEach((doc) => {
  //   alert(JSON.stringify(doc.data()));
  // });
}