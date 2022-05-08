import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
   apiKey: 'AIzaSyC-xY6nChzKnkOjWBlHai1nHvK-P0Y9Vog',
   authDomain: 'dbwhopay.firebaseapp.com',
   projectId: 'dbwhopay',
   storageBucket: 'dbwhopay.appspot.com',
   messagingSenderId: '140812757550',
};

const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebaseImpl.firestore();
