import React, { Component } from 'react';

class LintersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortType: 'name',
      sortReverse: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.name !== this.state.sortType){
      this.setState({sortType: e.target.name});
      this.setState({sortReverse: false});
    } else {
      this.setState({sortReverse: !this.state.sortReverse});
    }
  }

  render() {
    let data = this.props.data;

    const content = data.linters.map((item, index) => {
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
          <thead>
          <tr>
            <td>
              <a href="#" name="name" onClick={this.handleClick}>
                Name
                <span className={this.state.sortType === 'name' && !this.state.sortReverse ? "fa fa-caret-down" : "hidden"}/>
                <span className={this.state.sortType === 'name' && this.state.sortReverse ? "fa fa-caret-up" : "hidden"}/>
              </a>
            </td>
            <td className="hidden-xs">
              <a href="#" name="description" onClick={this.handleClick}>
                Description
                <span className={this.state.sortType === 'description' && !this.state.sortReverse ? "fa fa-caret-down" : "hidden"}/>
                <span className={this.state.sortType === 'description' && this.state.sortReverse ? "fa fa-caret-up" : "hidden"}/>
              </a>
            </td>
            <td>
              <a href="#" name="languages" onClick={this.handleClick}>
                Languages
                <span className={this.state.sortType === 'languages' && !this.state.sortReverse ? "fa fa-caret-down" : "hidden"}/>
                <span className={this.state.sortType === 'languages' && this.state.sortReverse ? "fa fa-caret-up" : "hidden"}/>
              </a>
            </td>
            <td className="hidden-xs">
              <a href="#" name="license" onClick={this.handleClick}>
                License
                <span className={this.state.sortType === 'license' && !this.state.sortReverse ? "fa fa-caret-down" : "hidden"}/>
                <span className={this.state.sortType === 'license' && this.state.sortReverse ? "fa fa-caret-up" : "hidden"}/>
              </a>
            </td>
          </tr>
          </thead>
          <tbody>
          {content}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LintersTable;
