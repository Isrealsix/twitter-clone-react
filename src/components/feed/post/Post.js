import { Avatar } from '@material-ui/core';
import {
	ChatBubbleOutline,
	FavoriteBorder,
	Publish,
	Repeat,
	VerifiedUser,
} from '@material-ui/icons';
import './Post.scss';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Israel Ojeifo
							<span className="post__headerSpecial">
								<VerifiedUser className="post__badge" />
								@Isrealsix
							</span>
						</h3>
					</div>
					<div className="post__headerDescription">
						<p>You can't shutdown the real napster</p>
					</div>
					<div>
						<img
							className="post__image"
							src="https://i.giphy.com/media/Zd0DYHlBmZTGaiIFRY/giphy.webp"
							alt=""
						/>
					</div>
					<div className="post__footer">
						<ChatBubbleOutline fontSize="small" />
						<Repeat fontSize="small" />
						<FavoriteBorder fontSize="small" />
						<Publish fontSize="small" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
