import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/app/_layout';
import Home from './src/app/screens/Home';
import { FONT } from './src/utils';
import * as fonts from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { useState } from 'react';
import Discover from './src/app/screens/Discover/Discover';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/tabs/tabs'

enableScreens();

const fetchFonts = async () => {
  return await fonts.loadAsync({
    Nunito_Light: require('./assets/fonts/Nunito-Light.ttf'),
    Nunito_Regular : require('./assets/fonts/Nunito-Regular.ttf'),
    Nunito_Medium : require('./assets/fonts/Nunito-Medium.ttf'),
    Nunito_Semibold : require('./assets/fonts/Nunito-SemiBold.ttf'),
    Nunito_Bold : require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    <AppLoading 
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => {
        console.log(err);
      }}
    />
  }

  return (
    <Layout style={{fontFamily: 'Nunito-Regular'}}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Layout>
  );
}

