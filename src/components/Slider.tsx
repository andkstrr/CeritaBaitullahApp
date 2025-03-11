import React, {useRef, useState} from 'react';
import SliderItem from './SliderItem';
import SliderPagination from './SliderPagination';
import {StyleSheet, Text, View, FlatList, ViewToken} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedRef
} from 'react-native-reanimated';
import {ImageSlider, ImageSliderType} from '../utils/SliderData';

type Props = {
  itemList: ImageSliderType[];
};

const Slider = ({itemList}: Props) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [data, setData] = useState(itemList);
  const ref = useAnimatedRef<Animated.FlatList<any>>()

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems?: ViewToken[] }) => {
    const firstIndex = viewableItems?.[0]?.index;
    if (typeof firstIndex === 'number') {
      setPaginationIndex(firstIndex % itemList.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged}
  ]);

  return (
    <View>
      <Animated.FlatList
        ref={ref}
        data={data}
        renderItem={({item, index}) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        // keyExtractor={{item, index} => `slider-item-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...itemList])}
        onEndReachedThreshold={0.5}
      />
      <SliderPagination
        items={itemList}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
