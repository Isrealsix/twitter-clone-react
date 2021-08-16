import React, { useEffect, useState } from 'react';
import './Feed.scss';
import Post from './post/Post';
import TweetBox from './tweetBox/TweetBox';
import db from '../../firebase';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch data from firestore and populated the useState
		db.collection('posts').onSnapshot(snapshot =>
			setPosts(snapshot.docs.map(doc => doc.data()))
		);
	}, []);

	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>

			<TweetBox />

			{posts.map(post => (
				<Post
					displayName={post.displayName}
					username={post.username}
					verified={post.verified}
					text={post.text}
					avatar={post.avatar}
					image={post.image}
				/>
			))}
		</div>
	);
};

export default Feed;
