import chai, {expect} from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react'
import {mount, render, shallow} from 'enzyme'
import Header from '../src/scripts/components/header'

chai.use(chaiEnzyme());
const wrapper = shallow(<Header />)
describe ("test for header component", () => {
  it("should contain a nav component", () => {
    expect(wrapper.contains(<nav/>)).to.exist;
  });
  it("it should contain the right logo with text Newsify", () => {
    expect(wrapper.find('.Newsify')).to.have.text('Newsify')
    expect(wrapper.find('.Newsify')).to.not.have.text('beast')
  })
  it("it should contain 4 link compoent (a)", () => {
    expect(wrapper.find('a')).to.have.lengthOf(4)
    expect(wrapper.find('a')).to.not.have.lengthOf(8)
  })
})
