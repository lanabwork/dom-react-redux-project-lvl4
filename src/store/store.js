import { configureStore } from '@reduxjs/toolkit';
import messages from './slices/messagesSlice.js';
import channels from './slices/channelsSlice.js';

export const store = configureStore({
  reducer: {
    messages,
    channels,
  },
});