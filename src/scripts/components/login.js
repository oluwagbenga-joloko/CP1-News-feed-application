import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
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
    return (<div><GoogleLogin
    className='login'
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      uxMode='popup'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}><img href='https://www.google.com.ng/search?q=google+icon&rlz=1C5CHFA_enNG739NG739&espv=2&biw=608&bih=566&tbm=isch&imgil=vdzWzAFgaoUB9M%253A%253BPpzcg0M7okcCYM%253Bhttps%25253A%25252F%25252Fwww.iconfinder.com%25252Ficons%25252F107180%25252Fcircle_color_google_icon&source=iu&pf=m&fir=vdzWzAFgaoUB9M%253A%252CPpzcg0M7okcCYM%252C_&usg=__UjZ1DHtKX79WriMRhUvSnTRafo0%3D'></img>
      <span> Login with Google+</span></GoogleLogin>
            <img href='https://www.google.com.ng/search?q=google+icon&rlz=1C5CHFA_enNG739NG739&espv=2&biw=608&bih=566&tbm=isch&imgil=vdzWzAFgaoUB9M%253A%253BPpzcg0M7okcCYM%253Bhttps%25253A%25252F%25252Fwww.iconfinder.com%25252Ficons%25252F107180%25252Fcircle_color_google_icon&source=iu&pf=m&fir=vdzWzAFgaoUB9M%253A%252CPpzcg0M7okcCYM%252C_&usg=__UjZ1DHtKX79WriMRhUvSnTRafo0%3D'/>

       </div>
    );
  }
}
export default login;
