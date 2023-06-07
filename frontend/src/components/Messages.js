import React from 'react';
import { useSelector } from 'react-redux';
import declOfNum from 'helpers/declOfNum';
import { MESSAGES_LABEL } from 'constants/messages';
import { messagesSelectors } from 'store/slices/messagesSlice.js';
import { channelsSelectors } from 'store/slices/channelsSlice';
import Message from 'components/Message';

const Messages = () => {
  const messages = useSelector(messagesSelectors.selectAll);
  // const messages = [
  //   {body: "test", channelId: 1, username: "admin", id: 3},
  //   {body: "test2", channelId: 2, username: "admin", id: 4},
  //   {body: "test3", channelId: 1, username: "admin", id: 5},
  // ];
  const channels = useSelector(channelsSelectors.selectAll);
  const activeChannelId = useSelector((state) => state.channels.activeChannelId);

  const getActiveChannelName = () => {
    return channels.find((channel) => channel.id === activeChannelId)?.name;
  };
  const getChannelMessages = () => {
    return messages.filter((message) => message.channelId === activeChannelId);
  };

  const activeChannelName = getActiveChannelName();
  const channelMessages = getChannelMessages();
  const messagesCount = `${channelMessages.length} ${declOfNum(channelMessages.length, MESSAGES_LABEL)}`;

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
      <div className='messages overflow-auto px-5'>
        {channelMessages.map((message) =>
          <Message message={message} />
        )}
      </div>
    </>
  );
};

export default Messages;
