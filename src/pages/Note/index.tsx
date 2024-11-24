import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DateNote, AddNote} from '../../components/atoms';
import {LookNote, MenuButton} from '../../components/molecules';

//bikin show error message
// bikin appearance heartnya
const Note = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Notes</Text>
      </View>
      <View style={styles.container2}>
        <DateNote date="Previous 30 Days" />
        <LookNote text="List Obat" navigation={navigation} />
        <AddNote />
      </View>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default Note;

const styles = StyleSheet.create({
  title: {
    paddingLeft: 32,
    paddingTop: 29,
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
    color: '#292D32',
    // Text shadow properties
    textShadowColor: '#000000', // Shadow color (black)
    textShadowOffset: {width: 0, height: 2}, // Shadow offset (horizontal, vertical)
    textShadowRadius: 4, // How much the shadow should blur
  },
  container: {
    flex: 2,
    backgroundColor: '#F9F7E4',
  },
  container2: {
    flex: 8,
    backgroundColor: '#F9F7E4',
    marginLeft: 22,
    marginRight: 22,
  },
  container3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#292D32',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 95,
  },
});
