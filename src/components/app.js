import React, { Component } from 'react'
import MainPage from './main.js'
import { connect } from "react-redux";
import { getLinters, setFilter } from "../redux/actions";

class App extends Component {

  componentDidMount() {
    this.props.getLinters();
  }

  render() {
    return (
      <div className="App">
         <MainPage data={this.props.linters} search={this.props.search} setFilter={this.props.setFilter} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    license: state.license,
    linters: state.linters,
    search: state.search,
  }
}

export default connect(mapStateToProps, { getLinters, setFilter })(App);
