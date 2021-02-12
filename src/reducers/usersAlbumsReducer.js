import {
  FETCH_USERS_ALBUMS_REQUEST,
  FETCH_USERS_ALBUMS_SUCCESS,
} from '../actions/types';

const initialState = {
  albums: [],
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_ALBUMS_REQUEST:
      return {
        albums: [],
        isFetching: true,
      };

    case FETCH_USERS_ALBUMS_SUCCESS:
      return {
        albums: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
