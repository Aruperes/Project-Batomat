import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import BackButton from '../../assets/icon/BackButton.svg';
import Bakteri from '../../assets/images/layubakteri.png';
import NoteNav from '../../assets/icon/Note.svg';
import {MenuButton} from '../../components/molecules';
import Share from '../../assets/icon/share.svg';
import Star from '../../assets/icon/Star.svg';

const LayuBakteri = ({navigation}) => {
  // State to track if the star is selected (filled or not)
  const [isStarSelected, setIsStarSelected] = useState(false);
  const [starCount, setStarCount] = useState(0); // Track the number of times the star is pressed

  // Toggle the star selection state when pressed and increment count
  const handleStarPress = () => {
    setIsStarSelected(!isStarSelected);
    if (!isStarSelected) {
      setStarCount(starCount + 1); // Increment the count when pressed
    }
  };
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerWrapper}>
        {/* Full-size Kutu image */}
        <Image source={Bakteri} style={styles.headerImage} resizeMode="cover" />

        {/* Back Button on top of the image */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <BackButton width={40} height={40} />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        {/* Title and Star Section */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Layu Bakteri</Text>
        </View>

        <TouchableOpacity onPress={handleStarPress} style={styles.starWrapper}>
          <Star
            width={25}
            height={25}
            style={[
              styles.starIcon,
              {fill: isStarSelected ? 'yellow' : 'gray'}, // Change color based on selection
            ]}
          />
          {/* Number Below the Star */}
          <Text style={styles.starCount}>{starCount}</Text>
        </TouchableOpacity>

        <Text style={styles.descriptiontitle}>
          Gejalanya terlihat jika pucuk tanaman layu atau daun tua menguning.
          Jika batang mulai membusuk dan akar tanaman mengalami pembusukan, maka
          kemungkinan besar tanaman terinfeksi oleh jamur
        </Text>
        <Text style={styles.subTitle}>Cara Pengobatan</Text>
        <Text style={styles.descriptionsub}>
          1. Gunakan varietas tanaman yang tahan fusarium. {'\n'}
          2. Perbaiki drainase dan lakukan sanitasi lahan secara rutin. {'\n'}
          3. Introduksi predator alami seperti lady beetle.
        </Text>

        {/* Like and Share Section */}
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.likeButton}>
            <Like width={65} height={65} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Share width={65} height={65} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.container3}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

export default LayuBakteri;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7E4',
  },
  headerWrapper: {
    position: 'relative',
    height: 250, // Adjust height for header
    width: '100%', // Full width of the header
    overflow: 'hidden', // Ensure content is clipped within the header area
    backgroundColor: '#F9F7E4',
  },
  backButton: {
    position: 'absolute', // Position the back button on top of the image
    left: 10,
    top: 40, // Adjust spacing from top edge
    zIndex: 1, // Ensure it appears above the image
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%', // Ensure the image fills the header
  },
  contentWrapper: {
    paddingHorizontal: 24,
    paddingBottom: 260,
    marginTop: 0, // Optional: overlap slightly with the header
  },
  titleWrapper: {
    flexDirection: 'row', // Align title and star horizontally
    alignItems: 'center', // Vertically center the items
    marginBottom: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#292D32',
    marginTop: 20,
  },
  starWrapper: {
    alignItems: 'center', // Center the star and count
    justifyContent: 'center', // Vertically align items
  },
  starIcon: {
    marginBottom: 4, // Add margin to separate star from count
    marginLeft: 280,
    marginTop: -30,
  },
  starCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B79F00', // Yellow color for the number
    marginLeft: 280,
    marginTop: -2,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#292D32',
    marginTop: 20,
    marginBottom: 8,
  },
  descriptiontitle: {
    fontFamily: 'Poppin-medium',
    fontSize: 18,
    color: '#020202',
    lineHeight: 25,
    marginTop: 3,
  },

  descriptionsub: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#020202',
    marginLeft: 35,
    lineHeight: 30, // Adjust line-height for spacing between text lines
  },
  menuButtonWrapper: {
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
    height: 65,
  },

  // New styles for Like and Share buttons
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start', // Align to the left
    marginLeft: 0, // Moved more left
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end', // Align to the right
    marginRight: 0, // Moved more right
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
