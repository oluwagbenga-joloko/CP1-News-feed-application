import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import Constant from '../constants/Constants';

/**
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sourcelist = [];
    this.filterlist = [];
  }
  /**
   * @returns {object} returns list of news sources
   * @memberof SourceStore
   */
  getSource() {
    return this.sourcelist;
  }
  /**
   * @returns {object} returns list of filteres sources.
   * @memberof SourceStore
   */
  getFilter() {
    return this.filterlist;
  }
}
const Sourcestore = new SourceStore();
Dispatcher.register((action) => {
  switch (action.type) {
    case Constant.getsource:
      Sourcestore.sourcelist = action.data;
      Sourcestore.emit('source');
      break;
    case Constant.filter: {
      const query = action.data;
      Sourcestore.filterlist = Sourcestore.sourcelist.filter((source) => {
        if (source.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return source;
        }
        return undefined;
      });
      Sourcestore.emit('filter');
      break;
    }
    default:
  }
});
export default Sourcestore;
