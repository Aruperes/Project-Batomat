import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../components/atoms';
import {MenuButton, Header} from '../../components/molecules';
import {Heart, Trash2} from '../../assets/icon';
import {doc, updateDoc, deleteDoc, serverTimestamp} from 'firebase/firestore';
import {firebase} from '../../config/Firebase';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {showMessage} from 'react-native-flash-message';

const EditNote = ({navigation, route}) => {
  const {item} = route.params;
  const [noteText, setNoteText] = useState(item.note);
  const [noteTitle, setNoteTitle] = useState(item.title);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    if (!noteTitle.trim() || !noteText.trim()) {
      showMessage({
        message: 'Title and note content are required',
        type: 'warning',
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      showMessage({
        message: 'Please sign in to update notes',
        type: 'warning',
      });
      setIsLoading(false);
      return;
    }

    const db = getFirestore(firebase);
    const noteRef = doc(db, 'notes', item.id);

    try {
      await updateDoc(noteRef, {
        title: noteTitle.trim(),
        note: noteText.trim(),
        updatedAt: serverTimestamp(),
      });

      showMessage({
        message: 'Note updated successfully',
        type: 'success',
      });

      navigation.goBack();
    } catch (error) {
      setError(error.message);
      showMessage({
        message: error.message,
        type: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const db = getFirestore(firebase);
              const noteRef = doc(db, 'notes', item.id);
              await deleteDoc(noteRef);

              showMessage({
                message: 'Note deleted successfully',
                type: 'success',
              });

              navigation.navigate('Note');
            } catch (error) {
              showMessage({
                message: 'Failed to delete note. Please try again.',
                type: 'danger',
              });
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Header
          text="Notes"
          backButton={true}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleUpdate}
          disabled={isLoading}
          style={styles.doneButton}>
          <Text
            style={[styles.doneButtonText, isLoading && styles.disabledText]}>
            {isLoading ? 'Saving...' : 'Done'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.titleInput}
              placeholder="Title"
              value={noteTitle}
              onChangeText={setNoteTitle}
              editable={!isLoading}
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.noteInput}
              placeholder="Note"
              value={noteText}
              onChangeText={setNoteText}
              multiline={true}
              editable={!isLoading}
              placeholderTextColor="#666"
            />
          </View>

          {error && <Text style={styles.errorText}>{error}</Text>}

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.actionButton}
              activeOpacity={0.5}
              onPress={handleDelete}>
              <Image source={Trash2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
              <Image source={Heart} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
  },
  doneButton: {
    padding: 10,
  },
  doneButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#020202',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  contentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
  },
  titleInput: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#2F2A36',
    marginBottom: 20,
  },
  noteInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#000000',
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  actionButton: {
    padding: 10,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#292D32',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 95,
  },
  disabledText: {
    opacity: 0.5,
  },
});

export default EditNote;
