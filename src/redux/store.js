import { createStore, applyMiddleware } from 'redux';
//persist store function
//allows browsers to cache store
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [];

if (process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}

//we technically don't need a export here
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
//we technically don't need a store here
export const persistor = persistStore(store);
