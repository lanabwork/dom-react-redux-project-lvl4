import React from 'react';
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';

const Channel = ({channel, isActive, openChannel, selectChannel}) => {
  return (
    <ButtonGroup className="d-flex dropdown">
      <Button
        className='w-100 rounded-0 text-start'
        variant={isActive ? 'secondary' : null}
        onClick={() => openChannel(channel.id)}
      >
        # {channel.name}
      </Button>
      {channel.removable && (
        <Dropdown className="flex-grow-0">
          <Dropdown.Toggle
            split
            variant={isActive ? 'secondary' : null}
            className="flex-grow-0 rounded-0"
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => selectChannel('removeChannel', channel)}>Удалить</Dropdown.Item>
            <Dropdown.Item onClick={() => selectChannel('renameChannel', channel)}>Переименовать</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </ButtonGroup>
  );
};

export default Channel;
