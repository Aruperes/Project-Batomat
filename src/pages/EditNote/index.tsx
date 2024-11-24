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
import {doc, updateDoc} from 'firebase/firestore';
import {firestore} from '../../config/Firebase';

const EditNote = ({navigation, route}) => {
  const {item} = route.params;
  const [noteText, setNoteText] = useState(item.note);
  const [noteTitle, setNoteTitle] = useState(item.title);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    if (noteTitle && noteTitle.length > 0) {
      setIsLoading(true);
      setError(null);

      try {
        const noteRef = doc(firestore, 'notes', item.id);
        await updateDoc(noteRef, {
          title: noteTitle,
          note: noteText,
          updatedAt: new Date().toISOString(),
        });

        navigation.navigate('Note');
      } catch (err) {
        setError('Failed to update note. Please try again.');
        console.error('Error updating note:', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          text="Notes"
          backButton={true}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleUpdate}
          disabled={isLoading}>
          <Text style={[styles.text, isLoading && styles.disabledText]}>
            {isLoading ? 'Saving...' : 'Done'}
          </Text>
        </TouchableOpacity>
      </View>
      <>
        <View style={styles.container2}>
          <Gap height={18} />
          <View style={styles.contentWrapper}>
            <TextInput
              style={styles.title}
              placeholder="Title"
              value={noteTitle}
              onChangeText={text => setNoteTitle(text)}
              editable={!isLoading}
            />
            <TextInput
              style={styles.text2}
              placeholder="Note"
              value={noteText}
              onChangeText={text => setNoteText(text)}
              multiline={true}
              editable={!isLoading}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
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
export default EditNote;

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
    paddingTop: 420,
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
    // Text shadow properties
    textShadowColor: '#000000', // Shadow color (black)
    textShadowOffset: {width: 0, height: 2}, // Shadow offset (horizontal, vertical)
    textShadowRadius: 2, // How much the shadow should blur
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#292D32',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 95,
  },
});
