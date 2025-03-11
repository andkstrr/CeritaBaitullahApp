import React from 'react'
import AppColor from '../utils/AppColor'
import Animated from 'react-native-reanimated'
import { ImageSliderType } from '../utils/SliderData'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { SharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated'

type Props = {
    items: ImageSliderType[];
    paginationIndex: number;
    scrollX: SharedValue<number>
}

const {width} = Dimensions.get('window');

const SliderPagination = ({items, paginationIndex, scrollX}: Props) => {
  return (
    <View style={styles.paginationContainer}>
        {items.map((_, index) => {
            const pgAnimationStyle = useAnimatedStyle(() => {
                const dotWidth = interpolate(
                    scrollX.value,
                    [(index-1) * width, index * width, (index+1) * width],
                    [8, 20, 8],
                    Extrapolation.CLAMP
                );

                return {
                    width: dotWidth
                }
            })

            return (
                <Animated.View key={index} style={[styles.paginationDot, pgAnimationStyle, {backgroundColor: paginationIndex === index ? AppColor.bgGreen : '#aaa'}]} />
            )
        })}
    </View>
  )
}

export default SliderPagination

const styles = StyleSheet.create({
    paginationContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationDot: {
        backgroundColor: '#aaa',
        height: 8,
        width: 8,
        borderRadius: 8,
        marginHorizontal: 4
    }
})
