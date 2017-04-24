import dispatcher from '../dispatcher/dispatcher';
import api from '../api/api';
import constant from '../constants/constants';

const actions = {
  getsources() {
    return api.getSources().then((data) => {
      console.log('insi');
      dispatcher.dispatch({
        type: constant.getsource,
        data,
      });
    }, () => {
      console.log('an error occured');
    });
  },
  getnews(source, sort) {
    api.getNews(source, sort).then((data) => {
      console.log(data);
      dispatcher.dispatch({
        type: constant.getnews,
        data,
      });
    }, () => {
      console.log('an error occured');
    });
  },
  filter(data) {
    
    console.log('inactions')
    dispatcher.dispatch({
      type: constant.filter,
      data,
    });
  },
};
export default actions;
