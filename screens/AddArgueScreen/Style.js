import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    InputContainer:
    {
       display: "flex",
       flexDirection: "row",
       
      marginLeft:15,
        marginBottom:15 ,
        marginTop:40         
            
    },
    InputDesc:{
        color: "white",
        marginBottom: 20,
        fontWeight: "bold",
        fontSize:22
    },
    profileContainer:
    {
        backgroundColor: "lightblue",
        height: "100%",
    },
    InputTitle:
    { 
          width:"60%",
         textAlign: "end",            
         backgroundColor: "white",
         marginLeft:"16%",
         borderRadius:12,
         border:"none",
         borderBottomColor: "white",
         height: 40,           
    },
    InputCategory:
    { 
         width:"60%",
         textAlign: "end",            
         backgroundColor: "white",
         marginLeft:"3%",
         borderRadius:12,
         border:"none",
         borderBottomColor: "white",
         height: 40,           
    }
});
export {styles}
