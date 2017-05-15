import chai, { expect } from 'chai';

import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import User from '../src/model/User';
import Login from '../src/components/Login';


chai.use(chaiEnzyme());
User.isLogin = false;

const wrapper = shallow(<Login />);

describe('Login component', () => {
  it('should exist', () => {
    expect(wrapper).to.be.present();
  });
  it(`it should have the first p tag with text 
    = View news headlines from over 70 Sources `, () => {
    expect(wrapper.find('.logindiv')
    .childAt(0)).to.have.text('View news headlines from over 70 Sources');
    expect(wrapper.find('.logindiv')
    .childAt(0)).to.not.have.text('silicon nigerian valley');
  });
  it(`it should have the first p tag with text
     = Stay up to date with Worldwide News`, () => {
    expect(wrapper.find('.logindiv')
    .childAt(1)).to.have.text('Stay up to date with Worldwide News');
    expect(wrapper.find('.logindiv')
    .childAt(1)).to.not.have.text('silicon nigerian valley');
  });
  it('it should have the first H1 tag with text = Newsify ', () => {
    expect(wrapper.find('.loginheader')).to.have.text('Newsify');
    expect(wrapper.find('.loginheader'))
    .to.not.have.text('silicon nigerian valley');
  });
  it('it should contain the right descendants(elements)', () => {
    expect(wrapper).to.have.descendants('div');
    expect(wrapper).to.have.descendants('img');
    expect(wrapper).to.have.descendants('.row');
    expect(wrapper).to.have.descendants('.text-center');
  });
});
