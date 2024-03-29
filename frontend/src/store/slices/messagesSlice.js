import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(),
  reducers: {
    setMessages(state, action) {
      messagesAdapter.setAll(state, action.payload);
    },
    addMessage: messagesAdapter.addOne,
    removeMessage: messagesAdapter.removeOne,
    removeChannelMessages(state, action) {
      messagesAdapter.removeMany(state, action.payload);
    },
    updateMessage: messagesAdapter.updateOne,
  },
});

export const messagesSelectors = messagesAdapter.getSelectors((state) => state.messages);

export const {
  setMessages, addMessage, removeMessage, updateMessage, removeChannelMessages,
} = messagesSlice.actions;

export default messagesSlice.reducer;
