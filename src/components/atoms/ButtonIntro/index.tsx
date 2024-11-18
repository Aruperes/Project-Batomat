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
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: textColor,
  }),
});
