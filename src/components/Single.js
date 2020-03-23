import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import { useParams } from 'react-router-dom';

const Single = (props) => {
  const { posts, comments } = props;
  let { postId } = useParams();
  const index = posts.findIndex((post) => post.code === postId);
  const post = posts[index];
  const postComments = comments[postId] || [];

  return (
    <div className='single-photo'>
      <Photo i={index} post={post} {...props} />
      <Comments postComments={postComments} {...props} postId={postId} />
    </div>
  );
};

export default Single;
