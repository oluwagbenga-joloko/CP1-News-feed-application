import Cookies from 'js-cookie';
import constant from '../constants/constants'

class User {
  constructor() {
    this.userDetails = Cookies.get(constant.cookie) === undefined ? undefined : JSON.parse(Cookies.get(constant.cookie));
    this.isLogin = this.isLoggedIn();
  }
  login(response) {
    const user = response.w3
    Cookies.set(constant.cookie, {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.isLogin = true;
    this.assignUserValues()
  }
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  assignUserValues() {
    this.userDetails= JSON.parse(Cookies.get(constant.cookie));
    if (this.isLogin) {
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }
  logOut() {
    this.isLogin = false;
    Cookies.remove(constant.cookie);
  }
}
const user = new User();
export default user;
window.user= user;
