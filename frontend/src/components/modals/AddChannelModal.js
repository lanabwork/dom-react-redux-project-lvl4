import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import socket from 'socket';
import { toast } from 'react-toastify';

const AddChannelModal = ({ isShowed, channels, closeModal }) => {
  const [channelName, setChannelName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const channelNameRef = useRef();
  useEffect(() => channelNameRef.current && channelNameRef.current.focus());

  const addNewChannel = (e) => {
    e.preventDefault();
    if (!channelName.length) return false;

    const isExistChannel = channels.find((channel) => channel.name === channelName);
    if (isExistChannel) {
      toast.error('Канал с таким именем уже существует');
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
      }
    })
  };

  return (
    <Modal show={isShowed} centered onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          onSubmit={addNewChannel}
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
            autoFocus
          />
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

export default AddChannelModal;
