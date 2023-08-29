import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './slices/channelsSlice';
import messagesReducer from './slices/messagesSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
  },
});
