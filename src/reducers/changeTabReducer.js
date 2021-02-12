import { CHANGE_ACTIVE_TAB } from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_TAB:
      return action.payload;

    default:
      return state;
  }
};
