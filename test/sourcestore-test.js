import { expect } from 'chai';
import sourcestore from '../src/scripts/stores/sourcestores';
import dispatcher from '../src/scripts/dispatcher/dispatcher';
import constants from '../src/scripts/constants/constants';

const data = [
    { id: 'abc-news-au', name: 'ABC News (AU)' },
    { id: 'yahoo', name: 'Yahoo news' },
    { id: 'bella-niger', name: 'Bella' },
    { id: 'bella-niger', name: 'Bella' },
];

describe('testing of source store', () => {
  it('the store should initialize with no data', () => {
    const noData = sourcestore.getSource();
    expect(noData).to.be.empty;
  });
  it('the store should recieve dispached data', () => {
    dispatcher.dispatch({
      type: constants.getsource,
      data,
    });
    expect(sourcestore.getSource()).to.equal(data);
    expect(sourcestore.getSource()).to.not.be.empty;
    expect(sourcestore.getSource()[0].id).to.equal('abc-news-au')
  });
  it('the store filters source properly',() => {
    const filtered = [{ id: 'yahoo', name: 'Yahoo news' }]
    dispatcher.dispatch({
        type: constants.filter,
        data: 'yahoo'
    })
    expect(sourcestore.getSource()).to.not.equal(filtered)
    expect(sourcestore.getFilter()).to.equal(filtered)
    expect([]).to.equals([])

  })
});
