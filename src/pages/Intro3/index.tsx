import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Pt, Titik3} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Intro3 = ({navigation}) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigation.replace('Intro1');
    }, 4000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleNavigation = screen => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg2.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.contentWrapper}>
          <Gap height={20} />
          <Pt />
          <Gap height={20} />
          <Titik3 />
          <Gap height={20} />
          <Text style={styles.title}>Simpan Catatan</Text>
          <Text style={styles.subtitle}>
            Semua catatan tentang gejala penyakit bisa disimpan di fitur notes
          </Text>
          <Gap height={50} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonDaftar]}
              onPress={() => handleNavigation('SignUp')}>
              <Text style={styles.buttonTextDaftar}>Daftar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonMasuk]}
              onPress={() => handleNavigation('SignIn')}>
              <Text style={styles.buttonTextMasuk}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 280,
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonDaftar: {
    backgroundColor: '#F0DFBD',
  },
  buttonMasuk: {
    backgroundColor: '#2F2A36',
  },
  buttonTextDaftar: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#2F2A36',
  },
  buttonTextMasuk: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#F0DFBD',
  },
});

export default Intro3;
