import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import { channelsSelectors, setActiveChannelId } from 'store/slices/channelsSlice.js';
import { ReactComponent as PlusSquare } from 'assets/icons/plus-square.svg';
import Channel from 'components/Channel';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelectors.selectAll);
  const activeChannelId = useSelector((state) => state.channels.activeChannelId);

  const selectChannel = (channelId) => {
    dispatch(setActiveChannelId(channelId));
  };

  return (
    <div className='channels'>
      <div className='channels__header d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4'>
        <b>Каналы</b>
        <Button variant="link" className='p-0 text-primary btn btn-group-vertical'>
          <PlusSquare width='20' height='20' />
        </Button>
      </div>
      <Nav as='ul' className="flex-column px-2 mb-3 overflow-auto h-100 d-block" variant="pills" fill>{
        channels.map((channel) =>
          <Nav.Item key={channel.id} as="li" className='w-100'>
            <Channel
              channel={channel}
              isActive={channel.id === activeChannelId}
              selectChannel={selectChannel}
            />
          </Nav.Item>
        )
      }</Nav>
    </div>
  );
};

export default Channels;
