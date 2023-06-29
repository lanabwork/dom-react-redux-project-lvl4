import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import socket from 'socket';
import { toast } from 'react-toastify';

const RenameChannelModal = ({ isShowed, channels, selectedChannel, closeModal }) => {
  const [channelName, setChannelName] = useState(selectedChannel.name);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const channelNameRef = useRef();
  useEffect(() => channelNameRef.current && channelNameRef.current.focus());

  const renameChannel = (e) => {
    e.preventDefault();
    if (!channelName.length) return false;

    const isExistChannel = channels.find((channel) => channel.name === channelName);
    if (isExistChannel) {
      setIsInvalid(true);
      return false;
    }

    setIsSubmitting(true);
    socket.emit('renameChannel', {
      id: selectedChannel.id,
      name: channelName,
    }, (response) => {
      if (response.status === 'ok') {
        setChannelName('');
        closeModal();
        toast.success('Канал успешно переименован');
        setIsSubmitting(false);
      }
    })
  };

  return (
    <Modal show={isShowed} centered>
      <Modal.Header closeButton>
        <Modal.Title>Переименовать канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          onSubmit={renameChannel}
        >
          <Form.Label htmlFor="channelName" className="visually-hidden">Имя канала</Form.Label>
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
            Должно быть уникальным
          </Form.Control.Feedback>
          <div className='d-flex justify-content-end gap-2'>
            <Button
              variant="secondary"
              onClick={closeModal}
            >
              Отменить
            </Button>
            <Button
              type='submit'
              variant="primary"
              disabled={!channelName.length || isSubmitting}
            >
              Отправить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannelModal;
