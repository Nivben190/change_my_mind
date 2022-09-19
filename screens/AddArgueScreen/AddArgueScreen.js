import React from 'react'
import { View,Text,TextInput,Button} from 'react-native'
import {styles} from "./Style.js"
const AddArgueScreen = () => {
  return (
   <View style={styles.profileContainer}>
     <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Title</Text>
        <TextInput 
         style={styles.InputTitle} />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Category</Text>
        <TextInput 
         secureTextEntry={true} style={styles.InputCategory} />
      </View>
      <View style={styles.CreateAccountButton}>
        <Button  color="white" title='Login '  />
      </View>
      <View style={styles.LoginContainer}>
         <View style={styles.LoginButton}>
         </View>
      </View>
      </View>
  )
}

export default AddArgueScreen
