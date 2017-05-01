import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import constant from '../constants/constants';

class SourceStore extends EventEmitter {
  constructor(props) {
    super(props);
    this.sourcelist = [];
    this.filterlist = []
    ;
    dispatcher.register((action) => {
      switch (action.type) {
        case constant.getsource:
          this.sourcelist = action.data;
          this.emit('source');
          break;
        case constant.filter:
          const query = action.data;
          this.filterlist = this.sourcelist.filter((source) => {
            if (source.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
              return source;
            }
          },
          );
          this.emit('filter');
          break;
        default:
      }
    });
  }
  getSource() {
    return this.sourcelist;
  }
  getFilter() {
    return this.filterlist;
  }
}

const sourcestore = new SourceStore();
export default sourcestore;
