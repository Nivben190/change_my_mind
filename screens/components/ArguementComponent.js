import React,{useEffect, useState} from 'react'
import { View ,Text} from 'react-native'
import { StyleSheet } from 'react-native'
import {Card } from 'react-native-paper';
import { getCurrentUser } from '../../apo/authFuncs';
const ArguementComponent = (props) => {
 

  function navigateToPickedScreen()
  {
    const arguement ={
      id:props.id,
      category:props.argue.category,
      title:props.argue.title,
      numberOfLikes:props.argue.numberOfLikes,
      numberOfUnlikes:props.argue.numberOfUnliked,
      uploadedBy:props.argue.uplodedByName

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
     <Text style={styles.ArgueText}>{props.argue.title}</Text>
    </Card.Content>
      <View>

      </View>
    <Card.Cover source={{ uri:props.argue.image }} />
    
  </Card>
    
  )
}

const styles = StyleSheet.create({
    arguContainer:{
        width:"85%",
        borderRadius:"10%",
        marginTop:10,
        marginTop: "5%",
        marginBottom: "10%",
        marginLeft: "auto",
        marginRight: "auto",
        height:250,
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
