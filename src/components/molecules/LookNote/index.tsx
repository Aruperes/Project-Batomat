import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Gap, GapRow} from '../../atoms';
import {Trash, Favorite} from '../../../assets/icon';

const LookNote = ({text}) => {
  return (
    <>
      <TouchableOpacity style={styles.contentWrapper} activeOpacity={0.5}>
        <Text style={styles.text}>{text}</Text>
        <GapRow width={60} />
        <TouchableOpacity style={styles.button}>
          <Image source={Favorite} style={styles.photo2} />
        </TouchableOpacity>
        <GapRow width={8} />
        <TouchableOpacity style={styles.button}>
          <Image source={Trash} style={styles.photo} />
        </TouchableOpacity>
      </TouchableOpacity>
      <Gap height={14} />
    </>
  );
};

export default LookNote;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#D9D9D9',
    height: 90,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 26,
    paddingTop: 30,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#2F2A36',
    width: 221,
  },
  photo: {
    marginTop: 27,
  },
  photo2: {
    marginTop: 32,
  },
  button: {
    width: 40,
    height: 40,
  },
});
