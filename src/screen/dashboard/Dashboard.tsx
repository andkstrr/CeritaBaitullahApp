import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Article from '../../components/Article';
import { ImageSlider } from '../../utils/SliderData';
import SectionTitle from '../../components/SectionTitle';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
  const handleView = () => {
    console.log('test');
  };
  return (
    <ScrollView>
      <View>
        <Header />
        <SectionTitle title={'Artikel Terbaru'} onPress={handleView} />
        <Slider itemList={ImageSlider} />
        <SectionTitle title={'Rekomendasi'} onPress={handleView} />
        <Article />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
