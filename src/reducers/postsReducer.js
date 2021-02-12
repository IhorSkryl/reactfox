import { FETCH_POSTS, ADD_POST } from '../actions/types';

const initialState = {
  posts: [],
  addedPost: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload }

    case ADD_POST:
      return {
        posts: [action.payload, ...state.posts],
        addedPost: action.payload
      }

    default:
      return state;
  }
};
