import webHelper from '../utils/webHelper';

const getCall = params => (dispatch) => {
  webHelper
    .get(params.url || '')
    .then((res) => {
      console.log(res.headers);
      console.log('here', JSON.stringify(res.data));
      dispatch({
        type: params.success,
        payload: res.data,
      });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      dispatch({
        type: params.err,
        payload: err.msg,
      });
    });
};

export default getCall;
