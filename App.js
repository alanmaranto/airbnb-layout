import React from 'react';

import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import {
  activitiesImages,
  bestPlacesImages,
  hostalsImages,
  experienceImages,
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
              <JourneyCard
                description={image.description}
                src={image.source}
                activity={styles.city}
              />
            ))}
          </ScrollView>
          <Text style={styles.title}>Best Places</Text>
          <View>
            {bestPlacesImages.map((image) => (
              <JourneyCard src={image.source} best={styles.best} />
            ))}
          </View>
          <View style={styles.experienceContainer}>
            <Text style={styles.experienceTitle}>Experiences</Text>
            <ScrollView horizontal>
              {experienceImages.map((image) => (
                <JourneyCard
                  src={image.source}
                  activity={styles.city}
                  description={image.description}
                  experience={true}
                />
              ))}
            </ScrollView>
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
  experienceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  experienceContainer: {
    backgroundColor: '#07090A',
    borderRadius: 20,
    flex: 1,
    height: 500,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
