import React from 'react';
import { UseTogglers } from './Togglers';

const Menu = () => {
	const { menuState, setMenuState } = UseTogglers();
	return (
		<>
			{menuState ? (
				<div>
					Menu
					<button onClick={() => setMenuState(!menuState)}>X</button>
				</div>
			) : (
				<button onClick={() => setMenuState(!menuState)}>Opener</button>
			)}
		</>
	);
};

export default Menu;
