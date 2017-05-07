import Cookies from 'js-cookie';
import Constant from '../constants/Constants';

/**
 * @class User
 */
class User {
  /**
   * Creates an instance of User.
   * @memberof User
   */
  constructor() {
    this.userDetails = Cookies.get(Constant.cookie) === undefined ?
    undefined : JSON.parse(Cookies.get(Constant.cookie));
    this.isLogin = this.isLoggedIn();
  }
  /**
   * @param {any} response
   * @memberof User
   * @returns{undefined}
   */
  login(response) {
    const user = response.w3;
    Cookies.set(Constant.cookie, {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.isLogin = true;
    this.assignUserValues();
  }
  /**
   * @returns {boolean} true when user is logged and false otherwise
   * @memberof User
   */
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  /**
   * @memberof User
   * @returns{undefined}
   */
  assignUserValues() {
    this.userDetails = JSON.parse(Cookies.get(Constant.cookie));
    if (this.isLogin) {
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }
  /**
   * @memberof User
   * @returns{undefined}
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove(Constant.cookie);
  }
}
export default new User();

