import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import {Src} from '../../assets/icon';
import {MenuButton} from '../../components/molecules';

const Home = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      source: require('../../assets/images/image.png'),
      text: 'Lalat Buah',
      title:
        'Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan sayap transparan',
    },
    {
      source: require('../../assets/images/image1.png'),
      text: 'Cacing Tanah',
      title:
        'Serangan hama ini pada tanaman tomat di tandai dengan terpotongnya tanaman',
    },
    {
      source: require('../../assets/images/image6.png'),
      text: 'Ulat buah',
      title:
        'Umumnya ulat buah tomat ini menyerang daun, bunga dan buah tanaman tomat.',
    },
    {
      source: require('../../assets/images/image4.png'),
      text: 'Kutu Daun',
      title:
        'Hama kutu daun bersayap putih ini merupakan salah satu hama paling berbahaya',
    },
  ];

  return (
    <View style={styles.overlay}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/LogoIm.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('AccountPage')}>
          <Image
            style={styles.logo1}
            source={require('../../assets/images/profile.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#a0a0a0"
        />
        <Src style={styles.searchIcon} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box1}>
          <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={3}>
            <View style={styles.slide}>
              <Text style={styles.text}>Tomat pasti segar!</Text>
              <Text style={styles.text2}>
                Inilah obat yang membuat buah tomat lebih segar dan sehat
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/tomat.png')}
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
                Obat mencegah penyakit yang ada pada tumbuhan
              </Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/obatomat.png')}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.horizontalScrollBackground}>
          <Text style={styles.sectionTitle}>Populer</Text>
          <ScrollView
            horizontal={true}
            style={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}>
            {images.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(index)}
                style={[
                  styles.imageBox,
                  selectedImage === index && styles.selectedImageBox,
                ]}>
                <Image
                  style={[
                    styles.image2,
                    selectedImage === index && styles.selectedImage,
                  ]}
                  source={item.source}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.descriptionTitle}>
            {images[selectedImage].text}
          </Text>
          <Text style={styles.descriptionText}>
            {images[selectedImage].title}
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.logo2}
            source={require('../../assets/images/penyakit.png')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Diseases')}
            style={styles.textContainer}>
            <Text style={styles.title}>PENYAKIT</Text>
            <Text style={styles.description}>
              lihat disini untuk mengetahui penyakit yang menyerang tomatmu
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.logo2}
            source={require('../../assets/images/hama.png')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Hama')}
            style={styles.textContainer}>
            <Text style={styles.title}>HAMA</Text>
            <Text style={styles.description}>
              lihat disini untuk mengetahui hama yang menyerang tomatmu
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.logo2}
            source={require('../../assets/images/obat.png')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Obat')}
            style={styles.textContainer}>
            <Text style={styles.title}>OBAT</Text>
            <Text style={styles.description}>
              lihat disini untuk mengetahui obat untuk mengobati tomatmu
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.logo2}
            source={require('../../assets/images/obat.png')}
          />
          <View style={styles.textContainer} />
        </View>
      </ScrollView>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
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
    padding: 5,
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
    height: 300,
    marginTop: 20,
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
    marginHorizontal: 30,
    marginTop: 10,
    width: 350,
    height: 170,
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
  imageBox: {
    marginLeft: 10,
  },
  image2: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  selectedImageBox: {
    marginLeft: 17,
  },
  selectedImage: {
    width: 85,
    height: 85,
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D4D0A6',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    width: 350,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: 29,
  },
  logo2: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#292D32',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#4E4E4E',
  },
  ScrollView: {
    flex: 1,
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

export default Home;
