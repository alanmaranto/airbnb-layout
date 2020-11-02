import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={require('./assets/bg.jpg')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
  },
  banner: {
    height: 250,
    flex: 1
  },
});

export default App;
