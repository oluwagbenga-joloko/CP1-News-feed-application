import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param {any} props input for component
 * @returns {*} element to be rendered
 */
function Search(props) {
  return (
    <div className="row search">
      <div className="col-sm-4 col-sm-offset-4">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-search" />
          </span>
          <input
            type="text" className="form-control" onKeyUp={props.handleKeyUp}
            placeholder="Search News sources"
          />
        </div>
      </div>
    </div>
  );
}
Search.defaultProps = {
  handleKeyUp: () => undefined
};
Search.propTypes = {
  handleKeyUp: PropTypes.func
};

export default Search;
