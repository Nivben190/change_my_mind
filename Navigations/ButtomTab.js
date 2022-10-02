import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddArgueScreen from '../screens/AddArgueScreen/AddArgueScreen';
import { styles } from '../screens/AddArgueScreen/Style';
import { getCurrentUser } from '../apo/authFuncs';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
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
        {getCurrentUser()&&<Tab.Screen
        
         name="AddArgue"
         
        options={{   
          
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons color={"blue"} style={styles.AddICon} name="plus-circle" size={40}  />)

            }} 
       component={AddArgueScreen} />}
      {/* <Tab.Screen name="Notifications"
      options={{
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons name="notification-clear-all" size={40}  />)

            }} 
       component={NotificationsScreen} /> */}
     {getCurrentUser()?<Tab.Screen name="Profile" 
    
    options={{
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons name="account" size={40}  />)

            }} 
      component={ProfileScreen} />:
     <Tab.Screen name="Login" 
    
    options={{
              tabBarColor: "#009387",
              tabBarIcon: () => (<MaterialCommunityIcons name="login" size={40}  />)

            }} 
      component={LoginScreen} />}

    
    </Tab.Navigator>
  );
}


export default ButtomTab
