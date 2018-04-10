import React, { Component } from 'react';

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
    console.log('Submitting: ' + this.state.value);
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
          <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12">
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
        </div>
      </header>
    );
  }
}

export default Header;