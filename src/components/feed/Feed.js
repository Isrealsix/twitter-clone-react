import React from 'react';
import './Feed.scss';
import TweetBox from './tweetBox/TweetBox';

const Feed = () => {
	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Feed</h2>
			</div>

			<TweetBox />
		</div>
	);
};

export default Feed;
