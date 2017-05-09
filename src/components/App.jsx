import React from 'react';
import PropTypes from 'prop-types';
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
App.defaultProps = {
  children: () => undefined
};
App.propTypes = {
  children: PropTypes.element
};
