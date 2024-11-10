import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Pl, Titik} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Intro1 = ({navigation}) => {
  const timeoutRef = useRef(null);

  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    timeoutRef.current = setTimeout(() => {
      navigation.replace('Intro2');
    }, 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [floatAnim, navigation]);

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
          <Animated.View style={{transform: [{translateY: floatAnim}]}}>
            <Pl />
          </Animated.View>
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

export default Intro1;
