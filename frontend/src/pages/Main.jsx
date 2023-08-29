import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { channelsSelectors, setChannels } from '../store/slices/channelsSlice';
import { setMessages } from '../store/slices/messagesSlice';
import Channels from '../components/Channels';
import Messages from '../components/Messages';
import MessageForm from '../components/MessageForm';
import { useAuth } from '../context/auth';
import { getData } from '../api/data';

// eslint-disable-next-line react/function-component-definition
const Main = function Main() {
  const { accessToken, username } = useAuth();
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelectors.selectAll);
  const activeChannelId = useSelector((state) => state.channels.activeChannelId);

  // eslint-disable-next-line max-len
  const getActiveChannelName = () => channels.find((channel) => channel.id === activeChannelId)?.name;

  const activeChannelName = getActiveChannelName();

  useEffect(() => {
    if (accessToken) {
      getData(accessToken).then((data) => {
        dispatch(setChannels(data?.channels));
        dispatch(setMessages(data?.messages));
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!channels.length) return null;

  return (
    <Container className="h-100 main my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col className="col-4 border-end px-0 bg-light flex-column h-100 d-flex" md={2}>
          <Channels />
        </Col>
        <Col className="p-0 h-100 d-flex flex-column">
          <Messages activeChannelId={activeChannelId} activeChannelName={activeChannelName} />
          <MessageForm activeChannelId={activeChannelId} username={username} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
