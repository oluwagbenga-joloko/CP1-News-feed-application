import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import User from '../model/User';

const history = createHistory({
  forceRefresh: true,
});
/**
 * log in Component
 * logs the user in
 * @class login
 * @extends {Component}
 */
class Login extends Component {
  /**
   * runs before component mounts
   * @memberof login
   * @return {undefined}
   */
  componentWillMount() {
    if (User.isLogin) {
      history.push('/');
    }
  }
  /**
   * @returns {*} element to be rendered
   * @memberof login
   */
  render() {
    const responseGoogle = (response) => {
      User.login(response);
      window.location.reload();
    };
    return (
      <div className="loginbody">
        <div className="container-fluid loginpage">
          <div className="row text-center">
            <h1 className="loginheader">Newsify</h1>
          </div>
          <div className="row text-center logindiv">
            <p classID="logintext"> View news headlines from over 70 Sources </p>
            <p classID="logintext" > Stay up to date with Worldwide News</p>
          </div>
          <div className="row">
            <div className="text-center">
              <GoogleLogin
                className="login"
                clientId="350569467549-f1d5q1iguug6dv01n4din8q1p31btkg5.apps.googleusercontent.com"
                buttonText="Login"
                uxMode="popup"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <img src="../../dist/images/login.png" alt="login with google" />
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
