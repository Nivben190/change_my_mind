import React, { useState } from 'react'
import  {styles} from "./Style"
import { Button, Image, Text, TextInput, View } from 'react-native'
import { registration } from '../../apo/authFuncs';
import register from "./register.png";
const RegisterScreen = ({navigation,navigation: { goBack }}) => {
 
 const [email,setEmail] =useState();
 const [name,setName] =useState();

 const [password,setPassword] =useState();
 const  registerUser=()=> registration(name,email,password,navigation);  
 const navigateToLoginPage=()=> goBack();
  return (
    <View style={styles.profileContainer}>
    <Image style={styles.logo} source={register}/>
      <Text style={styles.Title}>Register Here</Text>
      <View style={styles.InputContainer}>
        <Text style={styles.InputDesc}>Name</Text>
        <TextInput  
         onChangeText={(textValue)=>setName(textValue)}
         style={styles.Input} />
      </View>
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
