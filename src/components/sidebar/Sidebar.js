import React from 'react';
import {
	Twitter,
	Home,
	Search,
	NotificationsNone,
	MailOutline,
	BookmarkBorder,
	ListAlt,
	PermIdentity,
	MoreHoriz,
} from '@material-ui/icons';
import './Sidebar.scss';
import SidebarOption from './sidebarOption/SidebarOption';
import { Button } from '@material-ui/core';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Twitter />

			<SidebarOption active Icon={Home} text="Home" />
			<SidebarOption Icon={Search} text="Explore" />
			<SidebarOption Icon={NotificationsNone} text="Notifications" />
			<SidebarOption Icon={MailOutline} text="Messages" />
			<SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
			<SidebarOption Icon={ListAlt} text="Lists" />
			<SidebarOption Icon={PermIdentity} text="Profile" />
			<SidebarOption Icon={MoreHoriz} text="More" />

			<Button varient="outlined" fullWidth className="sidebar__tweet">
				Tweet
			</Button>
		</div>
	);
};

export default Sidebar;
