import React, { Component, Fragment } from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-dark.css'


class Header extends Component {
    render() {
      
        return (
            <div style={{background: '#ffc299'}} className="header">
                <h1 style={{color: 'black'}}>SmartScript</h1>
                <h3>Unlock your genome</h3>
            </div>
        );
    }
  }
    export default Header;
