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
        <td key={index}>
          <a href="#" name={item} onClick={this.handleClick}>
            {item[0].toUpperCase() +  item.substr(1)}
            <span className={this.state.sortType === item && this.state.sortDirection === 'desc' ? "fa fa-caret-down" : "hidden"}/>
            <span className={this.state.sortType === item && this.state.sortDirection === 'asc' ? "fa fa-caret-up" : "hidden"}/>
          </a>
        </td>
      );
    });

    const data = this.props.data;
    const sortedLinters = _.orderBy(
      data.linters, [this.state.sortType], [this.state.sortDirection]);
    const content = sortedLinters.map((item, index) => {
      return (
        <tr key={index}>
          <td><a href={item.url}>{item.name}</a></td>
          <td className="hidden-xs">{item.description}</td>
          <td>{item.languages.join(", ")}</td>
          <td>{item.license}</td>
        </tr>
      );
    });

    return (
      <div>
        <h4>Showing {data.linters.length} Linters.</h4>
        <table className="table table-bordered table-striped">
          <thead><tr>{header}</tr></thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    );
  }
}

export default LintersTable;
