import { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import User from '../model/User';

const history = createHistory({
  forceRefresh: true,
});
/**
 * @description log out Component
 * @class Logout
 * @extends {Component}
 */
class Logout extends Component {
  /**
   * @description runs before Component mounts, logs the user out.
   * @memberof Logout
   * @returns {null} it has no return value
   */
  componentWillMount() {
    if (User.isLogin) {
      User.logOut();
      history.push('/#/login');
      window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}
export default Logout;

