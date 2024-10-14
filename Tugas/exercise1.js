import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('./asets/fotodiri.jpg')} />
        <Text style={styles.name}>Aruperes, Revando Karlhen</Text>
        <Text style={styles.Title}>Computer Science</Text>
        <Text style={styles.short}>
          3rd year student of informatics at the Klabat University. I am a
          person who's interested in Mobile Apps and Web App.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>About Me</Text>
        <Text style={styles.isi}> Email: S22210120@student.unklab.ac.id </Text>
        <Text style={styles.isi}> Phone: 089698035966</Text>
        <Text style={styles.isi}> Address: Langowan Utara</Text>
        <Text style={styles.isi}> Religion: Kristen Protestan </Text>
        <Text style={styles.isi}> Nationality : Indonesia </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>Education</Text>
        <Text style={styles.isi}> 2018-2021 - SMA N 9 Binsus Manado</Text>
        <Text style={styles.isi}> 2022-Now - Computer Science</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>Personal Skill</Text>
        <Text style={styles.isi}>
          - Python - JavaScript - Unity - Figma - Photoshop
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#696969',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 80,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#DEB887',
  },
  Title: {
    fontSize: 18,
    color: '#BDB76B',
    marginBottom: 20,
  },
  short: {
    fontSize: 14,
    fontFamily: 'serif',
    color: 'white',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFF0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 15,
  },
  info: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#BDB76B',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  isi: {
    fontSize: 14,
    color: 'black',
    marginBottom: 15,
    fontFamily: 'roboto',
  },
});

export default App;
