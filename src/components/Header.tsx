import React from 'react';
import AppColor from '../utils/AppColor';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/burger-bar.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.flexNav}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/search-bar.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/notification-bar.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  iconContainer: {
    backgroundColor: AppColor.bgGray,
    padding: 10,
    borderRadius: 50,
  },
  flexNav: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
