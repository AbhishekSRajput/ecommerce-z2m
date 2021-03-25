import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [logger];

//we technically don't need a export here
const store = createStore(rootReducer, applyMiddleware(...middleWares));
//we technically don't need a store here
const persistor = persistStore(store);

export default { store, persistor };
