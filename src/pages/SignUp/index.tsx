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

const SignUp = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bgImage.png')}
      style={styles.background}>
      <View style={styles.overlay}>
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
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.clickableText1}>Create</Text>
          </TouchableOpacity>
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
});

export default SignUp;
