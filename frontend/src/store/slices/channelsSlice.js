import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialState = {
  channels: channelsAdapter.getInitialState(),
  activeChannelId: 1,
}

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setActiveChannelId: (state, action) => {
      state.activeChannelId = action.payload;
    },
    setChannels(state, action) {
      channelsAdapter.setAll(state.channels, action.payload)
    },
    addChannel: channelsAdapter.addOne,
    removeChannel: channelsAdapter.removeOne,
    updateChannel: channelsAdapter.updateOne,
  },
})

export const channelsSelectors = channelsAdapter.getSelectors((state) => state.channels.channels);

export const { setActiveChannelId, setChannels, addChannel, removeChannel, updateChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
