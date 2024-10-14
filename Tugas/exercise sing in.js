import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.header}>Welcome</Text>
      <Text style={styles.text1}>Username</Text>
      <TextInput placeholder="masukkan username anda" style={styles.border} />
      <Text style={styles.text1}>Password</Text>
      <TextInput placeholder="masukkan password anda" style={styles.border} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    height: 60,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  textbutton: {
    fontSize: 16,
    color: 'white',
  },
  header: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 40,
    marginBottom: 40,
  },
  text1: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
  },
  border: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 20,
  },
});
