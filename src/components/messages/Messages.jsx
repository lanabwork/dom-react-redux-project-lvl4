import React, { useState, useEffect } from 'react';
import Message from './Message.jsx';
import { Form, InputGroup, Button } from 'react-bootstrap';
import SvgIcon from '@/components/SvgIcon.js';
import arrowRightSquare from '@/assets/icons/arrow-right-square.svg';

const Messages = ({ messages }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='chat-messages overflow-auto px-5'>
        {messages && messages.map((message) => <Message key={message.id} message={message} />)}
      </div>
      <div className="mt-auto px-5 py-3">
        <Form noValidate onSubmit={handleSubmit} className="py-1 border rounded-2">
          <InputGroup>
            <Form.Control
              className="border-0 p-0 ps-2"
              type="text"
              name="newMessage"
              onChange={handleChange}
              value={newMessage}
              placeholder="Введите сообщение..."
            />
            <Button variant="link" type="submit" disabled={!newMessage}>
              <SvgIcon icon={arrowRightSquare} width={20} height={20} />
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default Messages;