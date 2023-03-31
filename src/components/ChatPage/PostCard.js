// DOCUMENTATION:
// Example usage: 
// <PostCard
// username ={'cameronrmillen'}
// timesincepost={'1'}
// strategy1={'sell@TSLA'} strategy2={'buy@MSFT'} strategy3={'hold@NVDA'}
// imagesource={require('../assets/icons/ProfilePlaceholder.png')}
// postcontent={'I really think that we should sell@TSLA this week due to the recent rumors about the quarterly report and Elon Musk being a hairy alien. We should also buy@MSFT as there has been speculation that Gates was good friends with Epstein which could see the share price rocket as his popularity grows. I think we should also hold@NVDA as their new tech that allows Incels to fly may take off, so we should see what happens next week.'}
// upvotes={'123'}
// comments={'10'}
// />

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function PostCard(props) {
    const navigation = useNavigation();
    const { imagesource, username, timesincepost, strategy1, strategy2, strategy3, postcontent, upvotes, comments  } = props;
    
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Post')}>
            <View style={styles.outerContainer}>
                <View style={styles.imageTitleContainer}>
                    <Image source={props.imagesource} style={[styles.profileIcon, { marginRight: 14}]} />
                    <View style={styles.usernameStrategyVertContainer}>
                        <Text style={[globalFonts.BodySmall.semiBold(globalColors.others.white.color), { paddingBottom: 5}]}>u/{username} • {timesincepost}h</Text>
                        <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), styles.title]} numberOfLines={1}>{strategy1} • {strategy2} • {strategy3}</Text>
                    </View>
                </View>
                {/* This is the logic that turns the text green*/}
                <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color), { marginBottom: 12 }]}>
                {
                    postcontent.split(' ').map((word, index) => {
                    if (word.includes('@')) {
                        return (
                        <Text key={index} style={globalFonts.BodyLarge.semiBold(globalColors.primary._500.color)}>{word} </Text>
                        );
                    } else {
                        return (
                        <Text key={index}>{word} </Text>
                        );
                    }
                    })
                }
                </Text>
                <View style={styles.bottomButtons}>
                    <View style={styles.upvoteCommentsHBox}>
                        <Image
                        source={require('../../assets/icons/UpVotes.png')}
                        style={[styles.icon, { marginRight: 12 }]}
                        />
                        <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color), { marginRight: 15 }]}>{upvotes}</Text>
                        <Image
                        source={require('../../assets/icons/Chat.png')}
                        style={[styles.icon, { marginRight: 12 }]}
                        />
                        <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color)]}>{comments}</Text>
                    </View>
                    <View style={styles.shareMoreBox}>
                        <Image
                        source={require('../../assets/icons/Share.png')}
                        style={[styles.icon, { marginRight: 12 }]}
                        />
                        <Image
                        source={require('../../assets/icons/More.png')}
                        style={[styles.icon]}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    outerContainer:{
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: globalColors.dark._3.color,
        paddingBottom: 16,
        marginBottom: 20,
    },
    imageTitleContainer:{
        flexDirection: 'row',
        alignItems: 'left',
        paddingBottom: 16,
    },
    profileIcon: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
        borderColor: globalColors.primary._500.color,
        borderWidth: 2,
        borderRadius: 100, 
    },
    usernameStrategyVertContainer:{
        paddingTop: 3,
        flex: 1,
    },
    title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
    bottomButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    upvoteCommentsHBox:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareMoreBox:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default PostCard;