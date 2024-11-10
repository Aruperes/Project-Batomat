import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.overlay}>
      <Image source={require('../../assets/images/LogoIm.png')} />
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
        <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
          <Text style={styles.clickableText1}>Sign In</Text>
        </TouchableOpacity>
        <Gap height={12} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.clickableText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clickableText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#2F2A36',
    backgroundColor: '#F0DFBD',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 87,
  },
  clickableText1: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#F0DFBD',
    backgroundColor: '#2F2A36',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 130,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#F9F7E4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '90%',
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
