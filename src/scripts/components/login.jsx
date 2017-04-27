import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import user from '../model/usermodel'
import createHistory from 'history/createBrowserHistory';
const history = createHistory({
  forceRefresh: true,
});


class login extends Component {
  componentWillMount() {
    if (user.isLogin ){
      history.push('/');
    }
  }
render() {
    const responseGoogle = (response) => {
      user.login(response);
      window.location.reload();
    };
    return ( 
    <div className='logindiv'><GoogleLogin
    className='login'
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      uxMode='popup'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}>
      <span> Login with Google+</span></GoogleLogin>

       </div>
    );
  }
}
export default login;
