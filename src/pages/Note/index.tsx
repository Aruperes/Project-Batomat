import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DateNote, AddNote} from '../../components/atoms';
import {LookNote, MenuButton} from '../../components/molecules';
import {getFirestore, collection, onSnapshot} from 'firebase/firestore'; // Use Firestore modular SDK
import {firebase} from '../../config/Firebase';

const Note = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  // Fetch the note data
  useEffect(() => {
    const db = getFirestore(firebase);
    const notesCollection = collection(db, 'notes');

    const unsubscribe = onSnapshot(
      notesCollection,
      querySnapshot => {
        const newNotes = [];
        querySnapshot.forEach(doc => {
          const {note, title} = doc.data();
          newNotes.push({note, title, id: doc.id});
        });
        setNotes(newNotes);
      },
      error => {
        setError(error.message); // Handle Firestore error
        console.error('Error fetching notes: ', error.message);
      },
    );

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Notes</Text>
        </View>
        <View style={styles.container2}>
          <DateNote date="Previous 30 Days" />
          <LookNote text="List Obat" navigation={navigation} />
          <AddNote />
        </View>

        {/* Handle errors */}
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <View style={styles.container3}>
          <MenuButton navigation={navigation} />
        </View>
      </ScrollView>
    </>
  );
};

export default Note;

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
    flex: 2,
    backgroundColor: '#F9F7E4',
  },
  container2: {
    flex: 10,
    backgroundColor: '#F9F7E4',
    marginLeft: 22,
    marginRight: 22,
  },
  container3: {
    flex: 2,
    backgroundColor: '#F9F7E4',
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
  scrollContent: {
    paddingBottom: 100, // Ensure the content doesn't get hidden under the MenuButton
  },
});
