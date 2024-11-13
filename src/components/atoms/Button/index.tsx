import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({color = '#F0DFBD', text, textColor = '#2F2A36', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 39,
    paddingRight: 39,
    height: 45,
    elevation: 5, // Elevation for Android shadow
  }),
  text: textColor => ({
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: textColor,
  }),
});
