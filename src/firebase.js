import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3zXHAIf5YiR3vLVXDPXIueCTMlYPqJdM',

  authDomain: 'photo-tagging-app-60af0.firebaseapp.com',

  projectId: 'photo-tagging-app-60af0',

  storageBucket: 'photo-tagging-app-60af0.appspot.com',

  messagingSenderId: '325996091590',

  appId: '1:325996091590:web:4c9533c4fdf38599bf9fc7',

  measurementId: 'G-8E1KRYSXED',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
