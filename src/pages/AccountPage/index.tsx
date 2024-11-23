import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {MenuButton} from '../../components/molecules';
import {FavoritePage, Info, Share, Setting, Logout} from '../../assets/icon';

const AccountPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header Profil */}
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          <Image
            style={styles.logo1}
            source={require('../../assets/images/profile.png')}
          />
        </View>
        <Text style={styles.name}>Nama Lengkap</Text>
        <Text style={styles.email}>username@gmail.com</Text>
        <View style={styles.line} />
        {/* Menu Pilihan */}
        <TouchableOpacity style={styles.button}>
          <MenuItem
            icon={Info}
            text="Info"
            onPress={() => navigation.navigate('InfoPage')}
          />
          <MenuItem
            icon={Share}
            text="Bagikan"
            onPress={() => navigation.navigate('SharePage')}
          />
          <MenuItem
            icon={FavoritePage}
            text="Favorit"
            onPress={() => navigation.navigate('FavoritePage')}
          />
          <MenuItem
            icon={Setting}
            text="Ubah kata sandi"
            onPress={() => navigation.navigate('ChangePassword')}
          />
          <MenuItem
            icon={Logout}
            text="Keluar"
            onPress={() => navigation.navigate('SignIn')}
          />
        </TouchableOpacity>
      </View>

      {/* Menu Button */}
      <View style={styles.menuButtonWrapper}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

// Komponen MenuItem
const MenuItem = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Image source={icon} style={styles.menuIcon} />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
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
    color: '#FFFFFF',
    marginBottom: 140,
    marginLeft: 36,
  },
  profileContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: -110,
    alignItems: 'center',
    paddingVertical: 20,
    height: 560,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
    marginBottom: 10,
  },
  logo1: {
    width: 100,
    height: 100,
    marginLeft: -10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#292D32',
  },
  email: {
    fontSize: 14,
    color: '#4E4E4E',
  },
  line: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    width: 325,
    marginTop: 20,
    marginVertical: -20,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 5,
    marginLeft: -150,
  },
  menuIcon: {
    width: 27,
    height: 24,
    marginRight: 14,
  },
  menuText: {
    fontSize: 14,
    color: '#000',
  },
  menuButtonWrapper: {
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
