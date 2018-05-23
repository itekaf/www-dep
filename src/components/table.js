import React, { Component } from 'react';
import _ from "lodash";

class LintersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortType: 'name',
      sortDirection: 'desc',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.name !== this.state.sortType) {
      this.setState({sortType: e.target.name});
      this.setState({sortDirection: 'desc'});
    } else {
      this.setState({sortDirection: this.state.sortDirection === 'desc' ? 'asc' : 'desc'});
    }
  }

  render() {
    const columns =  ['name', 'description', 'languages', 'license'];
  
    const header = columns.map((item, index) => {
      return (
        <th key={index} className={item === "description" ? "hidden-xs cell100" : "cell100"}>
          <a href="#!" name={item} onClick={this.handleClick}>
            {item[0].toUpperCase() +  item.substr(1)}
            {sortSpan(this.state, item)}
          </a>
        </th>
      );
    });

    const filteredLinters = _.filter(this.props.data, (linter) => {

        var searchData = this.props.search;

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
          <td className="hidden-xs cell100">{item.description}</td>
          <td className="cell100">{tagLanguage(item.languages)}</td>
          <td className="cell100">{item.license}</td>
        </tr>
      );
    });

    return (
      <div>
        {/* <h4>Showing {filteredLinters.length} Linter
        <span className={filteredLinters.length === 1 ? 'hidden' : ''}>s</span>.</h4> */}
        <div className="table100 ver3 m-b-110">
        <table className="table table-bordered table-striped">
          <thead className="table100-head"><tr>{header}</tr></thead>
          <tbody className="table100-body">{content}</tbody>
        </table>
        </div>
        
      </div>
    );
  }
}

export default LintersTable;

function sortSpan(e, item) {
  if (item === e.sortType){
    switch(e.sortDirection){
      case 'asc': 
        return <span className="fa fa-sort-alpha-down sort-icon"/>
      case 'desc':
        return <span className="fa fa-sort-alpha-up sort-icon"/>
      default:
        return <span className="fa fa-sort sort-icon"/>
    }
  }else {
    return <span className="fa fa-sort sort-icon"/>
  }
}

function tagLanguage(data) {
  var result = [];
  data.forEach(function(item, key) {
    result.push(<span className="tagLanguage" key={key}>{item}</span>);
  });
  return result;
}