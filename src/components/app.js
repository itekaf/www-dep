import React, { Component } from 'react'
import Header from './header'
import LintersTable from './table'
import { connect } from "react-redux";
import { getLinters, setFilter } from "../redux/actions";

class App extends Component {

  componentDidMount() {
    this.props.getLinters();
  }

  render() {
    return (
      <div className="App">
        <Header setFilter={this.props.setFilter}/>
        <LintersTable data={this.props.linters} search={this.props.search}/>
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
