import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DateNote} from '../../components/atoms';
import {LookNote, MenuButton} from '../../components/molecules';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {firebase} from '../../config/Firebase';
import {FlashList} from '@shopify/flash-list';
import {showMessage} from 'react-native-flash-message';

const FavoritePage = ({navigation}) => {
  const [favoriteNotes, setFavoriteNotes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  // Helper function to format date
  const formatDate = timestamp => {
    if (!timestamp) {
      return '';
    }
    const date = new Date(timestamp.seconds * 1000);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    }
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);
    if (date >= thirtyDaysAgo) {
      return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
      }).format(date);
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
    }).format(date);
  };

  // Helper function to group notes by date
  const groupNotesByDate = notes => {
    const sortedNotes = [...notes].sort((a, b) => {
      // Sort by favoriteTimestamp (most recently favorited first)
      const dateA = a.favoriteTimestamp?.seconds || 0;
      const dateB = b.favoriteTimestamp?.seconds || 0;
      return dateB - dateA;
    });

    const groups = {};
    sortedNotes.forEach(note => {
      const dateKey = formatDate(note.updatedAt);
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(note);
    });
    return groups;
  };

  useEffect(() => {
    if (!currentUser) {
      navigation.navigate('SignIn');
      return;
    }

    setIsLoading(true);
    const db = getFirestore(firebase);
    const notesCollection = collection(db, 'notes');

    // Query only favorite notes
    const favoritesQuery = query(
      notesCollection,
      where('userId', '==', currentUser.uid),
      where('isFavorite', '==', true),
      orderBy('favoriteTimestamp', 'desc'),
    );

    const unsubscribe = onSnapshot(
      favoritesQuery,
      querySnapshot => {
        const newNotes = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const {
            note,
            title,
            userId,
            updatedAt,
            isFavorite,
            favoriteTimestamp,
          } = data;
          newNotes.push({
            note,
            title,
            id: doc.id,
            userId,
            updatedAt,
            isFavorite,
            favoriteTimestamp,
          });
        });
        setFavoriteNotes(newNotes);
        setIsLoading(false);
        setError(null);
      },
      error => {
        setError(error.message);
        setIsLoading(false);
        showMessage({
          message: 'Error fetching favorite notes',
          description: error.message,
          type: 'danger',
        });
      },
    );

    return () => unsubscribe();
  }, [currentUser]);

  // Transform notes into a flat list with date headers
  const prepareRenderData = () => {
    const groupedNotes = groupNotesByDate(favoriteNotes);
    const renderData = [];

    Object.entries(groupedNotes).forEach(([date, dateNotes]) => {
      // Add date header
      renderData.push({
        id: `date-${date}`,
        isDateHeader: true,
        date,
      });
      // Add notes for this date
      dateNotes.forEach(note => {
        renderData.push({
          ...note,
          isNote: true,
        });
      });
    });

    return renderData;
  };

  const handleNotePress = item => {
    if (!currentUser) {
      showMessage({
        message: 'Please sign in to edit notes',
        type: 'warning',
      });
      navigation.navigate('SignIn');
      return;
    }
    navigation.navigate('EditNote', {
      item,
      userId: currentUser.uid,
    });
  };

  if (isLoading) {
    return (
      <View style={[styles.mainContainer, styles.centerContent]}>
        <ActivityIndicator size="large" color="#292D32" />
        <Text style={styles.loadingText}>Loading favorites...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.listContainer}>
          {favoriteNotes.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No favorite notes yet</Text>
              <Text style={styles.emptySubText}>
                Add notes to favorites to see them here
              </Text>
            </View>
          ) : (
            <FlashList
              data={prepareRenderData()}
              estimatedItemSize={100}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                if (item.isDateHeader) {
                  return <DateNote date={item.date} />;
                }
                if (item.isNote) {
                  return (
                    <LookNote
                      item={item}
                      onPress={() => handleNotePress(item)}
                      navigation={navigation}
                    />
                  );
                }
                return null;
              }}
            />
          )}
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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Poppins-Regular',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
});

export default FavoritePage;
