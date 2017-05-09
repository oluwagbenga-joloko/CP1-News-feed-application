import chai, { expect } from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Share from '../src/share/Share';

chai.use(chaiEnzyme());
const wrapper = shallow(<Share />);
describe('test for share componet', () => {
  it('the component should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper).to.be.present();
  });
});
