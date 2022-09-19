import React, { useState } from 'react'
import  {styles} from "./Style"

import { Button, Image, Text, TextInput, View } from 'react-native'
import { registration } from '../../apo/authFuncs';
const RegisterScreen = ({navigation}) => {
 
 const [email,setEmail] =useState();
 const [password,setPassword] =useState();
 const  registerUser=()=> 
 {
 
   registration(email,password,navigation);
    
     
  
   
 }

 const navigateToLoginPage=()=> navigation.navigate("Login");
  return (
    <View style={styles.profileContainer}>
    <Image style={styles.logo} source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/005/484/042/small/dog-logo-illustration-free-vector.jpg"}}/>
      <Text style={styles.Title}>Social Dog</Text>
      <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Email</Text>
        <TextInput  
         onChangeText={(textValue)=>setEmail(textValue)}
         style={styles.Input} />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Password</Text>
        <TextInput 
       onChangeText={(textValue)=>setPassword(textValue)}
         secureTextEntry={true} style={styles.Input} />
      </View>
      <View style={styles.CreateAccountButton}>
        <Button onPress={registerUser}  color="white" title='Create Account'  />
      </View>
      <View style={styles.LoginContainer}>
      <Text style={styles.AlreadyHaveAccountText}>Already have an accout?</Text>
         <View style={styles.LoginButton}>
         <Button onPress={navigateToLoginPage} color="yellow" title='Login'  />
         </View>
      </View>
    </View>
  )
}

export default RegisterScreen
