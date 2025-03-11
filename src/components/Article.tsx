import React from 'react';
import AppColor from '../utils/AppColor';
import { ArticlesData } from '../utils/ArticlesData';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Article = () => {
  return (
    <View style={styles.container}>
      {ArticlesData.map((item, index) => (
        <View key={index} style={styles.articleContainer}>
          {/* THUMBNAIL ARTIKEL */}
          <Image source={item.post.thumbnail} style={styles.articleThumbnail} />

          {/* CATEGORY, TITLE */}
          <View style={styles.articleContent}>
            <Text style={styles.category}>{item.post.category}</Text>
            <TouchableOpacity>
              <Text style={styles.title}>{item.post.title}</Text>
            </TouchableOpacity>

            {/* AUTHOR, DATE */}
            <View style={styles.authorContainer}>
              <Image source={item.author.profile} style={styles.authorImage} />
              <Text style={styles.authorText}>
                {item.author.name} • {item.post.date}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  articleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  articleThumbnail: {
    width: 130,
    height: 105,
    borderRadius: 10,
  },
  articleContent: {
    flex: 1,
    marginLeft: 15,
  },
  category: {
    fontSize: 12,
    marginBottom: 3,
    fontFamily: 'Poppins-Medium',
    color: AppColor.bgGreen,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'left',
    marginBottom: 5,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  authorText: {
    fontSize: 12,
    color: 'gray',
    fontFamily: 'Poppins-Regular',
  },
});
