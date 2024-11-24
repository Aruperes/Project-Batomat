// Note.js
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DateNote, AddNote} from '../../components/atoms';
import {LookNote, MenuButton} from '../../components/molecules';
import {getFirestore, collection, onSnapshot} from 'firebase/firestore';
import {firebase} from '../../config/Firebase';
import {FlashList} from '@shopify/flash-list';

const Note = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore(firebase);
    const notesCollection = collection(db, 'notes');

    const unsubscribe = onSnapshot(
      notesCollection,
      querySnapshot => {
        const newNotes = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const {note, title} = data;
          newNotes.push({note, title, id: doc.id});
        });
        setNotes(newNotes);
      },
      error => {
        setError(error.message);
        console.error('Error fetching notes: ', error.message);
      },
    );

    return () => unsubscribe();
  }, []);

  // Create combined data array with notes and AddNote component
  const renderData = [...notes, {id: 'add-note', isAddNote: true}];

  const handleNotePress = item => {
    navigation.navigate('EditNote', {item}); // Properly pass the item as a parameter
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Notes</Text>
      </View>
      <View style={styles.container2}>
        <DateNote date="Previous 30 Days" />

        <View style={styles.listContainer}>
          <FlashList
            data={renderData}
            estimatedItemSize={100}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              if (item.isAddNote) {
                return <AddNote navigation={navigation} />;
              }
              return (
                <LookNote item={item} onPress={() => handleNotePress(item)} />
              );
            }}
          />
        </View>

        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
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
  title: {
    paddingLeft: 32,
    paddingTop: 29,
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
    color: '#292D32',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
  },
  container: {
    flex: 2,
    backgroundColor: '#F9F7E4',
  },
  container2: {
    flex: 8,
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
  listContainer: {
    flex: 1,
    marginVertical: 10,
  },
  errorContainer: {
    padding: 10,
    backgroundColor: '#FFCDD2',
    marginTop: 20,
    borderRadius: 5,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Note;
