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
        <Button
          text="Sign In"
          color="#2F2A36"
          textColor="#F0DFBD"
          onPress={() => navigation.navigate('Hama')}
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
