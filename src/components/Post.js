import { Avatar } from '@material-ui/core';
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined"
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined"
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined"
import SendOutlinedIcon from "@material-ui/icons/SendOutlined"
import React from 'react';
import ImportOptions from './ImportOptions';
import './Post.css';

function Post({name,description,message,photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                  <h4>{message}</h4>
            </div>

            <div className="post__buttons">
           <ImportOptions Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/> 
           <ImportOptions Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
           <ImportOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
           <ImportOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post
