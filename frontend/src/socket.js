import { io } from 'socket.io-client';
import { store } from 'store/store';
import { addMessage } from 'store/slices/messagesSlice.js';
import { addChannel, removeChannel, renameChannel, setActiveChannelId } from 'store/slices/channelsSlice.js';

const socket = io('');

socket.on('connect', () => {
  console.log(socket.id, socket.connected);
});
socket.on('newMessage', (message) => {
  store.dispatch(addMessage(message));
});
socket.on('newChannel', (channel) => {
  store.dispatch(addChannel(channel));
  store.dispatch(setActiveChannelId(channel.id));
});
socket.on('removeChannel', (channel) => {
  store.dispatch(removeChannel(channel));
  store.dispatch(setActiveChannelId(1));
});
socket.on('renameChannel', (channel) => {
  store.dispatch(renameChannel({
    id: channel.id,
    name:  channel.name,
  }));
});

export default socket;
