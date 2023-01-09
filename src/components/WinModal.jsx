import { useState } from 'react';
import Modal from 'react-modal';
import { addName } from '../firebaseCalls';

export const WinModal = ({ modalIsOpen, winTime }) => {
  const [input, setInput] = useState('');
  const { minutes, seconds } = winTime;
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addName({ input, winTime });
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
    <Modal isOpen={modalIsOpen} style={style}>
      <div className="bg-tarantino-bg bg-opacity-50 p-4 rounded">
        <h2 className="text-white text-xl text-center">You won!</h2>
        <h2 className="text-white text-xl text-center">
          Your time is:{' '}
          <span className="font-bold">
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
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
          <button className=" mx-auto block px-6 py-2.5 bg-blue text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
