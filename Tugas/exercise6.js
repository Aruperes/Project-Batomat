import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const Regist = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    setTitle('Registration');
    const data = {
      name: name,
      userName: userName,
      email: email,
      address: address,
      phone: phone,
    };
    console.log(data);
  };

  const handleName = e => {
    setName(e);
  };
  const handleUserName = e => {
    setUserName(e);
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handleAddress = e => {
    setAddress(e);
  };
  const handlePhone = e => {
    setPhone(e);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title title={title} />
        <Input
          label="Name"
          placeholder="Masukan nama anda"
          onChangeText={handleName}
        />
        <Input
          label="Username"
          placeholder="Masukan username anda"
          onChangeText={handleUserName}
        />
        <Input
          label="Email"
          placeholder="Masukan email anda"
          onChangeText={handleEmail}
        />
        <Input
          label="Address"
          placeholder="Masukan alamat anda"
          onChangeText={handleAddress}
        />
        <Input
          label="Phone Number"
          placeholder="Masukan nomor telepon anda"
          onChangeText={handlePhone}
          type="numeric"
        />
        <Button label="Register" color="purple" onPress={handleClick} />
      </View>
    </ScrollView>
  );
};

export default Regist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
