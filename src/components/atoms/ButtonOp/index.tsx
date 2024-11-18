import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

const ButtonOp = ({text, color, textColor, icon, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default ButtonOp;
