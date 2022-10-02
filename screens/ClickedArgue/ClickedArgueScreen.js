import React ,{useState,useEffect}from 'react'
import { View,Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import { addCommentToDiscussion } from '../../services/dbServices.js';
import {styles} from "./Style.js"

const ClickedArgueScreen = ({navigation,route}) => {
  const {argue} = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const handleModal = () =>  setIsModalVisible(() => !isModalVisible);
 
  function addComment()
  {
    addCommentToDiscussion(argue.arguement.id,comment);
    handleModal();
    navigation.navigate("Home");
    
  }
  useEffect(() => {

  }, [])
 
  return (
    <SafeAreaView>
      <View> 
     <View style={styles.container}>
     <View style={styles.TitleContainer}>
      
     <ImageBackground source={argue.arguement.image} style={styles.image}>
     </ImageBackground>
     <Text style={styles.Title}>{argue.arguement.title}</Text>
     <Text  style={styles.uplodedBy}>Uploaded By: {argue.arguement.uploadedBy}</Text>
     </View>    
     <View>
     <View style={styles.CategoryContainer}>
     <Text style={styles.categoryTitle}> Category</Text>
     <Text style={styles.category}> {argue.arguement.category}</Text>
     </View>
      <View>
      <Text  style={styles.likesTitle}>Likes</Text>
     <Text style={styles.Likes}>{argue.arguement.numberOfLikes}</Text>
     </View>
      <View style={styles.likesContainer}>
      <Text  style={styles.unlikesTitle}>Dislikes</Text>
     <Text style={styles.Unlikes}>{argue.arguement.numberOfUnlikes}</Text> 
     </View> 
      <View style={styles.commentsContainer}>
      <Text onPress={handleModal} style={styles.commentsTitle}>Comments</Text>
  
      <ScrollView>
      {argue.arguement.comments.map((comment,index)=>(
        <Text key={index} style={styles.comments}>{comment}</Text>
      ))}
      </ScrollView>
      </View>
     </View>
    
     </View>

    </View>
    </SafeAreaView>
    
  )
}

export default ClickedArgueScreen
