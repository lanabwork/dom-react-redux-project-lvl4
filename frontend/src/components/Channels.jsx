import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { channelsSelectors, setActiveChannelId } from '../store/slices/channelsSlice';
import { ReactComponent as PlusSquare } from '../assets/icons/plus-square.svg';
import Channel from './Channel';
import AddChannelModal from './modals/AddChannelModal';
import RemoveChannelModal from './modals/RemoveChannelModal';
import RenameChannelModal from './modals/RenameChannelModal';

const Channels = function Channels() {
  const { t } = useTranslation();
  const [modal, setModal] = useState('');
  const [selectedChannel, setSelectedChannel] = useState(null);
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelectors.selectAll);
  const activeChannelId = useSelector((state) => state.channels.activeChannelId);

  const openChannel = (channelId) => {
    dispatch(setActiveChannelId(channelId));
  };

  const closeModal = () => {
    setModal('');
    setSelectedChannel(null);
  };

  const selectChannel = (modalName, channel) => {
    setModal(modalName);
    setSelectedChannel(channel);
  };

  return (
    <>
      {modal === 'addChannel' && (
      <AddChannelModal
        isShowed={modal}
        channels={channels}
        closeModal={closeModal}
      />
      )}
      {modal === 'removeChannel' && (
      <RemoveChannelModal
        isShowed={modal}
        selectedChannel={selectedChannel}
        closeModal={closeModal}
      />
      )}
      {modal === 'renameChannel' && (
      <RenameChannelModal
        isShowed={modal}
        channels={channels}
        selectedChannel={selectedChannel}
        closeModal={closeModal}
      />
      )}
      <div className="channels__header d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>{t('channelsHeader')}</b>
        <Button
          variant="link"
          className="p-0 text-primary btn btn-group-vertical"
          onClick={() => setModal('addChannel')}
        >
          <PlusSquare width="20" height="20" />
          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <Nav
        as="ul"
        className="flex-column px-2 mb-3 overflow-auto h-100 d-block nav-pills nav-fill"
        variant="pills"
        fill
      >
        {
        channels.map((channel) => (
          <Nav.Item key={channel.id} as="li" className="w-100">
            <Channel
              channel={channel}
              isActive={channel.id === activeChannelId}
              openChannel={openChannel}
              selectChannel={selectChannel}
            />
          </Nav.Item>
        ))
      }
      </Nav>
    </>
  );
};

export default Channels;
