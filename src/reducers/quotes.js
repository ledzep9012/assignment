import { QUOTE_ERROR, FETCH_QUOTES, GET_QUOTES } from '../constants/quote';

const initialState = {
  quotes: [],
  count: 10,
  isFetching: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case QUOTE_ERROR:
      return {
        ...state,
        ...initialState,
        isFetching: false,
        error: payload,
      };
    case FETCH_QUOTES:
      return {
        ...state,
        isFetching: true,
      };
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
