import React from 'react';
import './SidebarOption.scss';
const SidebarOption = ({ text, Icon, active }) => {
	return (
		<div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
};

export default SidebarOption;
