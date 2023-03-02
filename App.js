// Import all packages: 

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { globalColors } from './src/styles/Colors.js';
import { globalFonts } from './src/styles/Fonts.js';
import TopMenuBar from './src/components/TopMenuBar.js';
import ValueCard from './src/components/ValueCard.js';
import FundLabel from './src/components/FundLabel.js';
import MyPositions from './src/components/MyPositions.js';
import SliderBar from './src/components/SliderBar.js';



// Loading the custom fonts (you have to use this at the start of every screen): 

SplashScreen.preventAutoHideAsync(); 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('./src/assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('./src/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('./src/assets/fonts/Urbanist-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  //DUMMY VARIABLES
  let cash = 19654850;
  let difference = 6637849;
  let fundName = "My Portfolio";
  //let fundName = "MMMMMMMMMMM";

  //REPLACE ALL WITH BACKEND CALLS

  // Custom fonts loaded, code below is for the screen: 
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TopMenuBar />
      <Text style={globalFonts.BodyXLarge.Regular(globalColors.primary._500.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodyLarge.Regular(globalColors.primary._400.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodyMedium.Regular(globalColors.primary._300.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodySmall.Regular(globalColors.primary._200.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodyXSmall.Regular(globalColors.primary._100.color)}>Urbanist Bold</Text>
      <Text style={{ fontSize: 30, color: globalColors.greyscale._900.color }}>Platform Default</Text>
      <FundLabel name={fundName} />      
      <ValueCard cashBalance={cash} delta={difference} />
      <SliderBar />
      <MyPositions />
    </View>
  );
}

// Style sheet with custom styles: 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: globalColors.others.black.color
  },
});
