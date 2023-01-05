import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDC0bkVaG1Sa2BkwWUU_GcsqNerj6B4_Tk',
  authDomain: 'photo-tagging-app-7bda4.firebaseapp.com',
  projectId: 'photo-tagging-app-7bda4',
  storageBucket: 'photo-tagging-app-7bda4.appspot.com',
  messagingSenderId: '877683745112',
  appId: '1:877683745112:web:9ad3d668471ad8b6c4452d',
  measurementId: 'G-8MZ3173CFT',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
