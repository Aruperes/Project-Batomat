import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D6D6D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 410,
    height: 900,
  },
});
