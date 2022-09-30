import { useState } from 'react';
import { slides } from './introAppPages/slides';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ButtomTab from './Navigations/ButtomTab';
import AddArgueScreen from './screens/AddArgueScreen/AddArgueScreen';
import ClickedArgueScreen from './screens/ClickedArgue/ClickedArgueScreen';
const Stack = createNativeStackNavigator();

export default function App() {

  const [showRealApp,setShowRealApp]=useState(false);

   const _renderItem = ({ item }) => {
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 100,
      }}>
      <Text style={styles.introTitleStyle}>{item.title}</Text>
      <Image style={styles.introImageStyle} source={item.image} />
      <Text style={styles.introTextStyle}>{item.text}</Text>
    </View>
    );
  }


  return (
   <>
    {
      showRealApp? (   
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigator"
          component={ButtomTab}
          options={{ headerShown:false }}
        />
        <Stack.Screen 
        name="AddArgueScreen"
        component={AddArgueScreen}
        options={{ headerShown:false }}/>
 <Stack.Screen 
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown:false }}/>

<Stack.Screen 
        name="ClickedArgueScreen"
        component={ClickedArgueScreen}
        
        options={{ headerShown:true,
        headerTitle:"Discossions",
        
         }}/>
      </Stack.Navigator>
      </NavigationContainer>


  ):
  (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
       onDone={()=> setShowRealApp(true)}
      onSkip={()=> setShowRealApp(true)}
      showSkipButton={true}
    />
  )
    }
   </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTitleStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTextStyle: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  
});
