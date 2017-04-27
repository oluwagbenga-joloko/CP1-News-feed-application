import dispatcher from '../dispatcher/dispatcher';
import api from '../api/api';
import constant from '../constants/constants';

const actions = {
  /**
   * gets news sources from api
   */
  getsources() {
    return api.getSources().then((data) => {
      dispatcher.dispatch({
        type: constant.getsource,
        data,
      });
    }, () => {
    });
  },
  getnews(source, sort) {
    api.getNews(source, sort).then((data) => {
      dispatcher.dispatch({
        type: constant.getnews,
        data,
      });
    }, () => {
    });
  },
  filter(data) {
    dispatcher.dispatch({
      type: constant.filter,
      data,
    });
  },
};
export default actions;
