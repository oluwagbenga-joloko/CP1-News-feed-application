import Dispatcher from '../dispatcher/Dispatcher';
import ApiCall from '../apiCall/ApiCall';
import Constant from '../constants/Constants';

const Actions = {
  /**
   * gets the news sources
   * @returns {undefined} returns no value
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
   * @param {any} source the news source
   * @param {any} sort the sort paramter (can be either top, latest or popular)
   * @returns {undefined} retuns no value pasess data to the the
   * Dispatcher
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
   * @param {string} data the search input from user
   * @returns {undefined} return no value
   * passes data to the dispatcher
   */
  filter(data) {
    Dispatcher.dispatch({
      type: Constant.filter,
      data,
    });
  },
};
export default Actions;
