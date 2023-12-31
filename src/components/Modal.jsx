import React from 'react';
import { UseTogglers } from './context';
import { FaBars, FaTimes } from 'react-icons/fa';

const Modal = () => {
	const { modalState, setModalState } = UseTogglers();
	return (
		<>
			<div className='center-center'>
				<section
					className={modalState ? 'modal-overlay show-modal' : 'modal-overlay'}>
					<section className='modal-container'>
						<button
							onClick={() => setModalState(!modalState)}
							className='close-btn close-modal-btn'>
							<FaTimes />
						</button>
						<h3>Modal Content</h3>
					</section>
				</section>
				{!modalState && (
					<button
						onClick={() => setModalState(!modalState)}
						className='btn'>
						Show Modal
					</button>
				)}
			</div>
		</>
	);
};

export default Modal;
