import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Header = ({text, backButton, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="back-button" onPress={onPress} />
      )}
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F7E4',
    paddingLeft: 24,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#020202',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 2,
    paddingLeft: 30,
  },
});
