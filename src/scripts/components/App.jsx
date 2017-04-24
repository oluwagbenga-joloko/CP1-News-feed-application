import React from 'react';
import '../../styles/main.scss';
import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
render (){ 
      return (
         <div className="main">
             <div><Header /></div>
            {this.props.children}
            <Footer />
         </div>
      );
   }
}

export default App;