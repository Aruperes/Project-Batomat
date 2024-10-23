import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {Logo1} from '../../assets/icon';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Logo1 style={styles.logo} />
        <Header text=" Sign Up" />
      </View>
      <Gap height={10} />
      <View style={styles.contentWrapper}>
        <View style={styles.profilContainer}>
          <View style={styles.profil}>
            <View style={styles.add}>
              <Text style={styles.addLabel}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  profilContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profil: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  add: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
  head: {
    flexDirection: 'row',
  },
  logo: {
    marginVertical: 43,
    marginLeft: 20,
  },
});
export default SignUp;
