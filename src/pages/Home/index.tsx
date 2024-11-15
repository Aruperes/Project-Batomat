import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Logo1} from '../../assets/icon';
import Swiper from 'react-native-swiper';

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
      <View style={styles.line} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#a0a0a0"
        />
        <Image
          style={styles.searchIcon}
          source={require('../../assets/icon/search.svg')} // Ganti dengan path ikon pencarian Anda
        />
      </View>
      <ScrollView>
        <View style={styles.box1}>
          <Swiper style={styles.wrapper}>
            <View testID="Hello" style={styles.slide1}>
              <Text style={styles.text}>Tomat pasti segar!</Text>
              <Text style={styles.text2}>
                inilah obat yang membuat buah tomat lebih segar dan sehat
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/solanum.png')}
              />
            </View>
            <View testID="Beautiful" style={styles.slide2}>
              <Text style={styles.text}>Perawatan yang baik</Text>
              <Text style={styles.text2}>
                Dengan perawatan yang baik membuat pertumbuhan lebih subur
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/nutrition.png')}
              />
            </View>
            <View testID="Simple" style={styles.slide3}>
              <Text style={styles.text}>Peran penting obat</Text>
              <Text style={styles.text2}>
                obat mencegah penyakit yang ada pada tumbuhan
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/obatomat.png')}
              />
            </View>
          </Swiper>
        </View>
      </ScrollView>
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
    marginHorizontal: 110, // Memberi jarak antara kedua logo
    marginTop: 21,
  },
  logo1: {
    width: 40, // Atur ukuran logo sesuai kebutuhan
    height: 40,
    marginHorizontal: 110, // Memberi jarak antara kedua logo
    marginTop: 21,
  },
  line: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    width: 325,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2', // Warna background search bar
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000', // Shadow untuk efek
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Untuk shadow di Android
    width: 370,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginTop: -10,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
    tintColor: '#292D32',
  },
  box1: {
    height: 285,
  },
  wrapper: {
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F7E4',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F7E4',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F7E4',
  },
  text: {
    color: '#292D32',
    fontSize: 24,
    marginTop: -50,
    marginLeft: 27,
    fontFamily: 'Poppins-SemiBold',
  },
  text2: {
    color: '#76756C',
    fontSize: 12,
    width: 200,
    marginLeft: 30,
  },
  image: {
    marginLeft: 80,
    marginTop: 10,
  },
});

export default SignIn;
