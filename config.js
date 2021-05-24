import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCJ2NVUh82cSkSVfqrqzAmdyqMn2qJoQEQ",
  authDomain: "virtual-pet-20.firebaseapp.com",
  databaseURL: "https://virtual-pet-20-default-rtdb.firebaseio.com",
  projectId: "virtual-pet-20",
  storageBucket: "virtual-pet-20.appspot.com",
  messagingSenderId: "7304122679",
  appId: "1:7304122679:web:e1e9c08b6e9adb32580ab2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
