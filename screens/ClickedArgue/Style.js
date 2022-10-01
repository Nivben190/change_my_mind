import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    TitleContainer:
    {
           width: "100%",
            height: "20%",
            backgroundColor: "#fff",
            borderRadius:20,
    },
    image:
    {
        width: "100%",
        height: "100%",
        zIndex: -1,

    },
    Title:{
        fontSize:30,
        textAlign: 'center',
       marginTop:"5%",
        fontWeight:"bold",
    },
    uplodedBy:
    {
        fontSize:14,
        textAlign: 'end',
        marginTop:"2%",
        marginLeft:"30%",
        fontWeight:"bold",
        color: "gray"
        
    },
    CategoryContainer:
    { 
        marginTop:"20%",
        marginLeft: "auto",
        marginRight: "auto",
      
    },
    categoryTitle:
    {
        fontSize:30,
        fontWeight:"bold",
        color: "gray",
        marginTop:"5%",

    },
    category:
    {
        fontSize:20,
        fontWeight:"bold",
        marginTop:"2%",
        marginLeft:"auto",
        marginRight:"auto",
         

    },
    container:
    {
        width:"100%",
        height:"100%",
        backgroundColor: "lightpink",
        borderRadius: 30,
    },
    likesTitle:
    {
        fontSize:30,
        fontWeight:"bold",
        color: "gray",
        marginLeft:"20%",
        marginTop:"10%"
    },
    Likes:
    {
        fontSize:20,
        fontWeight:"bold",
        marginTop:"5%",
        marginLeft:"27%",
        marginRight:"auto",
    },
    likesContainer:
    {
        marginTop:"-20%",
        marginLeft: "64%",      
    },
    unlikesTitle:
    {
        fontSize:30,
        fontWeight:"bold",
        color: "gray",

    },
    Unlikes:
    {
        fontSize:20,
        fontWeight:"bold",
        marginTop:"15%",
        marginLeft:"40%",
        marginRight:"auto",
    },
    commentsContainer:
    {
        marginTop:"10%",
        marginLeft: "auto",
        marginRight: "auto",    
    },
    commentsTitle:
    {
        fontSize:30,
        fontWeight:"bold",
        color: "gray",
       textAlign:"center",
        marginTop:"2%"
    },
    comments:
    {
        fontSize:20,
        fontWeight:"bold",
        marginTop:"5%",
        marginLeft:"10%",
        marginRight:"auto",
        textAlign:"center",
        color: "white"
    },



})
export {styles}