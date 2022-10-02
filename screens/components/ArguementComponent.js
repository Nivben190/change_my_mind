import React, { useState } from 'react'
import { View ,Text ,TextInput,Button} from 'react-native'
import { StyleSheet } from 'react-native'
import {Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { addCommentToDiscussion } from '../../services/dbServices';

const ArguementComponent = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const handleModal = () =>  setIsModalVisible(() => !isModalVisible);
 
  //add comment to the discussion
  function addComment()
  {
    addCommentToDiscussion(props.id,comment);
    handleModal();
  }
  
   //navigate to clicked argue screen with the argue object
  function navigateToPickedScreen()
  {
    const arguement ={
      id:props.id,
      category:props.argue.category,
      title:props.argue.title,
      numberOfLikes:props.argue.numberOfLikes,
      numberOfUnlikes:props.argue.numberOfUnliked,
      uploadedBy:props.argue.uplodedByName,
      comments:props.argue.comments,
      image:props.image,

    }
     props.navigation.navigate("ClickedArgueScreen",
     {
     
      argue:{arguement}
      
     })
  }

  return (
    <Card onPress={navigateToPickedScreen} style={styles.arguContainer}> 
    <Card.Title titleStyle={styles.title} title={props.argue.category}/>
    <Card.Content>
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
          <TextInput style={styles.input} onChangeText={(text)=>setComment(text)} placeholder="Enter your comment" />
          <View style={styles.buttonsContainer}>
          <Button title="Add Comment" onPress={addComment} />
          </View>
        </View>   
           </Modal>
     <Text style={styles.ArgueText}>{props.argue.title}</Text>
     <View style={styles.iconsContainer}>
     <MaterialCommunityIcons  onPress={props.likeArgue} name="thumb-up" size={20} color="green" />
     <MaterialCommunityIcons  onPress={props.unlikeArgue}  name="thumb-down" size={20} color="red" />
     <MaterialCommunityIcons   name="comment-plus" onPress={handleModal} size={30} color="black" />

     </View>
    </Card.Content>
      <View>
      </View>
      
    <Card.Cover source={props.image } />
  </Card>
    
  )
}

const styles = StyleSheet.create({
  iconsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"35%",
    marginBottom:"5%"
  },
  buttonsContainer:
    {
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        marginTop:"10%"
    },
  input:
  {
      width:"80%",
      height:50,
      borderWidth:1,
      borderColor:"grey",
      borderRadius:10,
      marginTop:"30%",
      marginBottom:10,
      padding:10,
      marginLeft:"auto",
      marginRight:"auto",
      textAlign:"center"
  },
  modalContainer:
  {
     width:"100%",
       height:300,
      backgroundColor:"white",
      borderRadius:10,
      padding:10,

  },
    arguContainer:{
        width:"85%",
        borderRadius:"10%",
        marginTop:10,
        marginTop: "5%",
        marginBottom: "10%",
        marginLeft: "auto",
        marginRight: "auto",
        height:300,
        backgroundColor:"white"
    },
    VsText:
    {
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:"10%"
    },
    title:{
       color:"grey",
       fontSize:16
    },
    ArgueText:
    {
        fontSize:24,
        fontWeight:"bold",
        marginBottom:"10%"
    }
  });

export default ArguementComponent
