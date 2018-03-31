import React, { Component } from 'react';
import { loadJSON } from '../utils/services';
import Search from './search';
import LintersTable from './table';

class App extends Component {

  constructor(){
    super();
    this.state = {
      linters: [],
      licenses: [],
      references: [
        "https://samate.nist.gov/index.php/Source_Code_Security_Analyzers.html",
        "https://security.web.cern.ch/security/recommendations/en/code_tools.shtml",
        "http://spinroot.com/static/",
        "https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis",
        "http://www.dwheeler.com/flawfinder/",
        "http://www.cert.org/secure-coding/tools/index.cfm",
        "https://github.com/exakat/php-static-analysis-tools",
        "http://www.codeanalysistools.com",
        "https://github.com/caramelomartins/awesome-linters"
      ]
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

    const references = this.state.references.map((item, index) => {
      return (
        <li key={index}><a href={item}>{item}</a></li>
      );
    });

    return (
      <div className="App">
        <Search/>
        <LintersTable data={this.state}/>
        <div>
          <h4>References</h4>
          <ul>
            {references}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
