import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
const UploadScreen = () => {
   
 //upload image to firebase with image picker
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const takePhotoFromCamera = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.cancelled) {
      setImage(result.uri);
      alert(result.uri);
    }
    
  };

    
 
  
  return (
    <SafeAreaView style={styles.container}>
    <Image size={400} source={{ uri: image }} style={styles.image} />
      <TouchableOpacity style={styles.selectButton} onPress={takePhotoFromCamera}>
        <Text  style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#bbded6'
    },
    image:
    {

      width: 400,
      height: 400,
    },
    selectButton: {
      borderRadius: 5,
      width: 150,
      height: 50,
      backgroundColor: '#8ac6d1',
      alignItems: 'center',
      justifyContent: 'center'
    },
    uploadButton: {
      borderRadius: 5,
      width: 150,
      height: 50,
      backgroundColor: '#ffb6b9',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    imageContainer: {
      marginTop: 30,
      marginBottom: 50,
      alignItems: 'center'
    },
    progressBarContainer: {
      marginTop: 20
    },
    imageBox: {
      width: 300,
      height: 300
    }
  });

export default UploadScreen
