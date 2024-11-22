import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';
import {FavoritePage} from '../../assets/icon';

const AccountPage = ({navigation}) => {
  return (
    <>
      {/* Bagian Header Profil */}
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture} />
        <Text style={styles.nameText}>Nama Lengkap</Text>
        <Text style={styles.emailText}>username@gmail.com</Text>
      </View>

      {/* Bagian Konten */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FavoritePage')}>
          <View style={styles.button2}>
            <Image source={FavoritePage} />
            <Text style={styles.text}> Favorite</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu Navigasi */}
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: '#292D32',
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    marginBottom: 140,
    marginLeft: 36,
    color: '#FFFFFF',
  },
  profileContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: -110,
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#292D32',
  },
  emailText: {
    fontSize: 14,
    color: '#4E4E4E',
  },

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
