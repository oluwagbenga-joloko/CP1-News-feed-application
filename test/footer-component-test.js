import chai, { expect } from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../src/components/Footer';

chai.use(chaiEnzyme());
const wrapper = shallow(<Footer />);

describe('test for footer component', () => {
  it('should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper).to.be.present();
  });
  it('it should have the firt p tag with text = &copy; Copyright 2017 Andela', () => {
    expect(wrapper.find('footer').childAt(0)).to.have.text('© Copyright 2017 Andela');
    expect(wrapper.find('footer').childAt(0)).to.not.have.text('Copyright 201099');
  });
  it('it should have class name= navbar', () => {
    expect(wrapper.find('footer')).to.have.className('navbar');
    expect(wrapper.find('footer')).to.not.have.className('glycfghvrch');
  });
});
