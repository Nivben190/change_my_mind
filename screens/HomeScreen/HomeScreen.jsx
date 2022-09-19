import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getDb } from '../../services/dbServices';
import ArguementComponent from '../components/ArguementComponent';
import {styles} from "./Style"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';

const HomeScreen = () => {
 
  const [arguement,setArguement]=useState([]);
    useEffect(() => 
    {
      async function fetchDb()
      {
        try {
          const dbFromFireBase= await getDb();
          const ArrayFromDbFromFireBase= dbFromFireBase.docs.map((doc) =>doc.data());  
          setArguement(ArrayFromDbFromFireBase);        
        } catch (error) {
           alert(error.message);
        }      
      }
      fetchDb();
       
    },[]);
    

  return (
    <View >
    <Text style={styles.Header}> Feed </Text>
     {arguement.map((arg,index) => <ArguementComponent
     key={index} 
     title={arg.title}
     category={arg.category}
     />)}
  

  </View>
  )
}





export default HomeScreen;
