import './Widgets.scss';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from 'react-twitter-embed';
import { Search } from '@material-ui/icons';

const Widgets = () => {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<Search className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>

			<div className="widgets__widgetContainer">
				<h2>What's Happening?</h2>

				<TwitterTweetEmbed tweetId={'1416034083382169600'} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="isrealsix"
					options={{ height: 400 }}
				/>
			</div>
		</div>
	);
};

export default Widgets;
