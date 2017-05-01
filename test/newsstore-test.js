import { expect } from 'chai';
import newsstore from '../src/scripts/stores/newsstore';
import constants from '../src/scripts/constants/constants';
import dispatcher from '../src/scripts/dispatcher/dispatcher';

const data = [{ title: 'andela hire', description: 'Andela just hired 200 new fellows' },
             { title: 'nigeria won', description: 'Nigeria just won the world cup' },
             { title: 'lagos traffic', description: 'lagos traffic just got worse' },
             { title: 'President Trump', description: 'President Trump  visited Russia' },
];

describe('news store', () => {
  it('the store should initialize with no data', () => {
    expect(newsstore.getNews()).to.be.empty;
  });
  it('it should recieve dispatched data', () => {
    dispatcher.dispatch({
      type: constants.getnews,
      data
    });
    const result = newsstore.getNews();
    expect(result[5]).to.be.undefined;
    expect(result[0].title).to.equal(data[0].title);
    expect(result[0].title).to.not.equal(data[2].title);
  });
});