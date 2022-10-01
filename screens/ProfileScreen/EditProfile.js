//edit profile component for profile screen
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image ,TouchableOpacity} from 'react-native';
import { getCurrentUser, updateProfileFunc } from '../../apo/authFuncs';
import editProfile from './editprofile.png';
import { styles } from './Style';
import * as ImagePicker from 'expo-image-picker';
import { getNumberOfDiscussionsByUser } from '../../services/dbServices';

const EditProfile = ({ navigation }) => {
    const [user, setUser] = useState(null);
     const[profile,setProfile]=useState({
        displayName:"",
        photoURL:"",
        phoneNumber:""
     });
    //useEffect to get current user
    useEffect(() => {
        const user = getCurrentUser();
        
        setUser(user);
    }, []);
    //update profile
    const updateProfile = () => {     
      updateProfileFunc(profile.displayName, profile.photoURL,profile.phoneNumber, navigation);
    
    }
    //set profile image 
    const setProfileImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if(!result.cancelled) 
          {
            setProfile( {...profile,photoURL:result.uri});
          }
    };
    function handleChange(e,name) 
  {
    setProfile({...profile,[name]:e.nativeEvent.text});
  }
  
    return (
        <View>
            <View>
                <Image source={editProfile} style={styles.editProfileImage} />
                <TouchableOpacity style={styles.selectButton} onPress={setProfileImage}>
        <Text  style={styles.buttonText}>Edit Profile Image</Text>
      </TouchableOpacity>
                <TextInput
                    style={styles.userName}
                    placeholder="User Name"
                    onChange={e=>handleChange(e,"displayName")}
                    value={profile.displayName}
                />
                 <TextInput
                    style={styles.userName}
                    placeholder="Phone Number"
                    onChange={e=>handleChange(e,"phoneNumber")}
                    value={profile.phoneNumber}
                />
    
               <View style={styles.editProfileBtn}>
                    <Button  color="white" title="Update Profile" onPress={updateProfile} />
               </View>
            </View>
        </View>
    )
}
export default EditProfile