import { useState } from 'react';
import Modal from 'react-modal';
import { addWinner } from '../firebaseCalls';
import { CloseBtn } from './CloseBtn';

export const WinModal = ({
  winFormIsOpen,
  closeWinForm,
  winTime,
  setLeaderboardOpen,
}) => {
  const [input, setInput] = useState('');
  const { minutes, seconds } = winTime;
  const mins = minutes < 10 ? '0' + minutes : minutes;
  const secs = seconds < 10 ? '0' + seconds : seconds;
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      addWinner({ input: 'Anonymous', mins, secs });
    } else {
      addWinner({ input, mins, secs });
    }

    closeWinForm();
    setLeaderboardOpen(true);
  };
  const style = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#2563eb',
      borderRadius: '10px',
    },
  };

  return (
    <Modal
      isOpen={winFormIsOpen}
      onRequestClose={closeWinForm}
      style={style}
      appElement={document.getElementById('app')}
    >
      <div className="bg-tarantino-bg bg-opacity-50 p-4 rounded">
        <CloseBtn close={closeWinForm} />
        <h2 className="text-white text-3xl text-center my-2">You won!</h2>

        <h2 className="text-white text-xl text-center">
          Your time is:{' '}
          <span className="font-bold">
            {mins}:{secs}
          </span>
        </h2>
        <h2 className="text-white text-xl text-center">
          Add your name to the leaderboard!
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            placeholder="Enter name"
            className="my-4 mx-auto block indent-2"
          />

          <button className="mx-auto block px-6 py-2.5 bg-blue text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
