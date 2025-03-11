import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import Dashboard from './src/screen/dashboard/Dashboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="gray"  />
      <Dashboard />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight
  },
});
