import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_USERS } from './types';

export const fetchUsers = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: response.data,
  });
};