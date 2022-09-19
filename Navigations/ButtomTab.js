import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import AddArgueScreen from '../screens/AddArgueScreen/AddArgueScreen';
import UploadScreen from '../screens/AddArgueScreen/UploadScreen';
const Tab = createBottomTabNavigator();

function ButtomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"
        options={{
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons name="home" size={40}  />)

            }} 
       component={HomeScreen} />
      <Tab.Screen name="Notifications"
      options={{
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons name="notification-clear-all" size={40}  />)

            }} 
       component={NotificationsScreen} />
      <Tab.Screen name="Login" 
    
    options={{
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons name="login" size={40}  />)

            }} 
      component={LoginScreen} />
    </Tab.Navigator>
  );
}


export default ButtomTab
