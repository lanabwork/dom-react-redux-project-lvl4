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
      channelsAdapter.setAll(state.channels, action.payload);
    },
    addChannel(state, action) {
      channelsAdapter.addOne(state.channels, action.payload);
    },
    removeChannel(state, action) {
      channelsAdapter.removeOne(state.channels, action.payload.id);
    },
    renameChannel(state, action) {
      channelsAdapter.updateOne(
        state.channels,
        {id: action.payload.id, changes: { name: action.payload.name }}
      );
    },
  },
})

export const channelsSelectors = channelsAdapter.getSelectors((state) => state.channels.channels);

export const { setActiveChannelId, setChannels, addChannel, removeChannel, renameChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
