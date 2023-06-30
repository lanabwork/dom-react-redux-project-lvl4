import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import socket from 'socket';
import { toast } from 'react-toastify';
import { messagesSelectors, removeChannelMessages } from 'store/slices/messagesSlice.js';
import { useTranslation } from 'react-i18next';

const RemoveChannelModal = ({ isShowed, selectedChannel, closeModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectors.selectAll);

  const removeChannel = (e) => {
    e.preventDefault();
    socket.emit('removeChannel', {
      id: selectedChannel.id,
    }, (response) => {
      if (response.status === 'ok') {
        closeModal();
        toast.success(t('modals.removeChannel.messages.success'))
        const removedChannelMessagesId = messages
          .filter((message) => message.channelId === selectedChannel.id)
          .map((message) => message.id);
        dispatch(removeChannelMessages(removedChannelMessagesId));
      }
    })
  };

  return (
    <Modal show={isShowed} centered onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeChannel.header')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('modals.removeChannel.body')}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={closeModal}
        >
          {t('modals.removeChannel.buttons.cancel')}
        </Button>
        <Button
          type='submit'
          variant="danger"
          onClick={(e) => removeChannel(e)}
        >
          {t('modals.removeChannel.buttons.submit')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveChannelModal;
