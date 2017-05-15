import chai, { expect } from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Share from '../src/share/Share';

chai.use(chaiEnzyme());
const wrapper = shallow(<Share />);
describe('test for share componet', () => {
  it('the component should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('it should contain a 4 Demo__some-network class names', () => {
    expect((wrapper).find('.Demo__some-network')).to.have.length(4);
  });
});
