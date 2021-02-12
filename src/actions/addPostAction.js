import jsonPlaceholder from '../apis/jsonPlaceholder';
import { ADD_POST } from './types';

export const addPost = (formValues) => async (dispatch) => {
  const response = await jsonPlaceholder.post('/posts', formValues);

  dispatch({
    type: ADD_POST,
    payload: response.data,
  });
};
