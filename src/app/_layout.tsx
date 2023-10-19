import React from 'react'
import type {PropsWithChildren} from 'react';
import { SafeAreaView, useColorScheme, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { COLORS, TEXT } from '../utils';
import SvgUri from 'react-native-svg-uri';

type LayoutProps = PropsWithChildren<{
  title?: string;
  children?: React.ReactNode;
}>


function Layout({children, title}: LayoutProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{
      backgroundColor: isDarkMode ? COLORS.dark_bg() : COLORS.light_bg(),
      flex: 1,
    }}>
      {children}  
    </SafeAreaView>
  )
}


export default Layout;