import chai, {expect} from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react'
import {mount, render, shallow} from 'enzyme'
import Footer  from '../src/scripts/components/footer'

chai.use(chaiEnzyme());
const wrapper = shallow(<Footer />)

describe('test for footer component',() =>{
  it('should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper).to.be.present()
  })
  it('it should have the firt p tag with text = Copyright 2017', () => {
    expect(wrapper.find('footer').childAt(0)).to.have.text('Copyright 2017')
    expect(wrapper.find('footer').childAt(0)).to.not.have.text('Copyright 201099')
    })
  it('it should have the second p tag with text = Andela ', () => {
    expect(wrapper.find('footer').childAt(1)).to.have.text('Andela')
    expect(wrapper.find('footer').childAt(1)).to.have.not.text('jumia')
    })
})