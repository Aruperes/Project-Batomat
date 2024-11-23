import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../assets/icon/BackButton.svg';
import {Eyeoff, Eyeon} from '../../assets/icon';
const ChangePassword = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordNewVisible, setPasswordNewVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

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

      {/* Kata Sandi Saat Ini */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Kata sandi saat ini"
          style={styles.input}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? (
            <Eyeon width={20} height={20} />
          ) : (
            <Eyeoff width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>

      {/* Kata Sandi Baru */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Kata sandi baru"
          style={styles.input}
          secureTextEntry={!passwordNewVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordNewVisible(!passwordNewVisible)}>
          {passwordNewVisible ? (
            <Eyeon width={20} height={20} />
          ) : (
            <Eyeoff width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>

      {/* Konfirmasi Kata Sandi Baru */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ketik ulang kata sandi baru"
          style={styles.input}
          secureTextEntry={!passwordConfirmVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordConfirmVisible(!passwordConfirmVisible)}>
          {passwordConfirmVisible ? (
            <Eyeon width={20} height={20} />
          ) : (
            <Eyeoff width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#F9F7E4',
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CFCCB3',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 35,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
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
