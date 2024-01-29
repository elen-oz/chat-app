import { configureStore } from '@reduxjs/toolkit';
// import channelsReducer from './channelsSlice.js';
// import messagesReducer from './messagesSlice.js';

import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// const store = configureStore({
//   reducer: {
//     channels: channelsReducer,
//     messages: messagesReducer,
//   },
// });

export default store;
