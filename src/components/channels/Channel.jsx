import React from 'react';
import cn from 'classnames';

const Channel = ({ channel, isActive }) => {
  const btnClass = cn('w-100 rounded-0 text-start btn', {
    'btn-secondary': isActive,
  });

  return (
    <button className={btnClass}># {channel.name}</button>
  );
};

export default Channel;