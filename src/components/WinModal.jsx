import { useState } from 'react';
import Modal from 'react-modal';

export const WinModal = ({ modalIsOpen }) => {
  const style = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#2563eb',
    },
  };

  return (
    <Modal isOpen={modalIsOpen} style={style}>
      <div>
        <h1>You won!</h1>
      </div>
      <form action="">
        
      </form>
    </Modal>
  );
};
