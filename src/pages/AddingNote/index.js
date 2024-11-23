import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../components/atoms';
import {MenuButton, Header} from '../../components/molecules';
import {Heart} from '../../assets/icon';
import {firebase} from '../../config/Firebase';

const AddingNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = () => {
    firebase
      .firestore()
      .collection('notes')
      .add({
        title,
        note,
      })
      .then(() => {
        setTitle('');
        setNote('');
        navigation.goBack();
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          text="Notes"
          backButton={true}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={handleAdd}>
          <Text style={styles.text}> Done </Text>
        </TouchableOpacity>
      </View>
      <>
        <View style={styles.container2}>
          <Gap height={18} />
          <View style={styles.contentWrapper}>
            <TextInput
              placeholder="Title..."
              value={title}
              onChangeText={text => setTitle(text)}
              style={styles.title}
            />
            <TextInput
              placeholder="Note..."
              value={note}
              onChangeText={text => setNote(text)}
              style={styles.text2}
              multiline
            />
            <TouchableOpacity style={styles.photo}>
              <Image source={Heart} />
            </TouchableOpacity>
          </View>
        </View>
      </>
      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </>
  );
};

export default AddingNote;

const styles = StyleSheet.create({
  title: {
    paddingLeft: 26,
    paddingTop: 30,
    width: 296,
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#2F2A36',
  },
  photo: {
    paddingLeft: 316,
    paddingTop: 430,
  },
  text2: {
    paddingLeft: 41,
    paddingTop: 27,
    width: 296,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#000000',
  },
  text: {
    paddingLeft: 150,
    paddingTop: 38,
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#020202',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 2,
  },
  contentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: 376,
    height: 630,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F7E4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flex: 9,
    backgroundColor: '#F9F7E4',
    marginLeft: 22,
    marginRight: 22,
  },
  container3: {
    flex: 1,
    backgroundColor: '#F9F7E4',
  },
});
