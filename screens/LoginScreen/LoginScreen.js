import React, { useState }  from 'react'
import { View } from 'react-native'
import  {styles} from "./Style"
import { Button, Image, Text, TextInput } from 'react-native'
import { getCurrentUser, signIn } from '../../apo/authFuncs';
import loginBg from "./loginbg.png"
const LoginScreen =  ({navigation}) => {

  //function to login and navigate to Register screen
 const navigateToRegisterPage = () => navigation.navigate("RegisterScreen");
 const  loginUser =async()=>signIn(email,password,navigation)

 //state variables
const [email,setEmail] =useState();
const [password,setPassword] =useState();

  return (
    <View style={styles.profileContainer}>
    <Image style={styles.logo} source={loginBg}/>
      <Text  style={styles.Title}>Login Here</Text>
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
        <Text onPress={navigateToRegisterPage} style={styles.NeedToRegistrText}>Not Register? Press Here To Register</Text>
      </View>
      <View style={styles.CreateAccountButton}>
        <Button  onPress={loginUser} color="white" title='Login '  />
      </View>
      <View style={styles.LoginContainer}>
         <View style={styles.LoginButton}>
         </View>
      </View>
    </View>
  )
}

export default LoginScreen
