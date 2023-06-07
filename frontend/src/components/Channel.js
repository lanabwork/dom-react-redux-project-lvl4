import React from 'react';
import { Button } from 'react-bootstrap';

const Channel = ({channel, isActive, selectChannel}) => {
  return (
    <Button
      className='w-100 rounded-0 text-start'
      variant={isActive ? 'secondary' : null}
      onClick={() => selectChannel(channel.id)}
    >
      <span className="me-1">#</span>
      {channel.name}
    </Button>
  );
};

export default Channel;
