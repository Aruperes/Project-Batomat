import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
});
