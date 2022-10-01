import React, { useEffect,useState } from 'react'
import { Button, View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import { getCurrentUser, loggingOut } from '../../apo/authFuncs'
import {styles} from './Style'
import {getNumberOfDiscussionsByUser,getNumberOfLikesByUser,getNumberOfUnlikesByUser} from '../../services/dbServices';
import userimg from './userimg.png'
import { useIsFocused } from "@react-navigation/native"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {
    const [user,setUser]=useState(null);
    const isFocused = useIsFocused();
    const [numberOfDiscussions,setNumberOfDiscussions]=useState(0);
    const [numberOfLikes,setNumberOfLikes]=useState(0);
    const [numberOfUnlikes,setNumberOfUnikes]=useState(0);

    
    //move to HomePage with navigation
    const moveToHomePage = () => {
        loggingOut(navigation);
    }
    
    //useEffect to get current user
    useEffect( () => {
        const user = getCurrentUser();
        //get the number of discussions that user uploaded
        getNumberOfDiscussionsByUser(user.uid).then((counter)=>{
          setNumberOfDiscussions(counter);
        })
        //get number of likes the user got
        getNumberOfLikesByUser(user.uid).then((counter)=>{
          setNumberOfLikes(counter);
        });
        //get number of unlikes the user got
        getNumberOfUnlikesByUser(user.uid).then((counter)=>{
          setNumberOfUnikes(counter);
        });
        setUser(user);
    },[isFocused]);
  return (
    <View>
    <View>
     {user&&<Image source={user.photoURL?{uri:user.photoURL}:userimg} style={styles.image} />}
     <View style={styles.container}>
      <View style={styles.userNameContainer}>
      <Text style={styles.userNameTitle}>User Name</Text>
      <Text style={styles.userName}>{user&&user.displayName}</Text>
      </View>
        <View style={styles.discussonsContainer}>
      <Text style={styles.numberOfDiscussionsTitle}>Discussions</Text>
      <Text style={styles.numberOfDiscussions}>{numberOfDiscussions}</Text>
      </View>
     
    <View  style={styles.likesContainer}>
    <Text style={styles.numberOfLikesTitle}>Likes</Text>
      <Text style={styles.numberOfLikes}>{numberOfLikes}</Text>
      </View>
      <View  style={styles.unlikesContainer}>
      <Text style={styles.numberOfUnlikesTitle}>unlikes</Text>
      <Text style={styles.numberOfUnlikes}>{numberOfUnlikes}</Text>
      </View>
      
      <TouchableWithoutFeedback onPress={() => navigation.navigate('EditProfileScreen')} style={styles.editProfile}>
      <Text style={styles.editProfile}>Edit Profile</Text>
    </TouchableWithoutFeedback>
     
      <MaterialCommunityIcons style={styles.logoutBtn} name="logout" size={40} onPress={moveToHomePage} />

    </View>
     </View>
    </View>
  )
}

export default ProfileScreen
