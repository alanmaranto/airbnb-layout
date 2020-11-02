import React from 'react';

import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import {imagesSource} from './imagesRoutes';
import JourneyCard from './JourneyCard';

const App = () => {
  return (
    <>
      <View>
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={require('./assets/bg.jpg')} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What to do in Paris?</Text>
          <ScrollView horizontal style={styles.a}>
            {imagesSource.map((image) => (
              <JourneyCard src={image.source} />
            ))}
          </ScrollView>
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
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default App;
