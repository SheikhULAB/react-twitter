import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import db from '../../firebase';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
       db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc => doc.data()))
       ))
    },[])
    return (
        <div className='feed'>
            <div className="feed__header">
                 <h2>feed</h2>
            </div>
            <TweetBox />

            {
                posts.map(post => (
                    <Post 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text} 
                    avatar={post.avatar}
                    image={post.image}
                    />
                 
                ))
            }

          
        </div>
    );
};

export default Feed;