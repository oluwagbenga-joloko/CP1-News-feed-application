import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import Constant from '../constants/Constants';

/**
 * @description updates the source componenet.
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * @description Creates an instance of SourceStore.
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sourcelist = [];
    this.filterlist = [];
  }
  /**
   * @description returns list of news sources
   * @returns {object} list of news sources
   * @memberof SourceStore
   */
  getSource() {
    return this.sourcelist;
  }
  /**
   * @description returns list of filtered sources.
   * @returns {object} list of filteres sources.
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
