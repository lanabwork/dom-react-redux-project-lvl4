import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Channel from './Channel.jsx';
import SvgIcon from '@/components/SvgIcon.js';
import { Button, Nav } from 'react-bootstrap';
import plusSquare from '@/assets/icons/plus-square.svg';
import { setCurrentChannelId } from '@/store/slices/channelsSlice.js';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.channels);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);

  const setChannelId = (id) => {
    dispatch(setCurrentChannelId(id))
  };

  return (
    <>
      <div className='d-flex justify-content-between mb-2 ps-4 pe-2'>
        <span>Каналы</span>
        <Button variant="link" className='p-0 text-primary btn-group-vertical'>
          <SvgIcon icon={plusSquare} width={20} height={20} />
        </Button>
      </div>
      {channels && <Nav variant="pills" className="flex-column nav-fill px-2">
        {channels.map((channel) => (
          <Nav.Item key={channel.id} className="w-100" onClick={() => setChannelId(channel.id)}>
            <Channel channel={channel} isActive={channel.id === currentChannelId} />
          </Nav.Item>)
        )}
      </Nav>}
    </>
  );
};

export default Channels;