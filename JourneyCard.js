import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const JourneyCard = ({src, activity, experience, best, list, description}) => {
  return (
    <>
      <View style={list ? list : null}>
        <Image style={activity ? activity : best} source={src} />
        {description ? (
          <>
            <View
              style={
                experience
                  ? styles.descriptionContainer
                  : styles.descriptionWhiteContainer
              }>
              <Text
                style={
                  experience ? styles.description : styles.descriptionWhite
                }>
                {description}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: '#58595C',
    width: 250,
    height: 100,
    marginRight: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  descriptionWhiteContainer: {
    backgroundColor: '#f2f3f5',
    width: 250,
    height: 100,
    marginRight: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  description: {
    color: '#FFF',
    fontSize: 18,
    width: 250,
    flex: 1,
    fontWeight: '500',
    marginRight: 10,
    marginVertical: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
  descriptionWhite: {
    color: '#07090A',
    fontSize: 18,
    width: 250,
    flex: 1,
    fontWeight: '500',
    marginRight: 10,
    marginVertical: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
});

export default JourneyCard;
