import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { messagesSelectors } from '../store/slices/messagesSlice';
import Message from './Message';

// eslint-disable-next-line react/prop-types, react/function-component-definition
const Messages = function Messages({ activeChannelId, activeChannelName }) {
  const { t } = useTranslation();
  const messagesRef = useRef(null);
  const messages = useSelector(messagesSelectors.selectAll);

  // eslint-disable-next-line max-len
  const getChannelMessages = () => messages.filter((message) => message.channelId === activeChannelId);

  const channelMessages = getChannelMessages();

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages.length]);

  return (
    <>
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b>
            #
            {activeChannelName}
          </b>
        </p>
        <span className="text-muted">
          {t('messages.label', { count: channelMessages.length })}
        </span>
      </div>
      <div className="messages overflow-auto px-5" ref={messagesRef}>
        {channelMessages.map((message) => <Message key={message.id} message={message} />)}
      </div>
    </>
  );
};

export default Messages;
