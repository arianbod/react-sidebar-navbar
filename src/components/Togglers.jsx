import { createContext, useContext, useState } from 'react';
const TogglersContext = createContext();
export const UseTogglers = () => useContext(TogglersContext);
const AppContext = ({ children }) => {
	const [modalState, setModalState] = useState(false);
	const [menuState, setMenuState] = useState(false);
	const contextValue = {
		modalState,
		setModalState,
		menuState,
		setMenuState,
	};
	return (
		<TogglersContext.Provider value={contextValue}>
			{children}
		</TogglersContext.Provider>
	);
};
export default AppContext;
