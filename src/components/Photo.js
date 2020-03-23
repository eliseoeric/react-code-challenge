import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Photo = ({ post, i, comments }) => {

  return (
    <figure className='grid-figure'>
      <div className='grid-photo-wrap'>
        <Link to={`/view/${post.code}`} className={'image-link'}>
          <img src={post.display_src} alt={post.caption} className='grid-photo' />

          <div className={'image-overlay'}>
            {/* author meta data and avatar here */}
          </div>
        </Link>

        <TransitionGroup>
          <CSSTransition key={post.likes} timeout={500} classNames='like'>
            <span className='likes-heart'>{post.likes}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <figcaption>
        <p>{post.caption}</p>
        <div className='control-buttons'>
          <button className='likes'>
            &hearts; {post.likes}
          </button>
          <Link className='button' to={`/view/${post.code}`}>
            <span className='comment-count'>
              <span className='speech-bubble'></span>
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
