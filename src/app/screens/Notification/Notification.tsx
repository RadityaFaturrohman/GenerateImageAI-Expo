import React, { useState } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View, StyleSheet, useColorScheme, ImageBackground } from 'react-native'
 
import { Header } from '../../../components';
import { icons, COLORS, images, TEXT } from '../../../utils';
import FollowButton from '../../../components/Button/FollowButton/FollowButton';
import NotificationContainer from '../../../components/Notification/NotificationContainer/NotificationContainer';

function Notification() {
  const isDarkMode = useColorScheme() === 'dark';
  const [unreadCount, setunreadCount] = useState(1)

  const notificationData = [
    {
      id: 0,
      senderProfile: images.creator,
      senderName: 'Lucy',
      type: 'following',
      isRead: false,
      time: "2h",
    },
    {
      id: 1,
      senderProfile: images.carousel1,
      senderName: 'Kulkul',
      type: 'liking',
      isRead: false,
      time: "17h",
      feedbackArt: images.art
    },
    {
      id: 2,
      senderProfile: images.carousel1,
      senderName: 'Kulkul',
      type: 'posting',
      isRead: true,
      time: "18h",
      feedbackArt: images.creator
    },
    {
      id: 3,
      senderProfile: images.carousel1,
      senderName: 'Kulkul',
      type: 'following',
      isRead: true,
      time: "19h",
    },
    {
      id: 4,
      senderProfile: images.carousel3,
      senderName: 'Anglo',
      type: 'following',
      isRead: true,
      time: "22h",
    },
    
  ]

  console.log(new Date().toISOString())
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.dark_bg()}}>
      <Header 
        title='Notification' 
        rightButton={(
          <Image 
            style={{width: 28, height: 28}}
            source={icons.drawer}
          />
        )}
      />

      {/* show how many unread notifications, and if theres no any unread notifications disappearing the message */}
      <View style={[styles.container]}>
        {unreadCount >= 1 ? (
          <Text style={[styles.unreadMessage]}>
            <Text>You have</Text>
            <Text style={{color: COLORS.warning()}}> {unreadCount} </Text>
            <Text>notification unread</Text>
          </Text>
        ) : (
          <></>
        )}
      </View>

      <NotificationContainer 
        data={notificationData}
        date='Today'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  unreadMessage: {
    ...TEXT.subtitle,
    color: COLORS.white(),
    marginLeft: 20
  },
})

export default Notification