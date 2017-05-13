import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
/**
 * @description the app component. All
 * other components that require a header and footer are rendered within
 * @param {object} props input for component
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
