import { persistStore, persistReducer } from 'redux-persist';
import {legacy_createStore as createStore} from 'redux';
import storage from 'redux-persist/lib/storage';

import rootReducer from './../reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configurePersist = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
