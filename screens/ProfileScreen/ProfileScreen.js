import React from 'react'
import { Button, View } from 'react-native'
import { getCurrentUser, loggingOut } from '../../apo/authFuncs'

const ProfileScreen = ({navigation}) => {
    //move to HomePage with navigation
    const moveToHomePage = () => {
        loggingOut(navigation);
    }
  return (
    <View>
      <Button title="Logout" onPress={moveToHomePage} />
    </View>
  )
}

export default ProfileScreen
