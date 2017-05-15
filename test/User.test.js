import { expect } from 'chai';
import User from '../src/model/User';
import { Response } from './TestData';

describe('test for user model', () => {
  it('should exist', () => {
    expect(User).to.be.an('object');
  });
  it('should log the user in correcly', () => {
    User.login(Response);
    expect(User.isLogin).to.equal(true);
    expect(User.isLogin).to.not.equal(false);
  });
  it('it should have correct user values', () => {
    expect(User.name).to.equal('bola');
    expect(User.name).to.not.equal('margie');
    expect(User.email).to.equal('bola@gmail');
    expect(User.email).to.not.equal('bimpe@gmail');
    expect(User.imageUrl).to.equal('www.image.com');
    expect(User.imageUrl).to.not.equal('www.ininit.com');
  });
  it('it should log out the user correcly', () => {
    User.logOut();
    expect(User.isLogin).to.equal(false);
    expect(User.isLogin).to.not.equal(true);
  });
});
