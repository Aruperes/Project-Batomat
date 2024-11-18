import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Loading} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onSubmit = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setLoading(false);
        showMessage({
          message: 'Login Succesfully',
          type: 'success',
        });
        navigation.navigate('Home', {uid: user.uid});
      })
      .catch(error => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <>
      <View style={styles.overlay}>
        <Image source={require('../../assets/images/LogoIm.png')} />
        <View style={styles.contentWrapper}>
          <Text style={styles.head}>
            Sign <Text style={styles.headBold}>In</Text>
          </Text>
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            onChangeText={value => setEmail(value)}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Gap height={24} />
          <Button
            text="Sign In"
            color="#2F2A36"
            textColor="#F0DFBD"
            onPress={onSubmit}
          />
          <Gap height={12} />
          <Button
            text="Create New Account"
            onPress={() => navigation.navigate('SignUp')}
          />
          <Gap height={12} />
        </View>
      </View>
      {loading && <Loading />}
    </>
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
