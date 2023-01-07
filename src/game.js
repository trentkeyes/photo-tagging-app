import { getCharacterCoordinates } from './firebaseCalls';

export const checkCoordinates = async (user) => {
  const data = await getCharacterCoordinates();
  const correct = data['sharonTate'];
  if (Math.abs(user.x - correct.x) < 20) {
    return 'Found!';
  } else {
    return 'Nope!';
  }
};

export const getUserCoordinates = (e) => {
  const boundary = e.target.getBoundingClientRect();
  const x = e.clientX - boundary.left;
  const y = e.clientY - boundary.top;
  return { x, y };
};

export const play = (e) => {
  const user = getUserCoordinates(e);
  const result = checkCoordinates(user);
};
