import {
  FETCH_USERS_TODOS_REQUEST,
  FETCH_USERS_TODOS_SUCCESS,
} from '../actions/types';

const initialState = {
  todos: [],
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_TODOS_REQUEST:
      return {
        todos: [],
        isFetching: true,
      };

    case FETCH_USERS_TODOS_SUCCESS:
      return {
        todos: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
