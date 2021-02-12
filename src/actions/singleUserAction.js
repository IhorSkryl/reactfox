import jsonPlaceholder from '../apis/jsonPlaceholder';
import { GET_USER_REQUEST, GET_USER_SUCCESS } from './types';

export const fetchSingleUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: GET_USER_REQUEST,
  });

  dispatch({
    type: GET_USER_SUCCESS,
    payload: response.data,
  });
};
