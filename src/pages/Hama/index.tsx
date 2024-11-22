import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {MenuButton, Header} from '../../components/molecules';
import BackButton from '../../assets/icon/BackButton.svg';
import Kutu from '../../assets/icon/kutudaun.svg';
import Ulat from '../../assets/icon/ulatbuah.svg';
import Aphis from '../../assets/icon/kutuaphis.svg';
import Cacing from '../../assets/icon/cacingtanah.svg';
import Lalat from '../../assets/icon/lalatbuah.svg';
import Kebul from '../../assets/icon/kutukebul.svg';
import Down from '../../assets/icon/arrowdown.svg';

const hama = [
  {
    title: 'Kutu Daun Thrips Tomat',
    description:
      'Ciri-ciri kutu daun thrips adalah panjangnya 1 mm dan berwarna hitam. Kutu daun thrips ini meny.....',
    icon: Kutu,
  },

  {
    title: 'Ulat Buah Tomat',
    description:
      'Umumnya ulat buah tomat ini menyerang daun, bunga dan buah tanaman tomat. Ciri-ciri hama ulat.....',
    icon: Ulat,
  },

  {
    title: 'Kutu Daun Aphis Hijau Pada Tomat',
    description:
      'Aphis hijau lebih sering di sebut kutu daun hijau. Ciri-ciri aphis hijau ada.....',
    icon: Aphis,
  },

  {
    title: 'Cacing Tanah',
    description:
      'Serangan hama ini pada tanaman tomat di tandai dengan terpotongnya tanaman pada pang.....',
    icon: Cacing,
  },

  {
    title: 'Lalat Buah',
    description:
      'Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan sayap transparan.....',
    icon: Lalat,
  },

  {
    title: 'Kutu Kebul',
    description:
      'Hama kutu daun bersayap putih ini merupakan salah satu hama paling berbahaya dalam budidaya tanam.....',
    icon: Kebul,
  },
];

const Hama = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header text="Hama" />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackButton width={24} height={24} />
        </TouchableOpacity>

        <ScrollView style={styles.contentWrapper}>
          {hama.map((disease, index) => (
            <View key={index} style={styles.diseaseCard}>
              {disease.icon && <disease.icon style={styles.diseaseIcon} />}
              <View style={{flex: 1}}>
                <Text style={styles.diseaseTitle}>{disease.title}</Text>
                <Text style={styles.diseaseDescription}>
                  {disease.description}
                </Text>
              </View>
              <TouchableOpacity style={styles.arrowButton}>
                <Down width={24} height={24} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.menuButtonWrapper}>
          <MenuButton navigation={navigation} />
        </View>
      </View>
    </>
  );
};

export default Hama;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    backgroundColor: '#F9F7E4',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: -20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 43,
    zIndex: 1,
  },
  diseaseCard: {
    backgroundColor: '#D0C97D',
    padding: 16,
    height: 103,
    marginBottom: 13,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Tambahkan ini untuk mendukung positioning anak
  },

  diseaseIcon: {
    width: 60,
    height: 60,
    marginRight: 16, // Memberikan jarak antara icon dan teks
  },
  diseaseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4e4a41',
    textAlign: 'left', // Tetap rata kiri
    top: 2,
  },
  diseaseDescription: {
    fontSize: 14,
    color: '#4e4a41',
    textAlign: 'left', // Tetap rata kiri
    marginTop: 4, // Memberikan sedikit jarak atas
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
    height: 65,
  },

  arrowButton: {
    position: 'absolute',
    bottom: 1, // Adjusts the arrow's vertical position
    right: 16, // Adjusts the arrow's horizontal position
    width: 20,
    height: 20,
  },
});
