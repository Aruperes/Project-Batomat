import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Diseases = () => {
  const diseases = [
    { title: 'Layu Fusarium', description: 'Gejala layu fusarium pada awal serangan dapat ditandai dengan adanya tanaman...' },
    { title: 'Bercak Daun', description: 'Bercak Daun disebabkan oleh cendawan Cercospora capsici, pada daun yang ter...' },
    { title: 'Layu Bakteri', description: 'Gejalanya terlihat jika pucuk tanaman layu atau daun tua menguning. Jika batang...' },
    { title: 'Mosaik', description: 'Penyakit mosaik ditandai dengan adanya warna seperti mosaik pada daun dan...' },
    { title: 'Buah Busuk', description: 'Ada dua macam cendawan penyebab busuk buah pada tomat. Yang pertama...' },
    { title: 'Busuk Daun', description: 'Penyebab penyakit busuk daun adalah cendawan Phytophthora infestans. Gejala...' },
  ];

  return (
    <View style={styles.overlay}>
      <Text style={styles.head}>Penyakit</Text>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        {diseases.map((disease, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.title}>{disease.title}</Text>
            <Text style={styles.description}>{disease.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#F9F7E4',
    padding: 20,
  },
  head: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  contentWrapper: {
    paddingBottom: 100,
  },
  box: {
    backgroundColor: '#DED29E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#2F2A36',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#2F2A36',
    marginTop: 5,
  },
});

export default Diseases;
