// This is the slider bar that allows you to navigate through funds for example. 
import React, {useState} from 'react';
import { ScrollView,StyleSheet } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';


export default function SliderBar(props) {
    const navigation = useNavigation();
    const funds = props.funds;
    console.log('funds:', funds);
    //Replace with backend calls
    let nameOfFund  = props.funds.map((element) => (
    <TouchableOpacity key={element} onPress={() => {navigation.navigate('Fund') }}>
      <View style={[styles.buttonContainer]}>
        <View style={{ flex: 1 }}>
            <Text style={styles.buttonText}>{element}</Text>
        </View>
      </View>
    </TouchableOpacity>
    ));
    let length = nameOfFund.length
    if (length >0) {

        return (         
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    {nameOfFund}
                </ScrollView>
            </View>
        );
    } //added marginRight to final column -- bring it in line w/ 24 pixel margin
}
const styles = StyleSheet.create({
    buttonsdesign: {
        marginRight: 24,
        colour: globalFonts.BodyXLarge.semiBold(globalColors.others.white.color),
    },
    scrollContentContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        color: globalColors.status.success
    },
    container: {
        height: 24,
        marginTop: 20,
    },
    buttonContainer: {
        height: 24,
        marginLeft: 24,
        borderWidth: 0.5,
        marginRight: 24,
    },
    selectedButtonContainer: {
        color: globalColors.status.success
    },
    buttonText: {
        ...globalFonts.BodyXLarge.semiBold(globalColors.others.white.color),
        marginRight: 8,
    },
    selectedLine: {
        height: 3,
        backgroundColor: globalColors.status.success,
    },
  });