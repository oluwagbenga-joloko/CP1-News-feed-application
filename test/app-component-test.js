import chai, {expect} from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react'
import {mount, render, shallow} from 'enzyme'
import App  from '../src/scripts/components/App'

chai.use(chaiEnzyme());
const wrapper = shallow(<App />)

describe('test for about component',() =>{
  it('should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper).to.be.present()
  })
});