import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import News from '../src/components/News';

chai.use(chaiEnzyme());
const wrapper = shallow(<News />);

describe('test for News componet', () => {
  it('the componet should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('it should contain one input field', () => {
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('select')).to.not.have.length(23);
  });
  it('it should have a label with name= sort:', () => {
    expect(wrapper.find('.labelsort')).to.have.text('Sort:');
    expect(wrapper.find('.labelsort')).to.not.have.text('Sortby:');
  });
  it('it should contain the right descendants(elements)', () => {
    expect(wrapper).to.have.descendants('div');
    expect(wrapper).to.have.descendants('h3');
  });
  it('it should contain elements with the right classnames', () => {
    expect(wrapper.find('select')).to.have.className('form-control');
    expect(wrapper.find('select')).to.not.have.className('glycfghvrch');
  });
  it('it should contain a div element', () => {
    expect(wrapper.find('div')).to.be.present();
  });
});

