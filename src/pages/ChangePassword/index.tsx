import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import BackButton from '../../assets/icon/BackButton.svg';

const ChangePassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackButton width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Ubah kata sandi</Text>
      </View>
      <Text style={styles.infoText}>
        Kata sandi anda harus minimal 6 karakter dan harus kombinasi huruf dan
        angka
      </Text>
      <TextInput
        placeholder="Kata sandi saat ini"
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Kata sandi baru"
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Ketik ulang kata sandi baru"
        style={styles.input}
        secureTextEntry
      />
      <Text style={styles.forgotPasswordText}>Lupa kata sandi?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UBAH KATA SANDI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7E4', // Warna latar belakang
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F7E4',
    borderBottomWidth: 1,
    borderBottomColor: '#C5C5C5',
    height: 70,
    width: 450,
    marginLeft: -20,
    marginTop: -20,
  },
  backButton: {
    fontSize: 24,
    color: '#292D32',
    marginLeft: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#292D32',
    marginLeft: 30,
  },
  infoText: {
    fontSize: 15,
    width: 350,
    color: '#333',
    marginTop: 50,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#CFCCB3',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    marginTop: 35,
    color: '#333',
    height: 55,
    width: 340,
    marginLeft: 15,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#333',
    marginTop: 15,
    marginRight: 15,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#A99E8B',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 75,
    width: 220,
    height: 55,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
