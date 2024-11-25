// TextInput.js
import React from 'react';
import {TextInput as RNTextInput, View, Text, StyleSheet} from 'react-native';

const TextInput = ({
  label,
  secureTextEntry,
  placeholder,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});

export default TextInput;
