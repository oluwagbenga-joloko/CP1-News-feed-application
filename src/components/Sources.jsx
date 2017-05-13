import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Sourcestore from '../stores/Sourcestores';
import Actions from '../actions/Actions';
import Search from './Search.jsx';

/**
 * @class Sources
 * @extends {Component}
 */
class Sources extends Component {
  /**
   * @description Creates an instance of Sources.
   * @param {any} props
   * @memberof Sources
   */
  constructor(props) {
    super(props);
    this.query = undefined;
    this.state = {};
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  /**
   * @description rund befor the component mounts
   * @memberof Sources
   * @returns {undefined}
   */
  componentWillMount() {
    Actions.getsources();
    Sourcestore.on('source', this.onChangeSource);
    Sourcestore.on('filter', this.onChangeFilter);
  }

  /**
   * @description runs while Component is unmounting
   * @memberof Sources
   * @returns {undefined}
   */
  componentWillUnmount() {
    Sourcestore.removeListener('source', this.onChangeSource);
    Sourcestore.removeListener('filter', this.onChangeFilter);
  }
  /**
   * @description runs before the component mounts
   * @memberof Sources
   * @returns {undefined}
   */
  onChangeFilter() {
    this.setState({ newslist: Sourcestore.getFilter() });
  }
  /**
   * @description sets the state of the sources component
   * @memberof Sources
   * @returns {undefined} returns no value
   */
  onChangeSource() {
    this.setState({ newslist: Sourcestore.getSource() });
  }
   /**
   * @description handles key up event and calls an action
   * @param {any} event trigered by html actions
   * @memberof Sources
   * @returns {undefined} returns no value
   */
  handleKeyUp(event) {
    event.preventDefault();
    this.query = event.target.value;
    Actions.filter(this.query);
  }
  /**
   * renders the react component
   * @memberof Sources
   * @returns {*} returns element
   */
  render() {
    let list = null;
    if (!this.state.newslist) {
      list = <div className="loader" />;
    } else if (this.state.newslist[0] === undefined) {
      list = <p className="text-center error"> not found </p>;
    } else {
      const sources = this.state.newslist.map((data) => {
        const sort = data.sortBysAvailable;
        return (
          <div className="col-md-6 item" key={data.url}>
            <div className="well ">
              <a
                href={`/#/newslist/${data.id}?sort=${sort}&name=${data.name}`}
              >
                <img
                  className="arrow"
                  alt=" could not load"
                  src="./Images/arrow-gray.png"
                />
              </a>
              <h4>{data.name}</h4>
              <p>{data.description}</p>
            </div>
          </div>
        );
      });
      const masonryOptions = {
        transitionDuration: '1s'
      };
      list = (<Masonry
        className={'my-gallery-class'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad
      >
        {sources}
      </Masonry>);
    }
    return (
      <div>
        <Search handleKeyUp={this.handleKeyUp} />
        <div className="content container-fluid">
          <div className="news row">
            {list}
          </div>
        </div>
      </div>

    );
  }
}
export default Sources;
