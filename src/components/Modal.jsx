import React from 'react';
import { UseTogglers } from './Togglers';

const Modal = () => {
	const { modalState, setModalState } = UseTogglers();
	return (
		<>
			{modalState ? (
				<section>
					Modal showing
					<button onClick={() => setModalState(!modalState)}>x</button>
				</section>
			) : (
				<button onClick={() => setModalState(!modalState)}>Show Modal</button>
			)}
		</>
	);
};

export default Modal;
