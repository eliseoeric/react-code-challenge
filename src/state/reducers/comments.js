function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT': {
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
    }
    default: {
      return state;
    }
  }

  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite the post with a new post
      [action.postId]: postComments(state[action.postId], action),
    };
  }

  return state;
}

export default comments;
