import React from 'react';
import { UseTogglers } from './context';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuItem from './MenuItem';
import { links, social } from '../data';
import Logo from '../logo.svg';
const Sidebar = () => {
	const { sidebarState, setSidebarState } = UseTogglers();
	return (
		<div>
			<div className={sidebarState ? 'sidebar sidebar-show' : 'sidebar'}>
				<section className='sidebar-header'>
					<img src={Logo} />
					<button
						onClick={() => setSidebarState(!sidebarState)}
						className='close-btn'>
						<FaTimes />
					</button>
				</section>

				<ul className='links'>
					{links.map((item) => {
						const { id, url, text, icon } = item;
						return (
							<li key={id}>
								<a href={url}>
									{icon}
									<span className='Text'>{text}</span>
								</a>
							</li>
						);
					})}
				</ul>
				<ul className='social-links'>
					{social.map((item) => {
						const { id, url, icon } = item;
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
			{!sidebarState && (
				<button onClick={() => setSidebarState(!sidebarState)}>
					<FaBars className='sidebar-toggler' />
				</button>
			)}
		</div>
	);
};

export default Sidebar;
