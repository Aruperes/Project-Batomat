import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LookNote, MenuButton} from '../../components/molecules';
//bikin show error message
// bikin appearance heartnya
const FavoritePage = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
      </View>
      <View style={styles.container2}>
        <LookNote text="List Obat" navigation={navigation} />
        <LookNote text="List Obat" navigation={navigation} />
        <LookNote text="List Obat" navigation={navigation} />
      </View>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default FavoritePage;

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
