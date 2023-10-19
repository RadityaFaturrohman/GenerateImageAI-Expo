import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, Text, View, Dimensions } from 'react-native'

import styles from './CarouselStyles';
import { images } from '../../utils';
import CarouselData from './CarouselData';

function Carousel() {
  const carouRef = useRef();

  const screenWidth = Dimensions.get('window').width - 50;

  const [activeIndex, setActiveIndex] = useState(0)

  // set auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index to scroll to
      const nextIndex = (activeIndex + 1);
      setActiveIndex(nextIndex);

      if (nextIndex >= CarouselData.length) {
        carouRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        carouRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 3000); // Adjust the interval duration as needed (e.g., 3000ms for 3 seconds).

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index
  });

  const renderItem = ({item, index}) => {
    return (
      <Image
        key={item.id}
        source={item.image}
        style={[styles.carouselImage, {width: screenWidth}]}
      />
    )
  }

  const handleScroll = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth

    // Update the index
    setActiveIndex(index)
  }

  
  return (
    <View style={[styles.carouselContainer]}>
      <FlatList
        data={CarouselData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        ref={carouRef}
      />
    </View>
  )
}

export default Carousel;