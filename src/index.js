import React from 'react';
import ReactDOM from 'react-dom';
//router
import { BrowserRouter } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
//style
import './index.css';
//component
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
