import { collection, addDoc, getDocs ,query,limit} from "firebase/firestore"; 
import { db } from '../firebase';
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

//get the number of discussions that user uploaded 
export async function getNumberOfDiscussionsByUser(userId)
{

  const querySnapshot = await getDocs(collection(db, "discussions"));
  let counter=0;
  querySnapshot.forEach((doc) => {
    // alert(JSON.stringify(doc.data().uplodedById));
    if(doc.data().uplodedById==userId)
    {
     counter++;
    }
  });
  return counter.valueOf();
}
//get number of likes the user got 
export async function getNumberOfLikesByUser(userId)
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  let counter=0;
  querySnapshot.forEach((doc) => {
    if(doc.data().uplodedById==userId)
    {
       counter+=doc.data().numberOfLikes;
    
    }
  });
  return counter.valueOf();
}
 // get number of unlikes the user got
  export async function getNumberOfUnlikesByUser(userId)
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  let counter=0;
  querySnapshot.forEach((doc) => {
    if(doc.data().uplodedById==userId)
    {
       counter+=doc.data().numberOfUnliked;

    }
  });
  return counter.valueOf();
}


