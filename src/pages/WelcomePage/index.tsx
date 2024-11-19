import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {Gap} from '../../components/atoms';

const WelcomePage = ({navigation}) => {
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
          toValue: 20,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [floatAnim]);

  return (
    <ImageBackground
      source={require('../../assets/images/bg2.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.contentWrapper,
            {transform: [{translateY: floatAnim}]},
          ]}>
          <Text style={styles.welcomeText}>Halo Nama Lengkap,</Text>
          <Text style={styles.pantun}>
            Berlayar perahu menuju darat,{'\n'}
            Angin bertiup terasa hangat.{'\n'}
            Dengan senyuman hati terpaut,{'\n'}
            <Text style={styles.boldText}>Selamat datang di Batomat!</Text>
          </Text>
          <Gap height={20} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Lanjut</Text>
          </TouchableOpacity>
        </Animated.View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentWrapper: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 10,
  },
  pantun: {
    fontSize: 16,
    color: '#2F2A36',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 24,
  },
  boldText: {
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2F2A36',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#F4E8D0',
  },
});

export default WelcomePage;
