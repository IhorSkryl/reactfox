import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_USERS_TODOS_REQUEST, FETCH_USERS_TODOS_SUCCESS } from './types';

export const fetchUsersTodos = (id) => async (dispatch) => {
  const response = await jsonPlaceholder(`users/${id}/todos`);

  dispatch({
    type: FETCH_USERS_TODOS_REQUEST,
  });

  dispatch({
    type: FETCH_USERS_TODOS_SUCCESS,
    payload: response.data,
  });
};
