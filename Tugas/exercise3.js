import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./asets/uk.png')} />
      </View>
      <View style={styles.image} />
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 65,
    width: 300,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  blackBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
    margin: 10,
  },

  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
    margin: 5,
  },
});
