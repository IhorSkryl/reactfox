import { CHANGE_ACTIVE_TAB } from './types';

export const changeActive = (index) => {
  return {
    type: CHANGE_ACTIVE_TAB,
    payload: index,
  };
};
