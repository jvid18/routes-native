import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
