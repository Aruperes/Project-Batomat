import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AddNote} from '../../components/atoms';
import {MenuButton, Header} from '../../components/molecules';

//bikin show error message
const EditNote = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header
          text="Notes"
          backButton={true}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Notes</Text>
      </View>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default EditNote;

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
    flex: 1,
    backgroundColor: '#F9F7E4',
  },
});
