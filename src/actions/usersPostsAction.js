import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_USERS_POSTS_REQUEST, FETCH_USERS_POSTS_SUCCESS } from './types';

export const fetchPostsAction = (id) => async (dispatch) => {
  const response = await jsonPlaceholder(`users/${id}/posts`);

  dispatch({
    type: FETCH_USERS_POSTS_REQUEST,
  });

  dispatch({
    type: FETCH_USERS_POSTS_SUCCESS,
    payload: response.data,
  });
};
