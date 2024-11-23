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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <View style={styles.container2}>
        <DateNote date="Previous 30 Days" />

        {/* FlashList for notes */}
        <View style={styles.listContainer}>
          <FlashList
            data={notes}
            estimatedItemSize={100}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <LookNote item={item} navigation={navigation} />
            )}
          />
        </View>

        <AddNote />
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    backgroundColor: '#F9F7E4',
  },
  container2: {
    flex: 10,
    backgroundColor: '#F9F7E4',
    marginHorizontal: 22,
  },
  container3: {
    flex: 2,
    backgroundColor: '#F9F7E4',
  },
  listContainer: {
    flex: 1,
    marginVertical: 10,
  },
  errorContainer: {
    padding: 10,
    backgroundColor: '#FFCDD2',
    marginTop: 20,
    marginHorizontal: 22,
    borderRadius: 5,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Note;
