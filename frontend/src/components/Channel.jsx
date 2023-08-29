import React from 'react';
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import dictionaryFilter from 'leo-profanity';

// eslint-disable-next-line react/function-component-definition
const Channel = function Channel({
  // eslint-disable-next-line react/prop-types
  channel, isActive, openChannel, selectChannel,
}) {
  const { t } = useTranslation();

  return (
    <ButtonGroup className="d-flex dropdown">
      <Button
        className="w-100 rounded-0 text-start"
        variant={isActive ? 'secondary' : null}
        /* eslint-disable-next-line react/prop-types */
        onClick={() => openChannel(channel.id)}
      >
        #
        {' '}
        {/* eslint-disable-next-line react/prop-types */}
        {dictionaryFilter.clean(channel.name)}
      </Button>
      {/* eslint-disable-next-line react/prop-types */}
      {channel.removable && (
        <Dropdown className="flex-grow-0">
          <Dropdown.Toggle
            split
            variant={isActive ? 'secondary' : null}
            className="flex-grow-0 rounded-0"
          >
            <span className="visually-hidden">Управление каналом</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => selectChannel('removeChannel', channel)}>
              {t('channelDropdownMenu.remove')}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => selectChannel('renameChannel', channel)}>
              {t('channelDropdownMenu.rename')}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </ButtonGroup>
  );
};

export default Channel;
