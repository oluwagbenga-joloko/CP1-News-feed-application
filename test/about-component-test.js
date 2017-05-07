import chai, { expect } from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import About from '../src/components/About';

chai.use(chaiEnzyme());
const wrapper = shallow(<About />);

describe('test for about component', () => {
  it('should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper).to.be.present();
  });
  it('it should have the first p tag with text = This application was built by Oluwagbenga Joloko.', () => {
    expect(wrapper.find('.row').childAt(0)).to.have.text('This application was built by Oluwagbenga Joloko.');
    expect(wrapper.find('.row').childAt(0)).to.not.have.text('silicon valley');
  });
  it('it should have the second p tag with text= To contribute visit github', () => {
    expect(wrapper.find('.row').childAt(1)).to.have.text('To contribute visit github');
    expect(wrapper.find('.row').childAt(1)).to.not.have.text('To vist facebook');
  });
  it('it should have the second a tag with github =  ', () => {
    expect(wrapper.find('a')).to.have.text('github');
    expect(wrapper.find('a')).to.have.not.text('jumia');
  });
});
