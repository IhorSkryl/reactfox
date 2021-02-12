import { GET_USER_REQUEST, GET_USER_SUCCESS } from '../actions/types';

const initialState = {
  user: {},
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        user: {},
        isFetching: true,
      };

    case GET_USER_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
