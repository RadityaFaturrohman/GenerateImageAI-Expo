import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import styles from './CusButtonStyle'

enum buttonType {
  Outline = 'outline',
  Border = 'border',
  Transparent = 'transparent',
}

type CusButtonProps = {
  icon?: React.ReactNode
  text: string
  cusWidth?: number
  cusHeight?: number
  cusColor?: string
  cusTextColor?: string
  rounded?: boolean
  type: buttonType
  forGenerating?: boolean
}

function CusButton({ icon, text, cusWidth, cusHeight, cusColor, cusTextColor, rounded, type }: CusButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonContainer(rounded, cusWidth, cusHeight), type === 'outline' ? styles.buttonOutlineStyle : styles.buttonDefaultStyle]}>
      
      <Text style={[styles.buttonText]}>{text}</Text>
      
    </TouchableOpacity>
  )
}

export default CusButton