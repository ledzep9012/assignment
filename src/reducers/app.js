import CLEAR_STORAGE from '../constants/common';

const initialState = {
  err: '',
  isFetching: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case CLEAR_STORAGE:
      return {
        initialState,
      };
    default:
      return state;
  }
}
