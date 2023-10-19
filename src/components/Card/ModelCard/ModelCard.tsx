import React from 'react'
import { View, Text, TouchableHighlight, Image, TouchableOpacity } from 'react-native'

import styles from './ModelCardStyles'
import { images } from '../../../utils'

type ModelProps = {
  name: string,
  image?: string,
  cusWidth?: number,
  cusHeight?: number
}

function ModelCard({ name, image, cusWidth, cusHeight }: ModelProps) {
  return (
    <View style={[styles.cardContainer]}>
      <TouchableHighlight>
        <Image 
          source={image ?? images.creator}
          style={[styles.cardImage]}
        />
      </TouchableHighlight>
      <View style={[styles.cardShadow]}></View>
      <Text style={[styles.cardTitle]}>{name ?? 'Realistic'}</Text>
      
    </View>
  )
}

export default ModelCard