import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import ButtonOp from '../../components/atoms/ButtonOp';

const Option = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bgsign.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <ButtonOp
          text="Masuk dengan Apple"
          color="#FFFFFF"
          textColor="#2F2A36"
          icon={require('../../assets/images/apple.png')}
          onPress={() => navigation.navigate('SignIn')}
        />
        <ButtonOp
          text="Masuk dengan Gmail"
          color="#FFFFFF"
          textColor="#2F2A36"
          icon={require('../../assets/images/gmail.png')}
          onPress={() => navigation.navigate('SignIn')}
        />
        <ButtonOp
          text="Masuk dengan Email"
          color="#F9F7E4"
          textColor="#2F2A36"
          icon={require('../../assets/images/mail.png')}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 100,
  },
});
