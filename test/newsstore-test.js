import { expect } from 'chai';
import newsstore from '../src/scripts/stores/newsstore';
import constants from '../src/scripts/constants/constants'

describe('source store check', () => {
  it('the store should initialize with no data', () => {
      const noData = newsstore.getNews();
      expect(noData).to.be.empty
    });
});