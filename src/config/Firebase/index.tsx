// Import the necessary functions from the Firebase SDK
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database'; // Import Firebase Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOkGF95dxzoh7rdLT_xB6FmzU1vfgiGLA',
  authDomain: 'batomat-3790c.firebaseapp.com',
  databaseURL: 'https://batomat-3790c-default-rtdb.firebaseio.com', // Realtime Database URL
  projectId: 'batomat-3790c',
  storageBucket: 'batomat-3790c.firebasestorage.app',
  messagingSenderId: '86092588180',
  appId: '1:86092588180:web:f9e3d90d5f48a1a2ad4081',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app); // Initialize Realtime Database

// Export services for use in your app
export {auth, firestore, analytics, database};
export default app;
