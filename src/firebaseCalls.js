import {
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  query,
  limit,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from './firebase';

const getCharacterCoordinates = async () => {
  const docRef = doc(db, 'characterCoordinates', 'zPQhgUM4dDRASwd72FKz');
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const addWinner = async ({ input, mins, secs }) => {
  try {
    const leaderboardRef = collection(db, 'leaderboard');
    await addDoc(leaderboardRef, {
      name: input,
      minutes: mins,
      seconds: secs,
    });
  } catch (err) {
    alert(err);
  }
};

export const getLeaderboard = ({ setLeaderboard }) => {
  const leaderboardQuery = query(collection(db, 'leaderboard'));
  onSnapshot(leaderboardQuery, (querySnapshot) => {
    setLeaderboard(
      querySnapshot.docs.map((doc) => ({
        seconds: doc.data().seconds,
        name: doc.data().name,
        minutes: doc.data().minutes,
      }))
    );
  });
};

export { getCharacterCoordinates };
