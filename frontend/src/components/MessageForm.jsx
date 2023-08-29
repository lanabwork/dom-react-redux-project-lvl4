import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import socket from 'socket';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowRightSquare } from '../assets/icons/arrow-right-square.svg';

// eslint-disable-next-line react/prop-types, react/function-component-definition
const MessageForm = function MessageForm({ username, activeChannelId }) {
  const { t } = useTranslation();
  const [messageText, setMessageText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    socket.emit('newMessage', {
      body: messageText,
      username,
      channelId: activeChannelId,
    }, (response) => {
      if (response.status === 'ok') {
        setMessageText('');
        setIsSubmitting(false);
      }
    });
  };

  return (
    <div className="mt-auto px-5 py-3">
      <Form
        noValidate
        onSubmit={sendMessage}
        className="py-1 border rounded-2"
      >
        <InputGroup className="has-validation">
          <Form.Control
            className="border-0 p-0 ps-2"
            name="messageText"
            type="text"
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
            placeholder={t('messages.text')}
            aria-label={t('messages.ariaLabel')}
          />
          <Button
            type="submit"
            variant="link"
            className="btn-group-vertical"
            disabled={!messageText.length || isSubmitting}
          >
            <ArrowRightSquare width="20" height="20" />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default MessageForm;
