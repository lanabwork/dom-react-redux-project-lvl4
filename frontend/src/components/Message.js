import React from 'react';
import dictionaryFilter from 'leo-profanity';

const Message = ({message}) => {
  return (
    <div className='text-break mb-2'>
      <b>{message.username}</b>: {dictionaryFilter.clean(message.body)}
    </div>
  );
};

export default Message;
