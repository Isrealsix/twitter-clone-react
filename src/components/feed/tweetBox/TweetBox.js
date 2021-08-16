import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.scss';

const TweetBox = () => {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
					<input placeholder="What's happening?" type="text" />
				</div>
				<input
					placeholder="Optional: Enter image URL"
					type="text"
					className="tweetBox__imageInput"
				/>

				<Button className="tweetBox__tweetButton">Tweet</Button>
			</form>
		</div>
	);
};

export default TweetBox;
