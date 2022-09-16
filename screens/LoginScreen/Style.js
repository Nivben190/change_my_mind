import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileContainer:
    {
        backgroundColor: "lightblue",
        height: "100%",
    },
    logo:
    {
        width: 100,
        height:100,
        borderRadius:50,
        marginTop: 150,
        marginLeft:"auto",
        marginRight:"auto",
    },
    Title:
    { 
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 30,
        marginBottom: 50,
        fontSize:30,
        fontWeight: "bold",
        color: "white",
    },
    
    Input:
    { 
          textAlign: "end",     
             
         backgroundColor: "white",
         borderRadius:12,
         border:"none",
         borderBottomColor: "white",
         height: 40,           
    },
    InputContainer:
    {
      
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto", 
        marginBottom:15              
    },
    InputDesc:{
        color: "white",
        marginBottom: 20,
        fontWeight: "bold",
        fontSize:22
    },
    CreateAccountButton:
    {
        marginTop:30,
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto", 
        backgroundColor:"orange",
        borderRadius:10,
        opacity:0.7    
    },
    LoginContainer:{
        marginTop:40,

    },
    AlreadyHaveAccountText:
    {
        color: "white",
        fontSize:20,
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto", 
    },
    LoginButton:
    {
        marginLeft: "auto",
        marginRight: "auto", 
        marginTop: 12,
       
      
    }



});



export {styles} 