import React, { Component } from 'react';
import { connect } from "react-redux";
import { setFilter } from '../redux/actions'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { logo: 'assets/raster/lh-logo-border.png', value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilter(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-sm-1 hidden-xs">
            <a href="https://hub.repometric.com" title="linterhub" className="logo-link">
              <img src={this.state.logo} className="logo" alt=" "/>
            </a>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-9">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-search"/>
                  </div>
                  <input type="text"
                         className="form-control"
                         placeholder="Search"
                         value={this.state.value}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <a className="button" href="https://github.com/repometric/linterhub/issues/new?template=engine.md">add new linter</a>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(null, { setFilter })(Header);