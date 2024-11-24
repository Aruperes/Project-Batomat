import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Gap, GapRow} from '../../atoms';
import {Trash, Favorite} from '../../../assets/icon';

const LookNote = ({item, navigation}) => {
  if (!item || !item.title || !item.note) {
    return null;
  }

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.contentWrapper}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('EditNote', {noteId: item.id})}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {truncateText(item.title, 20)} {/* Limit title to 20 characters */}
          </Text>
          <Text style={styles.note} numberOfLines={1} ellipsizeMode="tail">
            {truncateText(item.note, 30)} {/* Limit note to 30 characters */}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={Favorite} style={styles.photo2} />
          </TouchableOpacity>
          <GapRow width={8} />
          <TouchableOpacity style={styles.button}>
            <Image source={Trash} style={styles.photo} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Gap height={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#D9D9D9',
    height: 90,
    borderRadius: 10,
    elevation: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 10, // Add padding to prevent text from touching buttons
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -20}], // Center the buttons vertically
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#2F2A36',
    marginBottom: 5,
    width: '80%', // Limit width to prevent overlap with buttons
  },
  note: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#2F2A36',
    width: '80%', // Limit width to prevent overlap with buttons
  },
  photo: {
    width: 24,
    height: 24,
  },
  photo2: {
    width: 24,
    height: 24,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LookNote;
