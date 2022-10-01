import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getLengthOfDiscussions, getLimitedDb, getNumberOfDiscussionsByUser } from '../../services/dbServices';
import ArguementComponent from '../components/ArguementComponent';
import {styles} from "./Style"
import { FlatList } from 'react-native';
const HomeScreen = ({navigation}) => {
 
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
        id={item.id}
         image={item.image}
      />}
      keyExtractor={(item,index) => index.toString()}
      onScrollEndDrag={()=>{setCounter(counter+1);fetchDb();}}
    />
  </View>
  )
}





export default HomeScreen;
