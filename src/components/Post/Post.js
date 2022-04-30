import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({displayName,
    username,
    verified,
    text,
    image,
    avatar }) => {
    
    return (
        <div className='post'>
             <div className="post__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {displayName}{" "}
                  <span className="post__headerSpecial">
                    {verified && <VerifiedUserIcon className="post__badge" />} @
                    {username}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img className="image__size" src={image} alt="" />
            <div className="post__footer">
              <ChatBubbleIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
    );
};

export default Post;