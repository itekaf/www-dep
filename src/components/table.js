import React, { Component } from 'react';
import _ from "lodash";

class LintersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortType: 'name',
      sortDirection: 'desc', 
      searchText: this.props.search !== "" ? this.props.search : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleSort = this.handleSort.bind(this);
  }

  handleChange(e) {
    this.props.setFilter(e.target.value);
    this.setState({searchText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilter(this.state.searchText);
  }

  handleSort(e) {
    if (e.target.name !== this.state.sortType) {
      this.setState({sortType: e.target.name});
      this.setState({sortDirection: 'desc'});
    } else {
      this.setState({sortDirection: this.state.sortDirection === 'desc' ? 'asc' : 'desc'});
    }
  }

  render() {

    const header = 
     <tr>
        <th className="th-small cell100">
          <a href="#!" name="name" onClick={this.handleSort}>
            name
            {sortSpan(this.state, "name")}
          </a>
        </th>
        <th className="th-big cell100">
        <a href="#!" name="description" onClick={this.handleSort}>
            description
            {sortSpan(this.state, "description")}
          </a>
        </th>
        <th className="th-big hidden-xm cell100">
          <a href="#!" name="languages" onClick={this.handleSort}>
            languages
            {sortSpan(this.state, "languages")}
          </a>
        </th>
        <th className="th-small hidden-lg cell100">
          <a href="#!" name="license" onClick={this.handleSort}>
            license
            {sortSpan(this.state, "license")}
          </a>
        </th>
      </tr>
  
    const filteredLinters = _.filter(this.props.data, (linter) => {
        
        const searchData = this.props.search;

        return _.includes(linter.description, searchData) || 
        _.includes(linter.languages, searchData) || 
        _.includes(linter.license, searchData) || 
        _.includes(linter.name, searchData);
    });

    
    const sortedLinters = _.orderBy(
      filteredLinters, [this.state.sortType], [this.state.sortDirection]);

    const content = sortedLinters.map((item, index) => {
      return (
        <tr key={index} className="table-linterhub">
          <td className="cell100"><a href={item.url}>{item.name}</a></td>
          <td className="cell100">{item.description}</td>
          <td className="cell100 hidden-xm">{tagLanguage(item.languages)}</td>
          <td className="cell100 hidden-lg">{item.license}</td>
        </tr>
      );
    });

    const search = <div className="search">
      <form onSubmit={this.handleSubmit} >
        <div className="form-group">
          <div className="input-group container-flex">
            <div className="input-group-addon">
              <i className="fontello-icon">&#xe800;</i>
            </div>
            <input type="text"
                    className="form-control"
                    placeholder="Search by me"
                    value={this.state.searchText}
                    onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    </div>

    return (
      <div className="tab-content">
        {search}
        <div className="package-table m-b-110">
          <table className="table table-bordered table-striped">
            <thead className="package-table-head">{header}</thead>
            <tbody className="package-table-body">{content}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function sortSpan(e, item) {
  if (item === e.sortType){
    switch(e.sortDirection){
      case 'asc': 
        return <span className="fontello-icon sort-icon">&#xf15d;</span>
      case 'desc':
        return <span className="fontello-icon sort-icon">&#xf15e;</span>
      default:
        return <span className="fontello-icon sort-icon">&#xf0dc;</span>
    }
  }else {
    return <span className="fontello-icon sort-icon">&#xf0dc;</span>
  }
}

function tagLanguage(data) {
  var result = [];
  data.forEach(function(item, key) {
    result.push(<span className="tagLanguage" key={key}>{item}</span>);
  });
  return result;
}

export default LintersTable;

