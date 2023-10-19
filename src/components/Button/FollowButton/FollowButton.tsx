import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './FollowButtonStyle'
import { COLORS } from '../../../utils'

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false)
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <TouchableOpacity onPress={handleClick} style={[isFollowing ? styles.followingContainer : styles.followContainer]}>
      <Text style={{
        color: isFollowing ? COLORS.primary() : COLORS.white(), 
        fontSize: 11, 
        fontWeight: '500'
      }}>
        {isFollowing ? "Following" : "Follow"}
      </Text>
    </TouchableOpacity>
  )
}

export default FollowButton