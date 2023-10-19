import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './ArtCardStyles';
import { COLORS, images } from '../../../utils';
import LikeButton from '../../Button/LikeButton/LikeButton';

type ArtProps = {
  cusWidth?: number
  cusHeight?: number
  cusRadius?: number
  cusMarginBottom?: number
  showCreatorInfo?: boolean
  showLikeButton?: boolean
  showShadow?: boolean
  image?: string
}

function ArtCard({cusWidth = null, cusHeight = null, cusRadius = null, image, cusMarginBottom, showCreatorInfo = true, showLikeButton = true, showShadow = false}: ArtProps) {
  return (
    <View style={[styles.cardContainer(cusWidth, cusHeight, cusMarginBottom, cusRadius), {position: 'relative'}]}> 
      <TouchableHighlight style={[styles.cardImage(cusWidth, cusHeight)]}>
        <Image 
          source={image ?? images.art}
          style={[styles.cardImage(cusWidth, cusHeight, cusRadius), {objectFit: 'cover'}]}
        />
      </TouchableHighlight>
      
      {showShadow ? (
        <LinearGradient
          start={{x: 0, y: .65}}
          end={{x:0, y: 1}}
          colors={[COLORS.black(0), COLORS.black(.95)]}
          style={[styles.cardShadow(cusWidth, cusHeight, cusRadius)]}
        ></LinearGradient>
      ) : (
        <></>
      )}

      {/* showing like button if showLikeButton props is true */}
      {showLikeButton ? (
        <View style={[styles.likeButton]}>
          <LikeButton />
        </View>
      ) : (
        <></>
      )}

        {/* showing creator info if showCreatorInfo props is true */}
        {showCreatorInfo ? (
          <View style={[styles.creatorInfo]}>
          <Image source={images.creator} style={[styles.creatorProfile]}/>
          <Text style={[styles.creatorName]}>Kamel</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  )
}

export default ArtCard