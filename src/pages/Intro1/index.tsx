import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Pl, Titik} from '../../assets/icon';
import {Gap, Btn} from '../../components/atoms';
import Floating from '../../components/molecules/Floating';

const Intro1 = ({navigation}) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigation.replace('Intro2');
    }, 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [navigation]);

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
          <Floating>
            <Pl />
          </Floating>
          <Gap height={20} />
          <Titik />
          <Gap height={20} />
          <Text style={styles.title}>Layanan Terlengkap</Text>
          <Text style={styles.subtitle}>
            hasil panen bisa menjadi lebih sehat dan segar dengan fitur yang
            tersedia
          </Text>
          <Gap height={50} />
          <View style={styles.buttonContainer}>
            <Btn
              text="Daftar"
              color="#F0DFBD"
              textColor="#2F2A36"
              onPress={() => navigation.navigate('SignUp')}
            />
            <Btn
              text="Masuk"
              color="#2F2A36"
              textColor="#F0DFBD"
              onPress={() => navigation.navigate('Option')}
            />
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
});

export default Intro1;
