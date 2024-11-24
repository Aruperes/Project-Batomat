import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../components/atoms';
import {MenuButton, Header} from '../../components/molecules';
import {Heart, HeartFilled} from '../../assets/icon';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCreateNote = async () => {
    if (isLoading) {
      return;
    }

    // Validate inputs
    if (!title.trim()) {
      showMessage({
        message: 'Title is required',
        type: 'warning',
      });
      return;
    }

    if (!note.trim()) {
      showMessage({
        message: 'Note content is required',
        type: 'warning',
      });
      return;
    }

    if (title.length > 100) {
      showMessage({
        message: 'Title must be less than 100 characters',
        type: 'warning',
      });
      return;
    }

    if (note.length > 10000) {
      showMessage({
        message: 'Note is too long (max 10000 characters)',
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
      navigation.navigate('SignIn');
      return;
    }

    setIsLoading(true);
    const db = getFirestore(firebase);

    try {
      await addDoc(collection(db, 'notes'), {
        title: title.trim(),
        note: note.trim(),
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isFavorite: isFavorite,
        favoriteTimestamp: isFavorite ? serverTimestamp() : null,
      });

      showMessage({
        message: `Note created successfully${
          isFavorite ? ' and added to favorites' : ''
        }`,
        type: 'success',
      });

      navigation.goBack();
    } catch (error) {
      showMessage({
        message: error.message || 'Failed to create note',
        type: 'danger',
      });
      console.error('Error creating note:', error);
    } finally {
      setIsLoading(false);
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
          <TouchableOpacity
            style={styles.photo}
            onPress={handleFavoriteToggle}
            activeOpacity={0.7}>
            <Image
              source={isFavorite ? HeartFilled : Heart}
              style={styles.heartIcon}
            />
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
