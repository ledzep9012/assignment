import * as quote from '../constants/quote';
import getCall from './fetch.actions';

const getQuotes = params => (dispatch) => {
  const url = params ? `?cat=${params.cat}&count=${params.count}` : null;
  const props = {
    url,
    success: quote.GET_QUOTES,
    err: quote.QUOTE_ERROR,
  };

  dispatch({
    type: quote.FETCH_QUOTES,
    payload: {
      fetching: true,
    },
  });

  getCall(props)(dispatch);
};


export default getQuotes;
