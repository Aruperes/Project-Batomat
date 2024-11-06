import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bgImage.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.contentWrapper}>
          <Text style={styles.head}>
            Sign <Text style={styles.headBold}>In</Text>
          </Text>
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Type your password" />
          <Gap height={24} />
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.clickableText1}>Sign In</Text>
          </TouchableOpacity>
          <Gap height={12} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.clickableText}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  clickableText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2F2A36',
    backgroundColor: '#F0DFBD',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 85,
  },
  clickableText1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F0DFBD',
    backgroundColor: '#2F2A36',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 125,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 24,
    borderRadius: 20,
  },
  head: {
    fontFamily: 'Poppins-Regular',
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    marginBottom: 24,
  },
  headBold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default SignIn;
