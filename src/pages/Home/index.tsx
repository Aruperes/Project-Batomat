import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Logo1} from '../../assets/icon';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.overlay}>
      {/* Container untuk kedua logo agar sejajar */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/LogoIm.png')}
        />
        <Image
          style={styles.logo1}
          source={require('../../assets/images/profile.png')}
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.head}>
          Sign <Text style={styles.headBold}>In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#F9F7E4',
    flex: 1, // Agar overlay memenuhi layar
    alignItems: 'center', // Mengatur konten di tengah horizontal
  },
  header: {
    flexDirection: 'row', // Mengatur elemen di header menjadi baris
  },
  logo: {
    width: 115, // Atur ukuran logo sesuai kebutuhan
    height: 35,
    marginHorizontal: 100, // Memberi jarak antara kedua logo
    marginTop: 21,
  },
  logo1: {
    width: 40, // Atur ukuran logo sesuai kebutuhan
    height: 40,
    marginHorizontal: 85, // Memberi jarak antara kedua logo
    marginTop: 21,
  },
  contentWrapper: {
    width: '90%',
    padding: 24,
    borderRadius: 20,
  },
  head: {
    fontFamily: 'Poppins-Regular',
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    marginBottom: 24,
  },
  headBold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default SignIn;
