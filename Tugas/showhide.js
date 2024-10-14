import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const SignIn = () => {
  const [title, setTitle] = useState('Welcome');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleClick = () => {
    setTitle('Selamat Datang');
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
  };

  const handleUserName = e => {
    setUserName(e);
  };

  const handlePassword = e => {
    setPassword(e);
  };

  const secure = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handleUserName}
      />
      <Text style={styles.passText}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          onChangeText={handlePassword}
          secureTextEntry={secureText}
        />
        <TouchableOpacity onPress={secure}>
          <Text style={styles.showButton}>{secureText ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>
      <Button label="Sign In" onPress={handleClick} />
      <Button label="Register" color="green" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
  input: {
    flex: 1,
  },
  showButton: {
    fontWeight: 'bold',
    color: 'black',
  },
  passText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
