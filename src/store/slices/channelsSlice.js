import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  currentChannelId: null,
}

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId: (state, action) => {
      state.currentChannelId = action.payload;
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
  },
})

export const { setCurrentChannelId, setChannels } = channelsSlice.actions;

export default channelsSlice.reducer;