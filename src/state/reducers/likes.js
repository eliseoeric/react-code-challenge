function likes(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES': 
            return [
                ...state,
                {
                likes: action.likes,
                },
            ];
         
        default: {
            return state;
         }
    }
}
  
export default likes;
