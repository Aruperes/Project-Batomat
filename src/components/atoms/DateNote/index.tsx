import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gap from '../Gap';

const DateNote = ({date}) => {
  return (
    <View>
      <Text style={styles.text}>{date}</Text>
      <Gap height={10} />
    </View>
  );
};

export default DateNote;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#292D32',
  },
});
