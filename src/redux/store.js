import { configureStore } from '@reduxjs/toolkit';
import{
  persistStore,
  PersistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
}from "redux-persist";
import storage from "redux-persist/lib/storage";
import farmerReducer from '../redux/farmerSlice'
const persistConfig={
  key:"root",
  version:1,
  storage,
};
const persistedReducer=PersistReducer(persistConfig,farmerReducer);
export const store = configureStore({
  reducer: {farmer:persistedReducer},
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    }),
});

export let persistor=persistStore(store);
