import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Messages from '@/components/messages/Messages';
import declOfNum from '@/utils/declOfNum.js';
import { COUNT_MESSAGES_LABEL  } from '@/constants/messages.js';

const Chat = () => {
  const channels = useSelector((state) => state.channels.channels);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const messages = useSelector((state) => state.messages.messages);
  const [currentChannel, setCurrentChannel] = useState(null);
  const [currentChannelMessages, setCurrentChannelMessages] = useState([]);
  const messagesCount = currentChannelMessages.length;
  const messagesCountLabel = declOfNum(messagesCount, COUNT_MESSAGES_LABEL);

  const getCurrentChannel = () => {
    return channels.find((channel) => channel.id === currentChannelId);
  };

  const filterMessages = () => {
    return messages.filter((message) => message.channelId === currentChannelId);
  };

  useEffect(() => {
    setCurrentChannel(getCurrentChannel());
    setCurrentChannelMessages(filterMessages());
  }, [currentChannelId]);

  return (
    <>
      {currentChannel && (
        <div className='d-flex flex-column h-100'>
          <div className='bg-light mb-4 p-3 shadow-sm small'>
            <p className='m-0'><b># {currentChannel.name}</b></p>
            <span className='text-muted'>{messagesCount} {messagesCountLabel}</span>
          </div>
          <Messages messages={currentChannelMessages} />
        </div>  
      )}
    </>
  );
};

export default Chat;