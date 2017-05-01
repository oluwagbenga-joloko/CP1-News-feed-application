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
  console.log(response)
  user.login(response);
  console.log(response)
  //window.location.reload();
  };
  return ( 
    <div className= "loginbody">
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
            className='login'
            clientId="350569467549-f1d5q1iguug6dv01n4din8q1p31btkg5.apps.googleusercontent.com"
            buttonText="Login"
            uxMode='popup'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}>
            <img src="http://3.bp.blogspot.com/-Ep_sMHCGb-M/Vl9h5smpeaI/AAAAAAAACak/MQF7WdfmBgI/s640/image00.png"/>
          </GoogleLogin>
        </div>
      </div>
    </div>
    </div>
    );
  }
}
export default login;
