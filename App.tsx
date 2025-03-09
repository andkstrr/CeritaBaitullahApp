import React from 'react'
import Header from './src/components/Header'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const App = () => {
  return (
    <View style={{paddingTop: StatusBar.currentHeight}}>
      <StatusBar barStyle="dark-content" />
      <Header />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})