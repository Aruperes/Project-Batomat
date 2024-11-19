import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
      <View style={styles.container2}>
        <Text>Home</Text>
      </View>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  container2: {
    flex: 4,
  },
  container3: {
    flex: 1,
  },
});
