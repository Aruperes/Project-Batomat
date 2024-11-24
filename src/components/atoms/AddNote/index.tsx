import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const AddNote = () => {
  return (
    <>
      <TouchableOpacity style={styles.contentWrapper} activeOpacity={0.3}>
        <Text style={styles.text}>Add Note...</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#C0ADAD',
    height: 90,
    borderRadius: 10,
    elevation: 5,
    opacity: 0.5,
  },
  text: {
    paddingLeft: 26,
    paddingTop: 30,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#2F2A36',
    width: 221,
  },
});
