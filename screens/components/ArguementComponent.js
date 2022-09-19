import React from 'react'
import { View ,Text} from 'react-native'
import { StyleSheet } from 'react-native'
import {Card } from 'react-native-paper';

const ArguementComponent = (props) => {
  return (
    <Card style={styles.arguContainer}> 
    <Card.Title titleStyle={styles.title} title={props.category}/>
    <Card.Content>
     <Text style={styles.ArgueText}>{props.title}</Text>
    </Card.Content>
      <View>

      </View>
    <Card.Cover source={{ uri:'https://iheartdogs.com/wp-content/uploads/2015/01/4577137586_5f4cf7fbd3_z-1.jpg' }} />
    
  </Card>
    
  )
}

const styles = StyleSheet.create({
    arguContainer:{
        width:"85%",
        borderRadius:"10%",
        marginTop:10,
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
