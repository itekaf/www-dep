import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <i className="fa fa-search"/>
            </div>
            <input type="text" className="form-control" placeholder="Search" value={this.state.search}/>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;