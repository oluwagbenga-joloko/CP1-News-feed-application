import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import Constant from '../constants/Constants';

/**
 * news store updates the news compoent
 * @class NewsStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {
/**
 * Creates an instance of NewsStore.
 * @param {any} props
 * @memberof NewsStore
 */
  constructor(props) {
    super(props);
    this.newslist = [];
  }
/**
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
