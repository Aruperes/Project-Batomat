import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BackButton from '../../assets/icon/BackButton.svg';
import {Eyeoff, Eyeon} from '../../assets/icon';
import {MenuButton} from '../../components/molecules';
import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth';

const ChangePassword = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordNewVisible, setPasswordNewVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Kata sandi baru tidak cocok.');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Error', 'Kata sandi baru harus minimal 6 karakter.');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        currentPassword,
      );

      await updatePassword(userCredential.user, newPassword);

      Alert.alert('Sukses', 'Kata sandi berhasil diubah.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SignIn'),
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        'Gagal mengubah kata sandi. Periksa email atau kata sandi Anda.',
      );
    }
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Kata sandi saat ini"
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? (
            <Eyeon width={20} height={20} />
          ) : (
            <Eyeoff width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Kata sandi baru"
          style={styles.input}
          secureTextEntry={!passwordNewVisible}
          value={newPassword}
          onChangeText={setNewPassword}
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

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ketik ulang kata sandi baru"
          style={styles.input}
          secureTextEntry={!passwordConfirmVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Ubah Sandi</Text>
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
    backgroundColor: '#292D32',
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
    color: '#F0DFBD',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
