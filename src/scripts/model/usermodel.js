import Cookies from 'js-cookie';
import constant from '../constants/constants'

class User {
  constructor() {
    this.userDetails = Cookies.get(constant.cookie) === undefined ? undefined : JSON.parse(Cookies.get(constant.cookie));
    this.isLogin = this.isLoggedIn();
    this.favorites = '';
    this.name = '';
    this.imageUrl = '';
    this.email = '';
    this.assignUserValues();
  }
  login(response) {
    const user= response.w3
    console.log(user)
    Cookies.set(constant.cookie, {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
  }
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  assignUserValues() {
    if (this.isLogin) {
      this.favorites = this.userDetails.favorites;
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }
  removeFavourite(item, index) {
    this.favorites.splice(index, 1);
  }
  logOut() {
    this.isLogin = false;
    Cookies.remove(constant.cookie);
  }
}
const user = new User();
export default user;
window.user = user;
