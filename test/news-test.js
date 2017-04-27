import React from 'react';
import {expect } from 'chai';


import chai from 'chai';

import chaiEnzyme from 'chai-enzyme';
import {mount, render, shallow} from 'enzyme'
import Header from '../src/scripts/components/header';

chai.use(chaiEnzyme());
describe('it should contain the right elements', () => {
  it('it should return the right elements', () => {
   const wrapper= mount(<Header/>)
   expect(wrapper).to.contain(<a href="#">About</a>)
   expect(wrapper).to.not.contain(<h1></h1>)
    });
});
