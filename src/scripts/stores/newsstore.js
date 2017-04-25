import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import constant from '../constants/constants';

class NewsStore extends EventEmitter {
  constructor(props) {
    super(props);
    this.newslist = [];
    dispatcher.register((action) => {
      switch (action.type) {
        case constant.getnews:
          this.newslist = action.data;
          this.emit('changeNews');
          break;
        default:
    // dfdfdf
      }
    });
  }
  getNews() {
    return this.newslist;
  }
}

const newsStore = new NewsStore();
export default newsStore;
