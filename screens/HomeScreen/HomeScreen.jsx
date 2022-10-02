import React, { useEffect, useState } from 'react';
import { View, Text ,TextInput,Button} from 'react-native';
import { addLikeToDiscussion, addUnlikeToDiscussion, getLengthOfDiscussions, getLimitedDb, getNumberOfDiscussionsByUser } from '../../services/dbServices';
import ArguementComponent from '../components/ArguementComponent';
import {styles} from "./Style"
import { FlatList } from 'react-native';
import Modal from "react-native-modal";

import { useIsFocused } from "@react-navigation/native"; 
const HomeScreen = ({navigation}) => {
  const[counter,setCounter]=useState(2);
   const [arguement,setArguement]=useState([]);
   const [isModalVisible, setIsModalVisible] = useState(false);

   const [comment, setComment] = useState("");
   const handleModal = () =>  setIsModalVisible(() => !isModalVisible);
 
   function addComment()
   {
     addCommentToDiscussion(argue.arguement.id,comment);
     handleModal();
     navigation.navigate("Home");
     
   }
   async function fetchDb()
      {
        try {
          const dbFromFireBase= await getLimitedDb(counter);
          const ArrayFromDbFromFireBase= dbFromFireBase.docs.map((doc) =>doc.data());  
          setArguement(ArrayFromDbFromFireBase);     
        } catch (error) {
           alert(error.message);
        }      
      }
      // use effect to get db from firebase
    useEffect(() => 
    { 
       fetchDb(); 
    },);

  // urls for backround image based on category
     const urls=
     {
      "Computers":require("../../assets/Computers.png"),
      "Animals":require("../../assets/Animals.png"),
      "Art":require("../../assets/Art.png"),
      "Sports":require("../../assets/Sports.png"),
      "Gaming":require("../../assets/Gaming.png"),
      "Movies":require("../../assets/Movies.png"),
      "Music":require("../../assets/Music.png"),
     }
  return (
    <View >
    <Text style={styles.Header}> Feed </Text>
   
      <FlatList 
      data={arguement}
      renderItem={({item,index}) => <ArguementComponent
        key={index} 
        navigation={navigation} 
        argue={item}
        id={item.id}
        likeArgue={()=>addLikeToDiscussion(item.id)}
        unlikeArgue={()=>addUnlikeToDiscussion(item.id)}
        image={urls.hasOwnProperty(item.category)?urls[item.category]:urls[item.category]}
      />}
      keyExtractor={(item,index) => index.toString()}
      onScrollEndDrag={()=>{setCounter(counter+1);fetchDb();}}
    />
  </View>
  )
}





export default HomeScreen;
