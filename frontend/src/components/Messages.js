import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { messagesSelectors } from 'store/slices/messagesSlice.js';
import Message from 'components/Message';
import { useTranslation } from 'react-i18next';

const Messages = ({ activeChannelId, activeChannelName }) => {
  const { t } = useTranslation();
  const messagesRef = useRef(null);
  const messages = useSelector(messagesSelectors.selectAll);

  const getChannelMessages = () => {
    return messages.filter((message) => message.channelId === activeChannelId);
  };

  const channelMessages = getChannelMessages();

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages.length]);

  return (
    <>
      <div className='bg-light mb-4 p-3 shadow-sm small'>
        <p className='m-0'>
          <b># {activeChannelName}</b>
        </p>
        <span className='text-muted'>
          {t('messages.label', {count: channelMessages.length})}
        </span>
      </div>
      <div className='messages overflow-auto px-5' ref={messagesRef}>
        {channelMessages.map((message) =>
          <Message key={message.id} message={message} />
        )}
      </div>
    </>
  );
};

export default Messages;
