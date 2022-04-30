import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import db from '../../firebase';
import './TweetBox.css';
import firebase from "firebase/compat/app";


const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Sheikh Yeamin",
            username: "SheikhYeamin96",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1517185752895229954/YbFoWUJU_400x400.jpg",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                   <Avatar src='https://pbs.twimg.com/profile_images/1517185752895229954/YbFoWUJU_400x400.jpg' />
                   <input 
                   onChange={e => setTweetMessage(e.target.value)}
                   value={tweetMessage}
                   placeholder="What's Happening" 
                   type="text" 
                   />
                  
                </div>
                <input
                 className='tweetBox__imageInput' 
                 onChange={e => setTweetImage(e.target.value)}
                 value={tweetImage}
                 placeholder='Enter Image Url' 
                 type="text"
                 />

                <Button
                type='submit'
                onClick={sendTweet}
                 className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;