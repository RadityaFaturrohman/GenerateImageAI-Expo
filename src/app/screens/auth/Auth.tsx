import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image, ImageBackground, StyleSheet } from 'react-native';

import { COLORS, icons } from '../../../utils';
import { Header } from '../../../components';

function Auth() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.dark_bg()}}>
      <Header title='Ionbit'/>

      <View style={[styles.container]}>
        <Text style={[styles.title]}>
          <Text>Start your limitless journey with</Text>
          <Text style={[styles.appLogo]}>
            <Text style={{color: COLORS.primary()}}>Ion</Text>
            <Text>bit</Text>
          </Text>
        </Text>

        <View style={[styles.providerContainer]}>
          
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: COLORS.white(.8),
    fontWeight: '600',
    fontSize: 22,
    maxWidth: 368
  },
  appLogo: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  providerContainer: {
    width: "100%",
    paddingHorizontal: 45,
    display: 'flex',
    alignItems: 'center',
    gap: 25
  }
})

export default Auth