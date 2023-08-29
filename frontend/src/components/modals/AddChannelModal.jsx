import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import socket from 'socket';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
function AddChannelModal({ isShowed, channels, closeModal }) {
  const { t } = useTranslation();
  const [channelName, setChannelName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const channelNameRef = useRef();
  useEffect(() => channelNameRef.current && channelNameRef.current.focus());

  // eslint-disable-next-line consistent-return
  const addNewChannel = (e) => {
    e.preventDefault();
    if (!channelName.length) return false;

    // eslint-disable-next-line react/prop-types
    const isExistChannel = channels.find((channel) => channel.name === channelName);
    if (isExistChannel) {
      toast.error(t('modals.addChannel.messages.errors.isExist'));
      return false;
    }

    setIsSubmitting(true);
    socket.emit('newChannel', {
      name: channelName,
      removable: false,
    }, (response) => {
      if (response.status === 'ok') {
        setChannelName('');
        closeModal();
        setIsSubmitting(false);
        toast.success(t('modals.addChannel.messages.success'));
      }
    });
  };

  return (
    <Modal show={isShowed} centered onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.addChannel.header')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          onSubmit={addNewChannel}
        >
          <Form.Label htmlFor="channelName" className="visually-hidden">
            {t('modals.addChannel.name')}
          </Form.Label>
          <Form.Control
            ref={channelNameRef}
            className="mb-2"
            id="channelName"
            name="channelName"
            type="text"
            onChange={(e) => setChannelName(e.target.value)}
            value={channelName}
            autoFocus
          />
          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={closeModal}
            >
              {t('modals.addChannel.buttons.cancel')}
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={!channelName.length || isSubmitting}
            >
              {t('modals.addChannel.buttons.submit')}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddChannelModal;
