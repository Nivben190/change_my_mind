import React, { useState }  from 'react'
import { View } from 'react-native'
import  {styles} from "./Style"
import { Button, Image, Text, TextInput } from 'react-native'
import { getCurrentUser, signIn } from '../../apo/authFuncs';




const LoginScreen =  ({navigation}) => {


 
const [email,setEmail] =useState();
const [password,setPassword] =useState();
 const  loginUser =async()=>
{
  try {
   signIn(email,password)
        
  } catch (error) {
    alert(error)
    
  }
  
 
}


  return (
    <View style={styles.profileContainer}>
    <Image style={styles.logo} source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/005/484/042/small/dog-logo-illustration-free-vector.jpg"}}/>
      <Text onPress={kkk} style={styles.Title}>Login Here</Text>
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