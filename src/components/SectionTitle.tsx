import React from 'react'
import AppColor from '../utils/AppColor'
import Font from '../utils/Font'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

interface SectionTitleProps {
  title: string
  onPress: () => void
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, onPress}) => {
  return (
    <View style={styles.sectionTitleContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.href}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SectionTitle;

const styles = StyleSheet.create({
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 23,
    paddingHorizontal: 25
  },
  title: {
    fontSize: 20,
    fontFamily: Font.PoppinsSemiBold,
  },
  href: {
    fontSize: 15,
    fontFamily: Font.PoppinsMedium,
    color: AppColor.bgGreen
  }
})
