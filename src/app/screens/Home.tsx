import React, { useCallback, useState } from 'react'
import { Text, ScrollView, View, TouchableOpacity, Image, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { COLORS, FONT, TEXT, icons, images } from '../../utils';
import { Carousel } from '../../components';
import { Header } from '../../components';
import ArtCard from '../../components/Card/ArtCard/ArtCard';
import MasonryList from '@react-native-seoul/masonry-list';

function Home() {
  const artData = [
    {
      id: 0,
      height: 250,
      image: images.art
    },
    {
      id: 1,
      height: 200,
      image: images.carousel1
    },
    {
      id: 2,
      height: 200,
      image: images.creator
    },
    {
      id: 3,
      height: 250,
      image: images.carousel3
    },
  ]
  
  const recentArtData = [
    {
      id: 0,
      image: images.art
    },
    {
      id: 1,
      image: images.creator
    },
    {
      id: 2,
      image: images.carousel2
    },
    {
      id: 3,
      image: images.carousel1
    },
  ]
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {}

  return (
    <ScrollView style={{backgroundColor: COLORS.dark_bg()}} refreshControl={
      <RefreshControl refreshing={refreshing} />
    }>
      <Header 
        title="Ionbit"
        rightButton={(
          <Image 
            style={{width: 28, height: 28}}
            source={icons.drawer}
          />
        )}
        showCredits={true}
      />

      <View style={[styles.container]}>
        <Carousel />
        
        <View style={[styles.contentContainer]}>
          <Text style={[styles.contentTitle]}>Latest Art</Text>

          <FlatList 
            data={recentArtData}
            contentContainerStyle={{gap: 8}}
            horizontal
            renderItem={({ item }) => (
              <ArtCard cusHeight={100} cusWidth={80} showCreatorInfo={false} showLikeButton={false} image={item.image}/>
            )}
            style={[styles.recentArtContainer]}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View style={[styles.contentContainer, {marginTop: 30}]}>
          <Text style={[styles.contentTitle]}>Popular</Text>

            <MasonryList
              data={artData}
              renderItem={({ item }) => (
                <ArtCard cusHeight={item.height} cusMarginBottom={10} showShadow={true} image={item.image}/>
              )}
              style={{
                columnGap: 5
              }}
              numColumns={2}
              keyExtractor={item => item.id.toString()}
            />          
        </View>
        
        <TouchableOpacity>
              
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 25,
    paddingBottom: 80
  },
  contentContainer: {
    marginTop: 17,
    display: 'flex',
    gap: 17
  },
  contentTitle: {
    color: COLORS.white(),
    fontFamily: 'Nunito_Bold',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 1
  },
  recentArtImage: {
    width: 80,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.dark_text(.2)
  },
  recentArtContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    rowGap: 14,
    columnGap: 7,
    flexWrap: 'wrap',
    flexShrink: 1
  }
})

export default Home;