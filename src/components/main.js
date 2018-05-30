import React, { Component } from 'react';
import { connect } from "react-redux";
import { setFilter } from '../redux/actions'
import LintersTable from './table'
import AboutPage from './about'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 

class Main extends Component {

  render() {
    return (
      <Tabs>
        <header className="container-fluid">
            <section>
                <div id="section-hello" className="container-flex">
                    <div className="logo">
                        <a href="https://linterhub.com" title="linterhub" >
                          <div className="container-flex">
                            <div className="header-name">
                              <h1>linterhub</h1>
                            </div>
                          </div>
                        </a>
                    </div>
                    <div className="tabs container-flex flex-start" >
                      <TabList>
                        <Tab><div className="button active"><span>catalog</span></div></Tab>
                        <Tab><div className="button"><span>about</span></div></Tab>
                      </TabList>
                      <a href="https://github.com/linterhub/catalog/issues/new?template=engine.md" 
                          target="_blank"
                          className="hidden-xs"
                          rel="noopener noreferrer">
                        <div className="button"><span>add new linter</span></div>
                      </a>
                    </div>
                </div>
            </section>
        </header>
        <TabPanel>
          <LintersTable data={this.props.data} search={this.props.search}  setFilter={this.props.setFilter} />
        </TabPanel>
        <TabPanel>
          <AboutPage />
        </TabPanel>
      </Tabs>
    )
  }
}

export default connect(null, { setFilter })(Main);