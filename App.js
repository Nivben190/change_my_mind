import { useState } from 'react';
import { slides } from './introAppPages/slides';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
// Initialize Firebase
import {
  SafeAreaView
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
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
      showRealApp? ( <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        React Native App Intro Slider using AppIntroSlider
        </Text>
      <Text style={styles.paragraphStyle}>
        This will be your screen when you click Skip
        from any slide or Done button at last
        </Text>
        <Button title='Go Back' onPress={() => setShowRealApp(false)}/>
    </View>
  </SafeAreaView>):
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
