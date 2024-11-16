import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {MenuButton, Header} from '../../components/molecules';
import BackButton from '../../assets/icon/BackButton.svg';
import Down from '../../assets/icon/Arrow Down Contained 10.svg';
import Images from '../../assets/icon/image.svg';
import Bercak from '../../assets/icon/bercakdaun.svg';
import Layu from '../../assets/icon/layubakteri.svg'

const diseases = [
  {
    title: 'Layu Fusarium',
    description:
      'Gejala layu fusarium pada awal serangan dapat ditandai dengan adanya tanaman...',
    icon: Images,
  },
  {
    title: 'Bercak Daun',
    description:
      'Bercak Daun disebabkan oleh cendawan Cercospora capsici, pada daun yang ter...',
    icon: Bercak,
  },
  {
    title: 'Layu Bakteri',
    description:
      'Gejalanya terlihat jika pucuk tanaman layu atau daun tua menguning. Jika batang...',
    icon: Layu,
  },
  {
    title: 'Mosaik',
    description:
      'Penyakit mosaik ditandai dengan adanya warna seperti mosaik pada daun dan...',
  },
  {
    title: 'Buah Busuk',
    description:
      'Ada dua macam cendawan penyebab busuk buah pada tomat. Yang pertama...',
  },
  {
    title: 'Busuk Daun',
    description:
      'Penyebab penyakit busuk daun adalah cendawan Phytophthora infestans. Gejala...',
  },
];

const Diseases = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header text="Penyakit" />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <BackButton width={24} height={24} />
      </TouchableOpacity>

      <ScrollView style={styles.contentWrapper}>
        {diseases.map((disease, index) => (
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
  );
};

export default Diseases;

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
    flexDirection: 'row', // Membuat layout horizontal
    alignItems: 'center', // Vertikal tengah
  },
  diseaseIcon: {
    width: 50,
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
    height: 80,
  },

  arrowButton: {
    position: 'absolute',
    bottom: 1, // Adjusts the arrow's vertical position
    right: 16,  // Adjusts the arrow's horizontal position
    width: 24,
    height: 24,
  },

});
