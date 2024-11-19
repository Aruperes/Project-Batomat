// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOkGF95dxzoh7rdLT_xB6FmzU1vfgiGLA',
  authDomain: 'batomat-3790c.firebaseapp.com',
  databaseURL: 'https://batomat-3790c-default-rtdb.firebaseio.com',
  projectId: 'batomat-3790c',
  storageBucket: 'batomat-3790c.firebasestorage.app',
  messagingSenderId: '86092588180',
  appId: '1:86092588180:web:f9e3d90d5f48a1a2ad4081',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getanalytics = getAnalytics(app);

export default app;
