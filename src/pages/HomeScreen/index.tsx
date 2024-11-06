import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Penyakit, Hama, Seed, Pupuk} from '../../assets/icon';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/home2.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Ba<Text style={styles.headBold}>Tomat</Text>
        </Text>
        <Text style={styles.subtitle}>Hasil Panen yang Berkualitas!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Penyakit />
          <Text style={styles.buttonText}>Disease</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Hama />
          <Text style={styles.buttonText1}>Pest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pupuk />
          <Text style={styles.buttonText}>Fertilizer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Seed />
          <Text style={styles.buttonText2}>Seed</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '45%',
    backgroundColor: '#678D74',
  },
  overlay: {
    position: 'absolute',
    top: '15%',
    left: '10%',
  },
  title: {
    fontSize: 40,
    color: '#F4E8D0',
    fontFamily: 'Poppins-Regular',
  },
  headBold: {
    fontFamily: 'Poppins-Bold',
    color: '#F4E8D0',
  },
  subtitle: {
    fontSize: 16,
    color: '#F4E8D0',
    fontFamily: 'Poppins-Regular',
    marginTop: -10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '105%',
  },
  button: {
    width: 141,
    height: 141,
    backgroundColor: '#E0DEB8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 5,
  },
  buttonText: {
    marginTop: -5,
    fontSize: 20,
    color: '#292D32',
    fontFamily: 'Poppins-Regular',
  },
  buttonText1: {
    marginTop: 15,
    fontSize: 20,
    color: '#292D32',
    fontFamily: 'Poppins-Regular',
  },
  buttonText2: {
    marginTop: -30,
    fontSize: 20,
    color: '#292D32',
    fontFamily: 'Poppins-Regular',
  },
});

export default HomeScreen;
