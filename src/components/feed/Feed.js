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

			<Post
				displayName="Israel Ojeifo"
				username="isrealsix"
				verified
				text="It's really cool to be a programmer"
				avatar="https://images.pexels.com/photos/7530969/pexels-photo-7530969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				image="https://i.giphy.com/3oriOdaziBUn6KfTjy.gif"
			/>
			<Post />
		</div>
	);
};

export default Feed;
