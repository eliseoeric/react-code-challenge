import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
  return (
    <div className='photo-grid'>
      {props.posts.map((post, i) => (
        <Photo {...props} key={i} i={i} post={post} /> // todo this is going to need some fixing re: ...props
      ))}
    </div>
  );
};

export default PhotoGrid;
