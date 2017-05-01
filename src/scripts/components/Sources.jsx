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
    sourcestore.removeListener('filter', this.onChangeFilter);
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
    let list=null;
    if (!this.state.newslist ) {
      list = <div className="loader"></div>
    } else if( this.state.newslist[0]===undefined){
       list = <p className="text-center error"> not found </p>
    } else {
       list = this.state.newslist.map((data, index) => {
         return (
            <div className="col-sm-4 item">
              <div className="well ">
                <a href= {`/#/newslist/${data.id}?sort=${data.sortBysAvailable}&name=${data.name}`}>
                <img className="arrow" src="http://www.jdcdesignstudio.com/img/arrow-gray.png"/>
                </a>
               <h4>{data.name}</h4>
               <p>{data.description}</p>
              </div>
            </div>
         )
            })
    }
    return (
      <div>
        <div className="row search">
          <div className="col-sm-4 col-sm-offset-4">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
              <input type="text" className="form-control" onKeyUp={this.handleKeyUp}  placeholder="Search News sources"/>
             </div>   
          </div>
        </div>
        <div className="content container-fluid"> 
          <div className="news row">
           {list}
          </div>
        </div>
  </div>

      )};
  }
export default Sources;
