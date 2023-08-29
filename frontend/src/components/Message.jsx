import React from 'react';
import dictionaryFilter from 'leo-profanity';

// eslint-disable-next-line react/prop-types
function Message({ message }) {
  return (
    <div className="text-break mb-2">
      {/* eslint-disable-next-line react/prop-types */}
      <b>{message.username}</b>
      :
      {/* eslint-disable-next-line react/prop-types */}
      {dictionaryFilter.clean(message.body)}
    </div>
  );
}

export default Message;
