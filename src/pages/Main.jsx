import React, { useEffect } from 'react';
import Channels from '@/components/channels/Channels.jsx';
import Chat from '@/components/Chat.jsx';
import { useDispatch } from 'react-redux';
import { setCurrentChannelId, setChannels } from '@/store/slices/channelsSlice.js';
import { setMessages } from '@/store/slices/messagesSlice.js';
import { getData } from '@/api/data.js';
import { useAuth } from '@/context/auth.js';
import { Container, Row, Col } from 'react-bootstrap';
 
const Main = () => {
  const { accessToken } = useAuth();
  const dispatch = useDispatch();

  const messages = [
    {
      body: 'привет',
      channelId: 1,
      username: 'абоба',
      id: 4,
    },
    {
      body: 'hghhhh',
      channelId: 2,
      username: 'Zyrael',
      id: 6,
    },
    {
      body: 'hgfhfdhfg',
      channelId: 1,
      username: 'Zyrael',
      id: 7,
    },
  ];

  useEffect(() => {
    const featch = async () => {
      const data = await getData(accessToken);
      dispatch(setCurrentChannelId(data.currentChannelId))
      dispatch(setChannels(data.channels))
      // dispatch(setMessages(data.messages))
      dispatch(setMessages(messages))
    };
    featch();
  }, []);

  return (
    <Container className='rounded shadow h-100 overflow-hidden'>
      <Row className='h-100 bg-white flex-md-row'>
        <Col className='border-end pt-5 px-0 bg-light'><Channels /></Col>
        <Col className='p-0 h-100' xs={10}><Chat /></Col>
      </Row>
    </Container>
  );
};
 
 export default Main;