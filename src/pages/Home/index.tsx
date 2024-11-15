import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.overlay}>
      {/* Header dengan kedua logo */}
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

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#a0a0a0"
        />
        <Image
          style={styles.searchIcon}
          source={require('../../assets/icon/search.svg')}
        />
      </View>

      <ScrollView>
        {/* Swiper untuk gambar utama */}
        <View style={styles.box1}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide}>
              <Text style={styles.text}>Tomat pasti segar!</Text>
              <Text style={styles.text2}>
                inilah obat yang membuat buah tomat lebih segar dan sehat
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/solanum.png')}
              />
            </View>
            <View style={styles.slide}>
              <Text style={styles.text}>Perawatan yang baik</Text>
              <Text style={styles.text2}>
                Dengan perawatan yang baik membuat pertumbuhan lebih subur
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/nutrition.png')}
              />
            </View>
            <View style={styles.slide}>
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

        {/* Container untuk latar belakang dan ScrollView horizontal */}
        <View style={styles.horizontalScrollBackground}>
          <Text style={styles.sectionTitle}>Lagi musim</Text>
          <ScrollView
            horizontal={true}
            style={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.imageBox}>
              <Image
                style={styles.image2}
                source={require('../../assets/images/image.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                style={styles.image2}
                source={require('../../assets/images/image11.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                style={styles.image2}
                source={require('../../assets/images/image6.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                style={styles.image2}
                source={require('../../assets/images/image4.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                style={styles.image2}
                source={require('../../assets/images/image2.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                style={styles.image2}
                source={require('../../assets/images/image1.png')}
              />
            </View>
          </ScrollView>
          <Text style={styles.descriptionTitle}>Lalat Buah</Text>
          <Text style={styles.descriptionText}>
            Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan
            sayap transparan
          </Text>
          <Text style={styles.detailLink}>Detail ➔</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#F9F7E4',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  logo: {
    width: 115,
    height: 35,
    marginHorizontal: 100,
  },
  logo1: {
    width: 40,
    height: 40,
    marginHorizontal: 110,
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
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: 370,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#292D32',
  },
  box1: {
    height: 285,
  },
  wrapper: {
    alignItems: 'center',
  },
  slide: {
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
  horizontalScrollBackground: {
    backgroundColor: '#EFEAD8',
    padding: 15,
    marginHorizontal: 10,
    marginTop: -10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#292D32',
    marginBottom: 10,
  },

  image2: {
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#292D32',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 12,
    color: '#76756C',
    marginTop: 5,
  },
  detailLink: {
    fontSize: 12,
    color: '#292D32',
    marginTop: 10,
    textAlign: 'right',
  },
});

export default SignIn;
