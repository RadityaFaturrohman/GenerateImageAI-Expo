import React from 'react'
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from 'react-native'

import { Header } from '../../../components';
import { COLORS, icons } from '../../../utils';

function Profile() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.dark_bg() }}>
      <Header
        title='Profile'
        rightButton={(
          <Image 
            style={{width: 28, height: 28}}
            source={icons.drawer}
          />
        )}
      />
    </ScrollView>
  )
}

export default Profile;