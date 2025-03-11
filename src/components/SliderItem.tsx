import React from 'react';
import { ImageSliderType } from '../utils/SliderData';
import Animated from 'react-native-reanimated';
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

type Props = {
  item: ImageSliderType;
  index: number;
  scrollX: SharedValue<number>
};

const {width} = Dimensions.get('window');

const SliderItem = ({item, index, scrollX}: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index-1) * width, index * width, (index+1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index-1) * width, index * width, (index+1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        }
      ]
    }
  })

  return (
    <Animated.View style={[styles.sliderContainer, rnAnimatedStyle]}>
      <Image source={item.image} style={styles.imageContainer} />
      <View style={styles.imageContent}>
        <View>
          <Text style={styles.descContent}>
            Baitullah Indonesia,
            <Text style={{fontSize: 9}}>{item.date}</Text>
          </Text>
          <Text style={styles.titleContent}>{item.title}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    paddingHorizontal: 25,
    paddingTop: 10,
    zIndex: 0,
    gap: 20,
  },
  imageContainer: {
    width: 360,
    height: 200,
    borderRadius: 20,
  },
  imageContent: {
    position: 'absolute',
    top: 135,
    left: 40,
    right: 70,
    bottom: 0,
    zIndex: 1,
  },
  titleContent: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  descContent: {
    fontSize: 11,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
