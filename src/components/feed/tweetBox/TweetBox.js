import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../../../firebase';
import './TweetBox.scss';

const TweetBox = () => {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = ev => {
		ev.preventDefault();
		db.collection('posts').add({
			displayName: 'Israel Ojeifo',
			username: 'isrealsix',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		});
		setTweetMessage('');
		setTweetImage('');
	};

	const updateState = ev => {
		const type = ev.target.dataset.type;
		if (type === 'message') {
			setTweetMessage(ev.target.value);
		}
		if (type === 'image') {
			setTweetImage(ev.target.value);
		}
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
					<input
						placeholder="What's happening?"
						type="text"
						data-type="message"
						value={tweetMessage}
						onChange={updateState}
					/>
				</div>
				<input
					placeholder="Optional: Enter image URL"
					type="text"
					className="tweetBox__imageInput"
					data-type="image"
					value={tweetImage}
					onChange={updateState}
				/>

				<Button
					type="submit"
					onClick={sendTweet}
					className="tweetBox__tweetButton"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
};

export default TweetBox;
