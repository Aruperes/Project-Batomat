import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BackButton from '../../assets/icon/BackButton.svg';
import {MenuButton} from '../../components/molecules';

const InfoPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackButton width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Info</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.thankYouText}>
          TERIMA KASIH SUDAH MENGUNJUNGI HALAMAN INI!!
        </Text>
        <Image
          source={require('../../assets/images/LogoIm.png')}
          style={styles.logo}
        />
        <Text style={styles.description}>
          Aplikasi ini dirancang untuk membantu petani dalam mengidentifikasi
          masalah pada tanaman mereka. Aplikasi ini menyediakan basis
          pengetahuan tentang gejala, penyebab, dan dampak dari setiap hama atau
          penyakit, disertai rekomendasi pengendalian yang ramah lingkungan.
        </Text>
        <Text style={styles.description}>
          Diharapkan, aplikasi ini dapat meningkatkan efisiensi pengelolaan
          tanaman tomat, mencegah kerugian, dan mendukung praktik pertanian
          berkelanjutan.
        </Text>
      </View>

      {/* Menu Button */}
      <View style={styles.menuButtonWrapper}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7E4', // Warna latar belakang
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F7E4',
    borderBottomWidth: 1,
    borderBottomColor: '#C5C5C5',
    height: 70,
    width: 450,
    marginLeft: -20,
    marginTop: -20,
  },
  backButton: {
    fontSize: 24,
    color: '#292D32',
    marginLeft: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#292D32',
    marginLeft: 30,
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  thankYouText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#292D32',
    textAlign: 'center',
    marginTop: 25,
    lineHeight: 30,
  },
  logo: {
    width: 190,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30,
  },
  description: {
    fontSize: 18,
    color: '#292D32',
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 25,
    width: 330,
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

export default InfoPage;
