import React, { Component } from 'react';
import _ from "lodash";

class LintersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortType: 'name',
      sortDirection: 'desc', 
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.setFilter(e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilter(this.state.value);
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
    const columns = [
      {
        "name": "name",
        "class": "th-small cell100"
      },
      {
        "name": "description",
        "class": "th-big cell100",
      },
      {
        "name": "languages",
        "class": "th-big hidden-xm cell100",
      },
      {
        "name": "license",
        "class": "th-small hidden-lg cell100",
      }
    ];

    const header = columns.map((item, index) => {
      return (
        <th key={index} className={item.class}>
            <a href="#!" name={item.name} onClick={this.handleClick}>
            {item.name}
            {sortSpan(this.state, item.name)}
          </a>
        </th>
      );
    })
  
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
                    value={this.state.value}
                    onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    </div>

    return (
      <div className="tab-content">
        {search}
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

export default LintersTable;

