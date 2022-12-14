import React,{useEffect, useState,} from 'react'
import { View,Text,TextInput,Button,StyleSheet,TouchableOpacity} from 'react-native'
import {styles} from "./Style.js"
import SelectDropdown from 'react-native-select-dropdown'
import { categories } from './cateroiesForDropdown.js'
import { addDiscussions,getLengthOfDiscussions } from '../../services/dbServices.js'
import { getCurrentUser } from '../../apo/authFuncs.js'
import * as ImagePicker from 'expo-image-picker';

const AddArgueScreen = ({navigation}) => {
   

   //arguement state init
    const [arguement,setArguement] = useState({
        id:0,
        title:"",
        description:"",
        category:"",
        user:"",
        date:"",
        image:""
    });
    const maxLengthAlowed =150;
    const [numberOfCharacters,setNumberOfCharacters]=useState(0);
    const [user,setUser]=useState({});

   useEffect(() =>{
    const user =getCurrentUser();
    setUser(user);
   },[])

   function resetArgueInputs() {
    setArguement({
        title:"",
        description:"",
        category:"",
        UploadByuser:"",
        date:"",
        image:""
    });
    setNumberOfCharacters(0);
  }

  //add argue to firebase
  async function addArgueToFireBase()
  {
    getLengthOfDiscussions().then((counter)=>{
      setArguement({...arguement,id:counter+1});
    });
      const argueToAdd=
      {
        id:arguement.id,
        title:arguement.title,
        category:arguement.category,
        description:arguement.desc,
        uplodedById:user.uid,
        uplodedByName:user.displayName,
        numberOfLikes:0,
        numberOfUnliked:0,
        uploadDate:new Date(),
        image:arguement.image,
        comments:[]
     }
        
        if(!checkIfCanUpload())
        {
          alert("you must fill all the inputs");
         return;
        }
      await addDiscussions(argueToAdd);
      resetArgueInputs() 
  }


  // function to check if the user can upload the argueToAdd
  function checkIfCanUpload()
  {
    if(arguement.title!==undefined||arguement.description!==undefined )
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  function handleChange(e,name) 
  {
    setArguement({...arguement,[name]:e.nativeEvent.text});
  }
  

  return (
   <View  style={styles.profileContainer}>
    <Text  style={styles.AddArgueTitle}>Always right? Show Me Here</Text>
     <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Title</Text>
        <TextInput       
         style={styles.InputTitle} 
         value={arguement.title}
         onChange={e=>handleChange(e,"title")}
         />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Category</Text>
      <View style={styles.SelectDropdown}>
      <SelectDropdown    
      defaultValue={arguement.category}
     buttonTextStyle={styles.SelectDropdownTextStyle}
    data={categories}
    onSelect={(selectedItem, index) => {
     setArguement({...arguement,category:selectedItem});
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
      <View> 
      <Text style={styles.ArgueDesc}>Description</Text>
      <TextInput  
    multiline={true}
    value={arguement.desc}
    style={styles.InputDescTextAre} 
    maxLength={150}
    numberOfLines={2}
    onChange={e=>handleChange(e,"desc")}  
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
const stylesimage = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6'
  },
  image:
  {

    width: 400,
    height: 400,
  },
  selectButton:
   {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    marginLeft:"30%",
    marginTop:"8%",
    justifyContent: 'center'
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  }
});
export default AddArgueScreen


