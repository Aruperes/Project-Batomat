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
<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
          <Text style={styles.clickableText1}>Sign In</Text>
        </TouchableOpacity>
=======
        <Button
          text="Sign In"
          color="#2F2A36"
          textColor="#F0DFBD"
          onPress={() => navigation.navigate('Home')}
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
>>>>>>> ffd8ce53a6c421b0e89febc591fc085c703c1843
        <Gap height={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
>>>>>>> ffd8ce53a6c421b0e89febc591fc085c703c1843
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
