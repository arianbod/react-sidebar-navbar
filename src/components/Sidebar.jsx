import React from 'react';
import { UseTogglers } from './Togglers';

const Sidebar = () => {
	const { sidebarState, setSidebarState } = UseTogglers();
	return (
		<>
			{sidebarState ? (
				<div>
					Sidebar
					<button onClick={() => setSidebarState(!sidebarState)}>X</button>
				</div>
			) : (
				<button onClick={() => setSidebarState(!sidebarState)}>
					Show Sidebar
				</button>
			)}
		</>
	);
};

export default Sidebar;
