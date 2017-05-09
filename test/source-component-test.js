import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Sources from '../src/components/Sources.jsx';

chai.use(chaiEnzyme());
const wrapper = shallow(<Sources />);

describe('test for source componet', () => {
  it('the componet should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('it should contaion only one Search node', () => {
    expect(wrapper.find('Search')).to.to.be.present();
    expect(wrapper.find('Search')).to.have.length(1);
    expect(wrapper.find('Search')).to.not.have.length(6);
  });
  it('it should contain elements with the right classnames', () => {
    expect(wrapper.find('.news')).to.be.present();
    expect(wrapper.find('.content')).to.be.present();
    expect(wrapper.find('.array')).to.not.be.present();
  });
  it('it should contain a div element', () => {
    expect(wrapper.find('div')).to.be.present();
    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('div')).to.not.have.length(12);
  });
});

