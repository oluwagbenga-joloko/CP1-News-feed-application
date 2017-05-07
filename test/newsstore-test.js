import { expect } from 'chai';
import Newsstore from '../src/stores/Newsstore';
import Constants from '../src/constants/Constants';
import Dispatcher from '../src/dispatcher/Dispatcher';
import { Articles } from './test-data';




describe('news store', () => {
  const data = Articles;
  
  it('the store should initialize with no data', () => {
    expect(Newsstore.getNews()).to.be.empty;
  });
  it('it should recieve dispatched data', () => {
    Dispatcher.dispatch({
      type: Constants.getnews,
      data
    });
    const result = Newsstore.getNews();
    expect(result[5]).to.be.undefined;
    expect(result[0].title).to.equal(data[0].title);
    expect(result[0].title).to.not.equal(data[2].title);
  });
});
