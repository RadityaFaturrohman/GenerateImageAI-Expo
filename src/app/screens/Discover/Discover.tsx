import React from 'react';
import { ScrollView, TextInput, Text, View, TouchableHighlight, Image, StyleSheet, FlatList } from 'react-native';

import { COLORS, icons, images, TEXT } from '../../../utils';
import { Header } from '../../../components';
import ModelCard from '../../../components/Card/ModelCard/ModelCard';
import SearchInput from '../../../components/TextInput/SearchInput/SearchInput';

function Discover() {
  const modelData = [
    {
      id: '0',
      Image: images.art,
      name: 'Anime Diffusion'
    },
    {
      id: '2',
      Image: images.creator,
      name: 'Anime Diffusion V2'
    },
    {
      id: '3',
      Image: images.carousel1,
      name: 'OldStyle'
    },
    {
      id: '4',
      Image: images.carousel2,
      name: 'Realistic'
    },
    {
      id: '5',
      Image: images.carousel3,
      name: 'Photo Genetic'
    },
    {
      id: '6',
      Image: images.creator,
      name: 'OldSchool'
    },
  ]

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.dark_bg()}}>
      <Header 
        title="Discover"
        rightButton={(
          <Image 
            style={{width: 28, height: 28}}
            source={icons.drawer}
          />
        )}
      />

      <View style={[styles.container]}>
        
        <SearchInput />
        
        <Text style={[styles.contentTitle]}>Models</Text>

        <FlatList 
          data={modelData}
          contentContainerStyle={[styles.contentContainer]}
          renderItem={({ item }) => (
            <ModelCard key={item.id} name={item.name} image={item.Image}/>
          )}
        />

        <View></View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 7,
  },
  contentTitle: {
    ...TEXT.subHeader_semibold,
    marginLeft: 26,
    marginTop: 25,
    color: COLORS.white(),
  },
  contentContainer: {
    marginTop: 14,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 11,
    rowGap: 12,
    paddingLeft: 16,
    paddingRight: 15
  }
})

export default Discover