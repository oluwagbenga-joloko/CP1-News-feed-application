import { expect } from 'chai';
import Sourcestore from '../src/stores/Sourcestores';
import Dispatcher from '../src/dispatcher/Dispatcher';
import Constants from '../src/constants/Constants';
import { Source } from './test-data';

describe('source store', () => {
  const data = Source;
  it('it should initialize with no data', () => {
    const noData = Sourcestore.getSource();
    expect(noData).to.eql([]);
  });
  it('it should recieve dispached data', () => {
    Dispatcher.dispatch({
      type: Constants.getsource,
      data,
    });
    expect(Sourcestore.getSource()).to.equal(data);
    expect(Sourcestore.getSource()).to.not.eql([]);
    expect(Sourcestore.getSource()[0].id).to.equal('abc-news-au');
  });
  it('it should filter source properly', () => {
    const filtered = [{ id: 'yahoo', name: 'Yahoo news' }];
    Dispatcher.dispatch({
      type: Constants.filter,
      data: 'yahoo'
    });
    expect(Sourcestore.getSource()).to.not.equal(Sourcestore.getFilter());
    expect(Sourcestore.getFilter()[0].id).to.equal(filtered[0].id);
    expect(Sourcestore.getFilter().length).to.equal(1);
    expect(Sourcestore.getFilter().length).to.not.equal(undefined);
  });
});
