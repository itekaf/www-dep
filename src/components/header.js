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
    this.props.setFilter(e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilter(this.state.value);
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="col-lg-offset-1 col-xs-offset-1 col-md-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <section>
                  <div id="section-hello" className="row">
                      <div className="col-lg-2  col-md-2  hidden-sm hidden-xs">
                          <a href="https://linterhub.com" title="linterhub" className="logo-link">
                              <img src={this.state.logo} className="logo" alt=" "/>
                          </a>
                      </div>
                      <div className="col-lg-1 col-md-1  col-xs-2  contact">
                        <div>
                          <a href="https://github.com/linterhub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                          </a>
                        </div>
                        <div>
                          <a href="mailto:hi@repometric.com" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-9  col-md-9 col-xs-10 ">
                          <h1>Linterhub</h1>
                          <h3>Catalog of linters</h3>
                          <hr className="underline"/>
                          <a className="button" href="https://github.com/linterhub/catalog/issues/new?template=engine.md">add new linter</a>
                      </div>
                      
                  </div>
              </section>
          </div>
        </div>
        <div className="row">
          <div className="search">
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-search"/>
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
        </div>
      </header>
    );
  }
}

export default connect(null, { setFilter })(Header);