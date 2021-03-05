import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/auth';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});
