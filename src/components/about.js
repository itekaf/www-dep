import React, { Component } from 'react';

class AboutPage extends Component{

    render() {
        return (
            <div className="container-fluid">
                <h3>Catalog of linter</h3>
                <div className="container-flex">
                    <div className="contact container-flex">
                        <div className="github">
                        <a href="https://github.com/linterhub" target="_blank" rel="noopener noreferrer">
                            <i className="fontello-icon">&#xf09b;</i>
                        </a>
                        </div>
                        <div  className="email">
                        <a href="mailto:hi@repometric.com" target="_blank" rel="noopener noreferrer">
                            <i className="fontello-icon">&#xf0e0;</i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;