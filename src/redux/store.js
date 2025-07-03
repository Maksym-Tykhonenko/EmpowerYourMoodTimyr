import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import remindersReducer from './slices/remindersSlice';
import moodsReducer from './slices/moodSlice';
import userReducer from './slices/userSlice';


const rootReducer = combineReducers({
  reminders: remindersReducer,
  moods: moodsReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
