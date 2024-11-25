import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {getAuth} from 'firebase/auth';
import {MenuButton} from '../../components/molecules';
import {FavoritePage, Info, Share, Setting, Logout} from '../../assets/icon';
import {getDatabase, ref, get, set} from 'firebase/database';

const AccountPage = ({navigation}) => {
  const [userName, setUserName] = useState('Nama Lengkap');
  const [userEmail, setUserEmail] = useState('username@gmail.com');
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageBase64, setProfileImageBase64] = useState(null);

  const handleSelectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.7,
      includeBase64: true,
    });

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorCode) {
      console.error('Image Picker Error: ', result.errorMessage);
    } else {
      const base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
      setProfileImage(base64);
      setProfileImageBase64(result.assets[0].base64);

      // Save the profile image automatically after selection
      saveProfileImage(result.assets[0].base64);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserName(user.displayName || 'Nama Lengkap');
      setUserEmail(user.email);

      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);

      get(userRef)
        .then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            if (data && data.photo) {
              setProfileImage(data.photo);
            }
          } else {
            console.log('No data available');
          }
        })
        .catch(error => {
          console.error('Error retrieving data:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    Alert.alert('Konfirmasi', 'Apakah Anda yakin ingin keluar?', [
      {
        text: 'Tidak',
        onPress: () => console.log('Batal'),
        style: 'cancel',
      },
      {
        text: 'Ya',
        onPress: () => navigation.navigate('SignIn'),
      },
    ]);
  };

  const saveProfileImage = base64Image => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && base64Image) {
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);
      set(userRef, {
        fullName: userName,
        email: userEmail,
        photo: `data:image/jpeg;base64,${base64Image}`,
      })
        .then(() => {
          console.log('Profile image saved');
        })
        .catch(error => {
          console.error('Error saving profile image:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={handleSelectImage}
          style={styles.profilePicture}>
          {profileImage ? (
            <Image source={{uri: profileImage}} style={styles.logo1} />
          ) : (
            <Image
              style={styles.logo1}
              source={require('../../assets/images/profile.png')}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.email}>{userEmail}</Text>
        <View style={styles.line} />
        <View style={styles.button}>
          <MenuItem
            icon={Info}
            text="Info"
            onPress={() => navigation.navigate('InfoPage')}
          />
          <MenuItem
            icon={Share}
            text="Bagikan"
            onPress={() => navigation.navigate('SharePage')}
          />
          <MenuItem
            icon={FavoritePage}
            text="Favorit"
            onPress={() => navigation.navigate('FavoritePage')}
          />
          <MenuItem
            icon={Setting}
            text="Ubah kata sandi"
            onPress={() => navigation.navigate('ChangePassword')}
          />
          <MenuItem icon={Logout} text="Keluar" onPress={handleLogout} />
        </View>
      </View>

      <View style={styles.menuButtonWrapper}>
        <MenuButton navigation={navigation} />
      </View>
    </View>
  );
};

const MenuItem = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Image source={icon} style={styles.menuIcon} />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerBackground: {
    backgroundColor: '#292D32',
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginBottom: 140,
    marginLeft: 36,
  },
  profileContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: -110,
    alignItems: 'center',
    paddingVertical: 20,
    height: 560,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
    marginBottom: 30,
  },
  logo1: {
    width: 100,
    height: 100,
    marginLeft: -10,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#292D32',
  },
  email: {
    fontSize: 14,
    color: '#4E4E4E',
  },
  line: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    width: 325,
    marginTop: 20,
    marginVertical: -20,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 5,
    marginLeft: -150,
  },
  menuIcon: {
    width: 27,
    height: 24,
    marginRight: 14,
  },
  menuText: {
    fontSize: 14,
    color: '#000',
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
    height: 95,
  },
});
