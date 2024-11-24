import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {Gap, GapRow} from '../../atoms';
import {Trash, Favorite} from '../../../assets/icon';
import {doc, deleteDoc, getFirestore} from 'firebase/firestore';
import {firebase} from '../../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const LookNote = ({item, onPress, navigation}) => {
  if (!item || !item.title || !item.note) {
    return null;
  }

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

              // Since we're in a component, we need navigation to be passed as a prop
              navigation.navigate('Note');
            } catch (error) {
              showMessage({
                message: 'Failed to delete note. Please try again.',
                type: 'danger',
              });
              console.error('Error deleting note:', error);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.contentWrapper}
        activeOpacity={0.5}
        onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {truncateText(item.title, 20)}
          </Text>
          <Text style={styles.note} numberOfLines={1} ellipsizeMode="tail">
            {truncateText(item.note, 30)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Add favorite functionality here
              console.log('Favorite pressed for:', item.id);
            }}>
            <Image source={Favorite} style={styles.photo2} />
          </TouchableOpacity>
          <GapRow width={8} />
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Image source={Trash} style={styles.photo} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Gap height={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  contentWrapper: {
    backgroundColor: '#D9D9D9',
    height: 90,
    borderRadius: 10,
    elevation: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -20}],
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#2F2A36',
    marginBottom: 5,
    width: '80%',
  },
  note: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#2F2A36',
    width: '80%',
  },
  photo: {
    width: 24,
    height: 24,
  },
  photo2: {
    width: 24,
    height: 24,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LookNote;
