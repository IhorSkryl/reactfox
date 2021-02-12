import {
  FETCH_USERS_POSTS_REQUEST,
  FETCH_USERS_POSTS_SUCCESS,
} from '../actions/types';

const initialState = {
  posts: [],
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_POSTS_REQUEST:
      return {
        posts: [],
        isFetching: true,
      };

    case FETCH_USERS_POSTS_SUCCESS:
      return {
        posts: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
