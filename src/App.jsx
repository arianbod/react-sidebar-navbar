import React from 'react';
import { Modal, Home, Sidebar } from './components';
const App = () => {
	return (
		<>
			<Home>
				<Modal />
				<Sidebar />
			</Home>
		</>
	);
};
export default App;
