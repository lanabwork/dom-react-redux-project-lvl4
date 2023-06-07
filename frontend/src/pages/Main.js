import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getData } from 'api/data';
import { useAuth } from 'context/auth';
import { channelsSelectors, setChannels } from 'store/slices/channelsSlice.js';
import { setMessages } from 'store/slices/messagesSlice.js';
import Channels from 'components/Channels.js';
import Messages from 'components/Messages';
import MessageForm from 'components/MessageForm';

const Main = () => {
  const { accessToken } = useAuth();
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelectors.selectAll);

  useEffect(() => {
    getData(accessToken).then((data) => {
      dispatch(setChannels(data?.channels));
      dispatch(setMessages(data?.messages));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!channels.length) return null;

  return (
    <Container className='h-100 main my-4 overflow-hidden rounded shadow'>
      <Row className='h-100 bg-white flex-md-row'>
        <Col className='col-4 border-end px-0 bg-light flex-column h-100 d-flex' md={2}>
          <Channels />
        </Col>
        <Col className='p-0 h-100 d-flex flex-column'>
          <Messages />
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
