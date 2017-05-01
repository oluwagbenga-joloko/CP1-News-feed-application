import { expect } from 'chai';
import user from '../src/scripts/model/usermodel';

const response = { w3: { ig: 'bola', U3: 'bola@gmail', Paa: 'www.image.com' } };
describe('test for user model', () => {
  it('should exist', () => {
    expect(user).to.exist;
  });
  it('should log the user in correcly', () => {
    user.login(response);
    expect(user.isLogin).to.equal(true);
     expect(user.isLogin).to.not.equal(false);
   
  });
  it('it should have correct user values', () => {
    expect(user.name).to.equal('bola');
    expect(user.name).to.not.equal('margie');
    expect(user.email).to.equal('bola@gmail');
    expect(user.email).to.not.equal('bimpe@gmail');
    expect(user.imageUrl).to.equal('www.image.com');
    expect(user.imageUrl).to.not.equal('www.ininit.com');
  });
  it('it should log out the user correcly', () => {
    user.logOut();
    expect(user.isLogin).to.equal(false);
    expect(user.isLogin).to.not.equal(true);
  });
});
