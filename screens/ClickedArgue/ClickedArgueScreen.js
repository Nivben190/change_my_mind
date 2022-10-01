import React ,{useEffect}from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import { addCommentToDiscussion, addLikeToDiscussion, addUnlikeToDiscussion } from '../../services/dbServices.js';
import {styles} from "./Style.js"
const ClickedArgueScreen = ({route}) => {
  const {argue} = route.params;
 

  return (
    <SafeAreaView>
      <View> 
     <View style={styles.container}>
     <View style={styles.TitleContainer}>
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
     </View>
    
     </View>

    </View>
    </SafeAreaView>
    
  )
}

export default ClickedArgueScreen
