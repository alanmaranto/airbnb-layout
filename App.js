import React from 'react';

import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import {
  activitiesImages,
  bestPlacesImages,
  hostalsImages,
} from './imagesRoutes';
import JourneyCard from './JourneyCard';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={require('./assets/bg.jpg')} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What to do in Paris?</Text>
          <ScrollView horizontal>
            {activitiesImages.map((image) => (
              <JourneyCard src={image.source} activity={styles.city} />
            ))}
          </ScrollView>
          <Text style={styles.title}>Best Places</Text>
          <View>
            {bestPlacesImages.map((image) => (
              <JourneyCard src={image.source} best={styles.best} />
            ))}
          </View>
          <Text style={styles.title}>Near By</Text>
          <View style={styles.list}>
            {hostalsImages.map((image) => (
              <JourneyCard
                src={image.source}
                best={styles.best}
                list={styles.listItem}
              />
            ))}
          </View>
        </View>
      </ScrollView>
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
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 20,
  },
  best: {
    width: '100%',
    height: 200,
    marginVertical: 5,
    borderRadius: 20,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    flexBasis: '49%',
  },
});

export default App;
