import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Search from '../src/components/Search.jsx';

chai.use(chaiEnzyme());
const wrapper = shallow(<Search />);

describe('test for search componet', () => {
  it('the component should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper).to.be.present();
  });
  it('it should contain one input field', () => {
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('input')).to.not.have.length(23);
  });
  it('it should contain the right descendants(elements)', () => {
    expect(wrapper).to.have.descendants('div');
    expect(wrapper).to.have.descendants('.form-control');
    expect(wrapper).to.have.descendants('.input-group');
  });
  it('it should contaion only one icon', () => {
    expect(wrapper.find('i')).to.exist;
    expect(wrapper.find('i')).to.have.length(1);
    expect(wrapper.find('i')).to.not.have.length(6);
  });
  it('it should contain elements with the right classnames', () => {
    expect(wrapper.find('i')).to.have.className('glyphicon-search');
    expect(wrapper.find('i')).to.not.have.className('glycfghvrch');
    expect(wrapper.find('input')).to.have.className('form-control');
    expect(wrapper.find('input')).to.not.have.className('dfxgchvbjl');
  });
  it('it should contain a div element', () => {
    expect(wrapper.find('div')).to.exist;
    expect(wrapper.find('div')).to.have.length(3);
    expect(wrapper.find('div')).to.not.have.length(10);
  });
});
