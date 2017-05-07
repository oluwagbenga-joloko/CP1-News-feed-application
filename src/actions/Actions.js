import Dispatcher from '../dispatcher/Dispatcher';
import ApiCall from '../apiCall/ApiCall';
import Constant from '../constants/Constants';

const Actions = {
  /**
   * gets the news sources
   * @returns {undefined}
   */
  getsources() {
    return ApiCall.getSources().then((data) => {
      Dispatcher.dispatch({
        type: Constant.getsource,
        data,
      });
    }, () => {
    });
  },
  /**
   * gets the news articles
   * @param {any} source
   * @param {any} sort
   * @returns {undefined}
   */
  getnews(source, sort) {
    ApiCall.getNews(source, sort).then((data) => {
      Dispatcher.dispatch({
        type: Constant.getnews,
        data,
      });
    }, () => {
    });
  },
  /**
   * gets search data
   * @param {any} data
   * @returns {undefined}
   */
  filter(data) {
    Dispatcher.dispatch({
      type: Constant.filter,
      data,
    });
  },
};
export default Actions;
