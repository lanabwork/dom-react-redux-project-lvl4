import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import socket from 'socket';
import { toast } from 'react-toastify';
import { messagesSelectors, removeChannelMessages } from 'store/slices/messagesSlice.js';

const RemoveChannelModal = ({ isShowed, selectedChannel, closeModal }) => {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectors.selectAll);

  const removeChannel = (e) => {
    e.preventDefault();
    socket.emit('removeChannel', {
      id: selectedChannel.id,
    }, (response) => {
      if (response.status === 'ok') {
        closeModal();
        toast.success('Канал успешно удалён')
        const removedChannelMessagesId = messages
          .filter((message) => message.channelId === selectedChannel.id)
          .map((message) => message.id);
        dispatch(removeChannelMessages(removedChannelMessagesId));
      }
    })
  };

  return (
    <Modal show={isShowed} centered>
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
