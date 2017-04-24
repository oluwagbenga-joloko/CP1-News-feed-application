import React, { Component } from 'react';
import sourcestore from '../stores/sourcestores';
import actions from '../actions/actions';

class Sources extends Component {
  constructor() {
    super();
    this.state = {};
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
  }
  componentWillMount() {
    actions.getsources();
    sourcestore.on('source', this.onChangeSource);
    sourcestore.on('filter', this.onChangeFilter);
  }
  componentWillUnmount() {
    sourcestore.removeListener('source', this.onChangeSource);
    sourcestore.removeListener('filter', this.onChangeSource);
  }
  onChangeFilter() {
    this.setState({ newslist: sourcestore.getFilter() });
  }
  onChangeSource() {
    this.setState({ newslist: sourcestore.getSource() });
  }
  handleKeyUp(e) {
    e.preventDefault();
    const query = e.target.value;
    console.log(query);
    actions.filter(query);
  }
  render() {
    if (!this.state.newslist) {
      return <p > loading....... </p>;
    }
    console.log(this.state.newslist);
    const list = this.state.newslist.map((data, index) => (
      <div className="col-sm-2 col-md-3">
        <a href={`/#/newslist/${data.id}?sort=${data.sortBysAvailable}`}>
          <div className="thumbnail">
            <div className="caption">
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </a>
      </div>));
    return (
      <div className="source" >
        <input type="text" className="form-control" id="basic-url" onKeyUp={this.handleKeyUp} aria-describedby="basic-addon3" />
        <div className="row" />
        <ul > { list } </ul>
      </div>
    );
  }
}
export default Sources;
