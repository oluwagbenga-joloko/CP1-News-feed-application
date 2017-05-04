import React, { Component} from 'react';
import newsStore from '../stores/newsstore';
import actions from '../actions/actions';
import Share from '../share/share.jsx';
import PropTypes from 'prop-types';
import Masonry from'react-masonry-component'


class News extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.sortlist = this.props.location.query.sort.split(',');
    this.query = this.props.params.source;
    this.name =this.props.location.query.name;
    this.state = {
      sortlist: this.sortlist,
    };
    this.onChangeNews = this.onChangeNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    console.log(this.state.sortlist);
    actions.getnews(this.query, 'top');
    newsStore.on('changeNews', this.onChangeNews);
  }
  componentDidMount() {
        // newsStore.on('change2', this.onChang2);
  }

  onChangeNews() {
    this.setState({ newslist: newsStore.getNews() });
    console.log(newsStore.getNews());
  }
  handleChange(e) {
    e.preventDefault();
    const val = e.target.value;
    console.log(val);
    actions.getnews(this.props.params.source, val);
  }
  render() {
     let list= null;
    if (!this.state.newslist || this.state.newslist.length===1) {
      list= <div className="loader"></div> 
    } else {
       const data = this.state.newslist.map((data, index) =>
        <div className="col-sm-6 col-md-4" key={Math.random()* Math.random()}>
          <div className="thumbnail newsthumb">
            <img src={`${data.urlToImage}`} alt="..." />
            <div className="caption">
              <h3 ><a  className="newstitle" href={`${data.url}`} >{ data.title }</a></h3>
              <p className="newsdesc">{ data.description }</p>
              <div>
                <span className="share">Share via</span>
              <Share share="http://www.bbc.co.uk/news/av/uk-39756147/moment-mr-gorilla-finishes-marathon" title= "Mr Gorilla' crosses London Marathon finishing line" />
              </div>
            </div>
          </div>
      </div>)
      const masonryOptions = {
      transitionDuration: '0.5s'
    }; 
    list=<Masonry
           className={'my-gallery-class'}
           elementType={'div'}
           options={masonryOptions} 
           disableImagesLoaded={false}
           updateOnEachImageLoad={true} 
          >
            {data}
        </Masonry>
    }
    const option = this.state.sortlist.map(data => <option value={data} > { data } </option>);
    return (
      <div>
      <div className="container-fluid info">
        <div className="row">
          <div className="col-sm-5 col-sm-offset-2 text-center">
            <h3 className="newsHeader"> { this.name } </h3>
          </div>
          <div className="col-sm-3">
            <div className="form-group sort">
              <label className="control-label col-sm-2 labelsort" >Sort:</label>
              <div className="col-sm-10">
                <select className="form-control" onChange={this.handleChange} > { option } </select>
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
    query: {name: "cnn news", sort: 'top'}
  }
};
