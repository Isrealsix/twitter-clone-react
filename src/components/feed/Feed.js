import React from 'react';
import './Feed.scss';
import Post from './post/Post';
import TweetBox from './tweetBox/TweetBox';

const Feed = () => {
	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>

			<TweetBox />

			<Post />
			<Post />
		</div>
	);
};

export default Feed;
