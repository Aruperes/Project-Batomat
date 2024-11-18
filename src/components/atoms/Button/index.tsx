import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';

const Button = ({
  color = '#F0DFBD',
  text,
  textColor = '#2F2A36',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.backButton}
        onPress={onPress}>
        {icon === 'back-button' && <BackButton />}
      </TouchableOpacity>
    );
  }
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
  backButton: {
    width: 50,
    height: 33,
    justifyContent: 'center', // This centers the arrow vertically
    alignItems: 'center', // This centers the arrow horizontally
  },
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
