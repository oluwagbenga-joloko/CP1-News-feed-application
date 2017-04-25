import React, { Component } from 'react';
import newsStore from '../stores/newsstore';
import actions from '../actions/actions';
import Share from '../share/share.jsx'


class News extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.sortlist = this.props.location.query.sort.split(',');
    this.query = this.props.params.source;
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
    actions.getnews(this.query, val);
  }
  render() {
    if (!this.state.newslist || !this.state.sortlist) {
      return <p> loading data... </p>;
    }
    const list = this.state.newslist.map((data, index) =>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail newsthumb">
          <img src={`${data.urlToImage}`} alt="..." />
          <div className="caption">
            <h3><a href={`${data.url}`} >{ data.title }</a></h3>
            <p>{ data.description }</p>
            <Share share={`${data.url}`}  title= {`${data.title}`} />
          </div>
        </div>
      </div>);
    const option = this.state.sortlist.map(data => <option value={data} > { data } </option>);
    return (
      <div className="News">
        <h1 > welcome to news from { this.query } </h1>
        <div className="input-field col s12  browser-default ">
          <select className="form-control" onChange={this.handleChange} > { option } </select></div>
        <div className="row newsrow">{ list } </div>
      </div>
    );
  }
}
export default News;
