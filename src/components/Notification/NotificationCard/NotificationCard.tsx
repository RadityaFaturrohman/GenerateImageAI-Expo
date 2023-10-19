import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './NotificationCardStyles'
import FollowButton from '../../Button/FollowButton/FollowButton'
import { COLORS, images } from '../../../utils'
import ArtCard from '../../Card/ArtCard/ArtCard'

type NotificationCardProps = {
  senderProfile?: string,
  senderName?: string,
  senderUrl?: string,
  type?: string,
  isRead?: boolean,
  time?: string,
  feedbackArt?: string,
}

function NotificationCard({ senderProfile, senderName, senderUrl, type, isRead, time, feedbackArt }: NotificationCardProps) {
  const notificationFeedback = (type) => {
    if(type === "following") {
      return <FollowButton />
    } else if(type === "liking" || type === "posting") {
      return (
        <ArtCard 
          cusRadius={4}
          cusWidth={45}
          cusHeight={45}
          showCreatorInfo={false}
          showLikeButton={false}
          showShadow={false}
          image={feedbackArt}
        />
      )
    } else {
      return <></>
    }
  }

  const notificationMessage = (type) => {
    if(type === "following") {
      return "started following you"
    } else if(type === "liking") {
      return "like your post"
    } else if(type === "posting") {
      return "has publish a post"
    } else {
      return ""
    }
  }
  return (
    <View style={[styles.notificationCardContainer]}>
      <View style={[styles.notificationCard, {backgroundColor: isRead ? "" : COLORS.dark_text(.1)}]}>

        {/* showing dot reminder for an unread notification */}
        {isRead ? (
          <></>
        ) : (
          <View style={[styles.unreadDot]}/>
        )}

        <View style={[styles.senderProfile, {marginLeft: 5}]}>
          <Image source={senderProfile ?? images.creator} style={[styles.senderProfile]} />
        </View>

        <View style={[styles.notificationMessageContainer]}>
          {/* notification message */}
          <Text style={[styles.notificationMessage]}>
            <Text style={{color: COLORS.success()}} onPress={()=>{}}>{senderName ?? "Luke"}</Text>
            <Text> {notificationMessage(type)}</Text>
          </Text>

          {/* notification info */}
          <Text style={[styles.notificationInfo]}>
            <Text>{type}</Text>
            <Text> • {time} ago</Text>
          </Text>
        </View>

        <View style={[styles.notificationFeedback]}>
          {notificationFeedback(type)}
        </View>
      </View>
    </View>
  )
}

export default NotificationCard