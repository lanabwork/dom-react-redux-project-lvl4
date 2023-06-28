import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import declOfNum from 'helpers/declOfNum';
import { MESSAGES_LABEL } from 'constants/messages';
import { messagesSelectors } from 'store/slices/messagesSlice.js';
import Message from 'components/Message';

const Messages = ({ activeChannelId, activeChannelName }) => {
  const messagesRef = useRef(null);
  const messages = useSelector(messagesSelectors.selectAll);

  const getChannelMessages = () => {
    return messages.filter((message) => message.channelId === activeChannelId);
  };

  const channelMessages = getChannelMessages();
  const messagesCount = `${channelMessages.length} ${declOfNum(channelMessages.length, MESSAGES_LABEL)}`;

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
          {messagesCount}
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
