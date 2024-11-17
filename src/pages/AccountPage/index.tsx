import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';
import {FavoritePage} from '../../assets/icon';

//Ini kita baru buat hanya untuk akses favorit ya, soalnya kita nntau siapa p bagian ini
const AccountPage = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AccountPage')}>
          <View style={styles.button2}>
            <Image source={FavoritePage} />
            <Text style={styles.text}> Favorite</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 27,
  },
  button2: {
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 30,
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#000000',
  },
  container: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
  },
});
