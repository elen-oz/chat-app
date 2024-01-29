import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    channels: [],
    messages: [],
  },
  reducers: {
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setChannels, setMessages } = dataSlice.actions;
export default dataSlice.reducer;
