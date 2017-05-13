import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import Constant from '../constants/Constants';

/**
 * @description news store updates the news component
 * @class NewsStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {
/**
 * @description Creates an instance of NewsStore
 * @memberof NewsStore
 */
  constructor() {
    super();
    this.newslist = [];
  }
/**
 * @description returns list of news
 * @returns {object} returns list of news.
 * @memberof NewsStore
 */
  getNews() {
    return this.newslist;
  }
}
const Newsstore = new NewsStore();
Dispatcher.register((action) => {
  switch (action.type) {
    case Constant.getnews:
      Newsstore.newslist = action.data;
      Newsstore.emit('changeNews');
      break;
    default:
  }
});

export default Newsstore;
