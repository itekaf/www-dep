import React, { Component } from 'react';
import { loadJSON } from '../utils/services';
import Header from './header';
import LintersTable from './table';

class App extends Component {

  constructor(){
    super();
    this.state = {
      linters: []
    };
  }

  componentDidMount() {
    // TODO: Move to config, probably change the structure
    const url = "https://repometric.github.io/linterhub/engine/bundle.json";
    this.getLinters(url);
  }

  getLinters(url) {
    loadJSON(url)
      .then((data) => {
        let names = Object.keys(data).filter(k => k !== "$schema");
        this.setState({licenses: []});
        this.setState({linters: names.map(function (item) {
            const linter = data[item];
            return {
              name: item,
              description: linter.meta.description,
              url: linter.meta.url,
              license: linter.meta.license,
              languages: linter.meta.languages
            }
          })});
        this.forceUpdate();
      });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <LintersTable data={this.state}/>
      </div>
    );
  }
}

export default App;
