import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.overlay}>
      <Image source={require('../../assets/images/LogoIm.png')} />
      <View style={styles.contentWrapper}>
        <Text style={styles.head}>
          Sign <Text style={styles.headBold}>Up</Text>
        </Text>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Create"
          color="#2F2A36"
          textColor="#F0DFBD"
          onPress={() => navigation.navigate('SignIn')}
        />
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

export default SignUp;
