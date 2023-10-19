import React from 'react';
import { View, Image, TextInput } from 'react-native'

import styles from './SearchInputStyle';
import { COLORS, icons } from '../../../utils';

function SearchInput() {
  return (
    <View style={[styles.searchContainer]}>
      <Image
        source={icons.search}
        style={[styles.searchIcon]}
        tintColor={COLORS.dark_bg(.8)}
      />
      <TextInput 
        style={[styles.searchInput]}
        placeholder='What do you want to see?'
        placeholderTextColor={COLORS.dark_bg(.5)}
      />
    </View>
  )
}

export default SearchInput