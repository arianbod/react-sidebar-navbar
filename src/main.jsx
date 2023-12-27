import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppContext from './components/Togglers';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppContext>
			<App />
		</AppContext>
	</React.StrictMode>
);
