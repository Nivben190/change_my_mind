import React,{useEffect, useState} from 'react'
import { View,Text,TextInput,Button} from 'react-native'
import {styles} from "./Style.js"
import SelectDropdown from 'react-native-select-dropdown'
import { categories } from './cateroiesForDropdown.js'
import { addDiscussions } from '../../services/dbServices.js'
import { getCurrentUser } from '../../apo/authFuncs.js'
const AddArgueScreen = () => {
    

    const maxLengthAlowed =150;
    const [ category,setCategory]=useState("");
    const [ title,setTitle]=useState("");
     const [desc,setDesc]=useState("");
    const [numberOfCharacters,setNumberOfCharacters]=useState(0);
     const [user,setUser]=useState({});
   useEffect(() =>{
    const user =getCurrentUser();
    setUser(user);
   },[])
  function addArgueToFireBase()
  {

    // const argueToAdd=
    // {
    //   title:title,
    //   category:category,
    //   description:desc,
    //   uplodedBy:user.uid,
    //   numberOfLikes:0,
    //   numberOfUnliked:0,
    //   uploadDate:new Date(),
    // }
    setTitle("") ; 
    setDesc("") ; 
    // await addDiscussions(argueToAdd);
  }


  return (
   <View style={styles.profileContainer}>
    <Text  style={styles.AddArgueTitle}>Always right? Show Me Here</Text>
     <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Title</Text>
        <TextInput 
         style={styles.InputTitle} 
         value={title}
          onChangeText={(textValue)=>setTitle(textValue)}
         />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Category</Text>
      <View style={styles.SelectDropdown}>
      <SelectDropdown 
      defaultValue={category}
     buttonTextStyle={styles.SelectDropdownTextStyle}
    data={categories}
    onSelect={(selectedItem, index) => {
      setCategory(selectedItem);
    }}
    buttonTextAfterSelection={(selectedItem, index) => {
    
      return selectedItem
    }}
    rowTextForSelection={(item, index) => {
      
      return item
    }}
  />
      </View>       
      </View>
      <View > 
      <Text style={styles.ArgueDesc}>Description</Text>
     
      <TextInput  
    multiline={true}
    value={desc}
    style={styles.InputDescTextAre} 
    maxLength={150}
    numberOfLines={2}
     onChangeText={(text) => {
      setNumberOfCharacters(`${text.length}`);
      setDesc(text);
     }
    }
    // value={this.state.text}
    > 
</TextInput>
    <Text style={styles.numberOfCharacters}>{numberOfCharacters}/{maxLengthAlowed}</Text>
      </View>
      <View style={styles.AddAtrueBtn}>
        <Button onPress={addArgueToFireBase} color="white" title='Add Argue'/>
      </View>
    
      </View>
  )
}

export default AddArgueScreen
