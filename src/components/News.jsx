import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import Newsstore from '../stores/Newsstore';
import Actions from '../actions/Actions';
import Share from '../share/Share.jsx';

/**
 * @class News
 * @extends {Component}
 */
class News extends Component {
  /**
   * Creates an instance of News.
   * @param {any} props property of element
   * @memberof News
   */
  constructor(props) {
    super(props);
    this.sortlist = this.props.location.query.sort.split(',');
    this.query = this.props.params.source;
    this.name = this.props.location.query.name;
    this.state = {
      sortlist: this.sortlist,
    };
    this.onChangeNews = this.onChangeNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * runs before the component mounts
   * @memberof News
   * @returns {undefined}
   */
  componentWillMount() {
    console.log(this.state.sortlist);
    Actions.getnews(this.query, 'top');
    Newsstore.on('changeNews', this.onChangeNews);
  }
  /**
   * changes newslist and calls setState
   * @memberof News
   * @returns {undefined}
   */
  onChangeNews() {
    this.setState({ newslist: Newsstore.getNews() });
  }
  /**
   * handles key up event and calls an action
   * @param {any} event
   * @memberof News
   * @returns {undefined}
   */
  handleChange(event) {
    event.preventDefault();
    const val = event.target.value;
    Actions.getnews(this.props.params.source, val);
  }
  /**
   * it renders react element
   * @returns{*} return element
   * @memberof News
   */
  render() {
    let list = null;
    if (!this.state.newslist || this.state.newslist.length === 1) {
      list = <div className="loader" />;
    } else {
      const articles = this.state.newslist.map(data =>
        <div className="col-sm-6 col-md-4" key={Math.random() * Math.random()}>
          <div className="thumbnail newsthumb">
            <img src={`${data.urlToImage}`} alt="could not load image" />
            <div className="caption">
              <h3 ><a className="newstitle" href={`${data.url}`} >{ data.title }</a></h3>
              <p className="newsdesc">{ data.description }</p>
              <div>
                <span className="share">Share via</span>
                <Share share={data.url} title={data.title} />
              </div>
            </div>
          </div>
        </div>);
      const masonryOptions = {
        transitionDuration: '0.5s'
      };
      list = (<Masonry
        className={'my-gallery-class'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad
      >
        {articles}
      </Masonry>);
    }
    const option = this.state.sortlist.map(data => <option value={data} > { data } </option>);
    return (
      <div>
        <div className="container-fluid info">
          <div className="row titlediv">
            <div className="col-sm-8">
              <h3 className="newsHeader"> { this.name } </h3>
            </div>
            <div className="col-sm-4 ">
              <div className="form-group sort">
                <label htmlFor="div" className="control-label col-sm-2   labelsort" >Sort:</label>
                <div className="col-sm-10">
                  <select className="form-control" onChange={this.handleChange} >
                    { option }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container content">
          <div className="row newsrow">
            {list}
          </div>
        </div>
      </div>
    );
  }
}
export default News;

News.propTypes = {
  params: PropTypes.object
};

News.defaultProps = {
  params: {
    source: 'cnn'
  },
  location: {
    query: { name: 'cnn news', sort: 'top' }
  }
};
