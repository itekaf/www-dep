import React, { Component } from 'react';
import { loadJSON } from '../utils/services';
import Header from './header';
import LintersTable from './table';

class App extends Component {

  constructor(){
    super();
    this.state = {
      linters: [],
      licenses: [],
    };
  }

  componentDidMount() {
    this.getLinters("linters.json");
  }

  getLinters(url) {
    loadJSON(url)
      .then((data) => {
        this.setState({licenses: data.licenses});
        this.setState({linters: data.linters.map(function (item) {
            return {
              name: item.name,
              description: item.description,
              url: item.url,
              platform: item.platform,
              licenses: item.license.split(','),
              licenseUnknown: item.license.indexOf('Unknown') >= 0,
              languages: item.languages.split(','),
              rm_docker: item.platform === "TODO",
              rm_cli: false
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
