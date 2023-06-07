import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { ReactComponent as ArrowRightSquare } from 'assets/icons/arrow-right-square.svg';

const MessageForm = () => {
  const [messageText, setMessageText] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(111);
  };

  return (
    <div className='mt-auto px-5 py-3'>
      <Form
        noValidate
        onSubmit={sendMessage}
        className='py-1 border rounded-2'
      >
        <InputGroup className='has-validation'>
          <Form.Control
            className='border-0 p-0 ps-2'
            name="messageText"
            type="text"
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
            placeholder="Введите сообщение..."
          />
          <Button
            type="submit"
            variant="link"
            className='btn-group-vertical'
            disabled={!messageText.length}
          >
            <ArrowRightSquare width='20' height='20' />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default MessageForm;
