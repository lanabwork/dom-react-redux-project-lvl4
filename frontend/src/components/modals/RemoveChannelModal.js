import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import socket from 'socket';
import { toast } from 'react-toastify';

const RemoveChannelModal = ({ isShowed, selectedChannel, closeModal }) => {

  const removeChannel = (e) => {
    e.preventDefault();
    socket.emit('removeChannel', {
      id: selectedChannel.id,
    }, (response) => {
      if (response.status === 'ok') {
        closeModal();
        toast.success('Канал успешно удалён')
      }
    })
  };

  return (
    <Modal show={isShowed}>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Уверены?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={closeModal}
        >
          Отменить
        </Button>
        <Button
          type='submit'
          variant="danger"
          onClick={(e) => removeChannel(e)}
        >
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveChannelModal;
