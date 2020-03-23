import React, { useRef } from 'react';

const Comments = ({ postComments, postId, addComment }) => {
  const commentForm = useRef(null);
  const authorInput = useRef(null);
  const commentInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const author = authorInput.current.value;
    const comment = commentInput.current.value;

    addComment(postId, author, comment);
    commentForm.current.reset();
  };

  const renderComment = (comment, index) => {
    return (
      <div className='comment' key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className='remove-comment'>
            &times;
          </button>
        </p>
      </div>
    );
  };

  return (
    <div className='comments'>
      {postComments.map(renderComment)}
      <form ref={commentForm} className='comment-form form' onSubmit={handleSubmit}>
        <div className={'input-group'}>
          <input type='text' className={'input-field'} ref={authorInput} placeholder='author' />
        </div>
        <div className={'input-group'}>
          <input type='text' className={'input-field'} ref={commentInput} placeholder='comment' />
        </div>
        <input type='submit' hidden />
      </form>
    </div>
  );
};

export default Comments;
