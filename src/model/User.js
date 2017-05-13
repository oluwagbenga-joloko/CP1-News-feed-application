import Cookies from 'js-cookie';
/**
 * @class User
 */
class User {
  /**
   * Creates an instance of User.
   * @memberof User
   */
  constructor() {
    this.isLogin = this.userDetails();
  }
  /**
   * logs the user in.
   * @param {any} response an object containing user
   * profile
   * @memberof User
   * @returns {undefined} it returns no value
   */
  login(response) {
    const user = response.w3;
    Cookies.set('newsify', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.isLogin = true;
    this.userDetails();
  }
  /**
   * logs the user out.
   * @memberof User
   * @returns{undefined} it has no return value
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('newsify');
  }
  /**
   * assigns User values
   * @returns {boolean} returns true or false
   * @memberof User
   */
  userDetails() {
    if (Cookies.get('newsify')) {
      const Details = JSON.parse(Cookies.get('newsify'));
      this.name = Details.name;
      this.email = Details.email;
      this.imageUrl = Details.imageUrl;
      return true;
    }
    return false;
  }
}
export default new User();

