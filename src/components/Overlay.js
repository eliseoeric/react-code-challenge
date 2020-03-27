import React, { useState } from 'react';
import { author, avatar_url} from '../data/posts';

const Overlay = ({ post }) => {

  return (
    <div className="photo-meta">
        <div className="photo-avatar">
            <img src={post.avatar_url} alt= {post.author} className='avatar'/>
        </div>
        <div className="photo-author">
            <h4>{post.author}</h4>
        </div>
    </div>
  );
};

export default Overlay;
