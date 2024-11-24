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
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {firebase} from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const AddingNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleCreateNote = async () => {
    // Validate inputs
    if (!title.trim() || !note.trim()) {
      showMessage({
        message: 'Title and note content are required',
        type: 'warning',
      });
      return;
    }

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      showMessage({
        message: 'Please sign in to create notes',
        type: 'warning',
      });
      return;
    }

    const db = getFirestore(firebase);
    try {
      await addDoc(collection(db, 'notes'), {
        title: title.trim(),
        note: note.trim(),
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      showMessage({
        message: 'Note created successfully',
        type: 'success',
      });

      navigation.goBack();
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Header
          text="Notes"
          backButton={true}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleCreateNote}
          style={styles.doneButton}>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Gap height={18} />
        <View style={styles.contentWrapper}>
          <TextInput
            placeholder="Title..."
            value={title}
            onChangeText={setTitle}
            style={styles.title}
            placeholderTextColor="#666"
          />
          <TextInput
            placeholder="Note..."
            value={note}
            onChangeText={setNote}
            style={styles.text2}
            multiline
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.photo}>
            <Image source={Heart} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F7E4',
  },
  doneButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    paddingLeft: 26,
    paddingTop: 30,
    width: '80%',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#2F2A36',
  },
  photo: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  text2: {
    paddingLeft: 41,
    paddingTop: 27,
    width: '80%',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#000000',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#020202',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 2,
  },
  contentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    flex: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  container: {
    height: 60,
    backgroundColor: '#F9F7E4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: '#F9F7E4',
    marginHorizontal: 22,
  },
  container3: {
    height: 95,
    backgroundColor: '#292D32',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },
});

export default AddingNote;
