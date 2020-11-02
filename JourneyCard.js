import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const JourneyCard = ({src, activity, best}) => {
  return (
    <>
      <View>
        <Image style={activity ? activity : best} source={src} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default JourneyCard;
