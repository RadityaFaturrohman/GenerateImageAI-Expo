import React from 'react'
import { Image, Text, View, FlatList } from 'react-native'
import FollowButton from '../../Button/FollowButton/FollowButton'

import styles from './NotificationContainerStyle'
import NotificationCard from '../NotificationCard/NotificationCard'

type NotificationProps = {
  data: Array<any>,
  date: string
}

function NotificationContainer({data, date}: NotificationProps) {
  return (
    <View style={[styles.notificationContainer]}>
      <Text style={[styles.notificationDate]}>{date ?? "Today"}</Text>

      <FlatList 
        data={data}
        style={styles.notificationListContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <NotificationCard 
            key={item.id}
            isRead = {item.isRead}
            senderName={item.senderName}
            senderProfile={item.senderProfile}
            type={item.type}
            time={item.time}
            feedbackArt={item.feedbackArt ?? null}
          />
        )}
      />
    </View>
  )
}

export default NotificationContainer