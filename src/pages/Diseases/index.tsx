import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import BackButton from '../../assets/icon/BackButton.svg';

const diseases = [
  {
    title: 'Layu Fusarium',
    description:
      'Gejala layu fusarium pada awal serangan dapat ditandai dengan adanya tanaman...',
  },
  {
    title: 'Bercak Daun',
    description:
      'Bercak Daun disebabkan oleh cendawan Cercospora capsici, pada daun yang ter...',
  },
  {
    title: 'Layu Bakteri',
    description:
      'Gejalanya terlihat jika pucuk tanaman layu atau daun tua menguning. Jika batang...',
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
            <Text style={styles.diseaseTitle}>{disease.title}</Text>
            <Text style={styles.diseaseDescription}>{disease.description}</Text>
          </View>
        ))}
      </ScrollView>
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
    Index: 1,
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
  },
  diseaseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4e4a41',
    marginBottom: 8,
    textAlign: 'center',
  },
  diseaseDescription: {
    fontSize: 14,
    color: '#4e4a41',
    marginRight: 25,
    marginLeft: 100,
  },
});
