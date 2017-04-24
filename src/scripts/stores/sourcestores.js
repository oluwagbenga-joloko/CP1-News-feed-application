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
          console.log('stores');
          this.sourcelist = action.data;
          this.emit('source');
          break;
        case constant.filter:
          console.log('inside store');
          const query = action.data;
          console.log(this.sourcelist);
          this.filterlist = this.sourcelist.filter((source) => {
            if (source.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
              return source;
            }
            console.log(this.filterlist)
          },
          );
          console.log(this.sourcelist);
          this.emit('filter');
          break;
        default:
    // dfdfdf
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
