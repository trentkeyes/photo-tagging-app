import { doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

const getCharacterCoordinates = async () => {
  const docRef = doc(db, 'characterCoordinates', 'zPQhgUM4dDRASwd72FKz');
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export { getCharacterCoordinates };
