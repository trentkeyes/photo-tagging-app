import {
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const getCharacterCoordinates = async () => {
  const docRef = doc(db, 'characterCoordinates', 'zPQhgUM4dDRASwd72FKz');
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const addName = async ({ input, winTime }) => {
  try {
    const leaderboardRef = collection(db, 'leaderboard');
    await addDoc(leaderboardRef, {
      name: input,
      minutes: winTime.minutes,
      seconds: winTime.seconds,
    });
  } catch (err) {
    alert(err);
  }
};

export { getCharacterCoordinates };
