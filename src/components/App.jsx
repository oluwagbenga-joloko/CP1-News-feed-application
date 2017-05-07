import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
/**
 * the app compont
 * all other components that require a header and footer are rendered here
 * @param {object} props
 * @returns {*} renders react element
 */
function App(props) {
  return (
    <div className="main">
      <div><Header /></div>
      {props.children}
      <Footer />
    </div>
  );
}
export default App;
