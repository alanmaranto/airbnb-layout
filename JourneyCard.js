import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const JourneyCard = ({src}) => {
  return (
    <>
      <View>
        <Image style={styles.city} source={src} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});

export default JourneyCard;
