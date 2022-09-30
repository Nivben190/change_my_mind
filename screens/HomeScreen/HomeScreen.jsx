import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getDb, getLimitedDb } from '../../services/dbServices';
import ArguementComponent from '../components/ArguementComponent';
import {styles} from "./Style"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';
import { getCurrentUser, loggingOut } from '../../apo/authFuncs';
import { FlatList } from 'react-native';
const HomeScreen = ({navigation}) => {
 
  const [data, setData] = useState([]);
  const[counter,setCounter]=useState(2);
   const [arguement,setArguement]=useState([]);
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
      //refactoring use effect
    useEffect(() => 
    { 
      fetchDb();      
    },[]);
    

  return (
    <View >
    <Text style={styles.Header}> Feed </Text>
      <FlatList 
      data={arguement}
      renderItem={({item,index}) => <ArguementComponent
        key={index} 
        navigation={navigation} 
       argue={item}
        id={index}
         image={item.image}
      />}
      keyExtractor={(item,index) => index.toString()}
      onScrollEndDrag={()=>{setCounter(counter+1);fetchDb();}}

     
    

      />
     {/* {arguement.map((arg,index) => <ArguementComponent
     key={index} 
     navigation={navigation} 
     argue={arg}
     id={index}
     image={arg.image}
    
     />)} */}
  

  </View>
  )
}





export default HomeScreen;
