import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Hapening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SheikhYeamin96"
                options={{height: 400}}
                />
                <TwitterShareButton 
                url={'facebook.com/cleverprogrammer'}
                options={{text: "#ReactJS is awesome", via: "SheikhYeamin96"}}
                />
            </div>
        </div>
    );
};

export default Widgets;