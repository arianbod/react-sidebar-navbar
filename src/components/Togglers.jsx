import { createContext, useContext, useState } from 'react';
const TogglersContext = createContext();
export const UseTogglers = () => useContext(TogglersContext);
const AppContext = ({ children }) => {
	const [modalState, setModalState] = useState(false);
	const [sidebarState, setSidebarState] = useState(false);
	const contextValue = {
		modalState,
		setModalState,
		sidebarState,
		setSidebarState,
	};
	return (
		<TogglersContext.Provider value={contextValue}>
			{children}
		</TogglersContext.Provider>
	);
};
export default AppContext;
