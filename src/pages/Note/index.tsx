import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MenuButton} from '../../components/molecules';

const Note = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Note</Text>
      </View>
      <View style={styles.container2}>
        <Text>Note</Text>
      </View>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default Note;

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
