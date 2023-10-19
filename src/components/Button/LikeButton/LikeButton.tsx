import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native'

import styles from './LikeButtonStyle';
import { icons, images } from '../../../utils';

type LikeProps = {
  cusWidth?: number
  cusHeight?: number
}

function LikeButton({cusWidth = 30, cusHeight = 30}: LikeProps) {
  const [isLiked, setisLiked] = useState(false);

  const handlePress = () => {
    setisLiked(!isLiked)
  }
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.likeContainer(cusWidth, cusHeight)]}>
      <Image
        source={isLiked ? icons.activedLike : icons.unactivedLike}
        style={[styles.likeIcon]}
      />
    </TouchableOpacity>
  )
}

export default LikeButton