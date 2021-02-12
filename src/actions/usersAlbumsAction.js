import jsonPlaceholder from '../apis/jsonPlaceholder';
import {
  FETCH_USERS_ALBUMS_REQUEST,
  FETCH_USERS_ALBUMS_SUCCESS,
} from './types';

export const fetchUsersAlbums = (id) => async (dispatch) => {
  const response = await jsonPlaceholder(`users/${id}/albums`);

  dispatch({
    type: FETCH_USERS_ALBUMS_REQUEST,
  });

  dispatch({
    type: FETCH_USERS_ALBUMS_SUCCESS,
    payload: response.data,
  });
};
