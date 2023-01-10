import { useState } from 'react';
import Modal from 'react-modal';
import { CloseBtn } from './CloseBtn';

export const Leaderboard = ({
  leaderboardIsOpen,
  closeLeaderboard,
  leaderboard,
}) => {
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

  const leaderboardElements = leaderboard.map((el, index) => {
    return (
      <tr key={index}>
        <td className="p-2 border border-slate">{index + 1}</td>
        <td className="p-2 border border-slate">{el.name}</td>
        <td className="p-2 border border-slate">
          {el.minutes}:{el.seconds}
        </td>
      </tr>
    );
  });
  return (
    <Modal
      isOpen={leaderboardIsOpen}
      onRequestClose={closeLeaderboard}
      style={style}
      appElement={document.getElementById('app')}
    >
      <div className="bg-tarantino-bg bg-opacity-50 p-4 rounded">
        <CloseBtn close={closeLeaderboard} />
        <h2 className="text-white text-3xl text-center my-2">Winners!</h2>
        <table className="text-white border-collapse border border-slate text-xl">
          <tbody>{leaderboardElements}</tbody>
        </table>
      </div>
    </Modal>
  );
};
