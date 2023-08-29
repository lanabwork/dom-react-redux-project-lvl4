import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import socket from 'socket';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const RenameChannelModal = function RenameChannelModal({
  // eslint-disable-next-line react/prop-types
  isShowed, channels, selectedChannel, closeModal,
}) {
  const { t } = useTranslation();
  // eslint-disable-next-line react/prop-types
  const [channelName, setChannelName] = useState(selectedChannel.name);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const channelNameRef = useRef();
  useEffect(() => channelNameRef.current && channelNameRef.current.focus());

  // eslint-disable-next-line consistent-return
  const renameChannel = (e) => {
    e.preventDefault();
    if (!channelName.length) return false;

    // eslint-disable-next-line react/prop-types
    const isExistChannel = channels.find((channel) => channel.name === channelName);
    if (isExistChannel) {
      setIsInvalid(true);
      return false;
    }

    setIsSubmitting(true);
    socket.emit('renameChannel', {
      // eslint-disable-next-line react/prop-types
      id: selectedChannel.id,
      name: channelName,
    }, (response) => {
      if (response.status === 'ok') {
        setChannelName('');
        closeModal();
        toast.success(t('modals.renameChannel.messages.success'));
        setIsSubmitting(false);
      }
    });
  };

  return (
    <Modal show={isShowed} centered onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.renameChannel.header')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          onSubmit={renameChannel}
        >
          <Form.Label htmlFor="channelName" className="visually-hidden">
            {t('modals.renameChannel.name')}
          </Form.Label>
          <Form.Control
            ref={channelNameRef}
            className="mb-2"
            id="channelName"
            name="channelName"
            type="text"
            onChange={(e) => setChannelName(e.target.value)}
            value={channelName}
            isInvalid={isInvalid}
          />
          <Form.Control.Feedback
            className="font-weight-bold"
            type="invalid"
            role="alert"
            data-validity={isInvalid}
          >
            {t('modals.renameChannel.messages.errors.isExist')}
          </Form.Control.Feedback>
          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={closeModal}
            >
              {t('modals.renameChannel.buttons.cancel')}
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={!channelName.length || isSubmitting}
            >
              {t('modals.renameChannel.buttons.submit')}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannelModal;
