import { collection, addDoc,getDoc,doc, getDocs ,query,limit,updateDoc} from "firebase/firestore"; 
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
//get length of discussions
export async function getLengthOfDiscussions()
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  let counter=0;
  querySnapshot.forEach((doc) => {
    counter++;
  });
  return counter.valueOf();
}
//add like to the discussion
export async function addLikeToDiscussion(discussionId)
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  querySnapshot.forEach((doci) => {
    if(doci.data().id==discussionId)
     {
        updateDoc(doc(db, "discussions", doci.id), {
          numberOfLikes: doci.data().numberOfLikes+1
        });   
     }
  });
  
   

   
}
//add unlike to the discussion
export async function addUnlikeToDiscussion(discussionId)
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  querySnapshot.forEach(async (doci) => {
    if(doci.data().id==discussionId)
    {
      updateDoc(doc(db, "discussions", doci.id), {
        numberOfLiked: doci.data().numberOfUnliked+1
      });   
    }
  });
}
 
//add comment to discussion comments ArrayFromDbFromFireBase
export async function addCommentToDiscussion(discussionId,comment)
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  querySnapshot.forEach((doci) => {
    if(doci.data().id==discussionId)
    {
      updateDoc(doc(db, "discussions", doci.id), {
        comments: doci.data().comments.concat(comment)
      });   
    }
  });
}
//get all comments from discussion comments by id 
export async function getCommentsFromDiscussion(discussionId)
{
  const querySnapshot = await getDocs(collection(db, "discussions"));
  let comments=[];
  querySnapshot.forEach((doci) => {
    if(doci.data().id==discussionId)
    {
      comments=doci.data().comments;
    }
  });
  return comments;
}




