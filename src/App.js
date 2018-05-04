import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Loader from './components/loading.js'

// Fonts
import './css/open-sans.css'
import './css/michroma.css'
import './css/barlow.css'

// Pure css
import './css/pure-min.css'
import './css/grids-responsive-min.css'

// App css
import './App.css'
import githubLogo from './icon/GitHub-Mark-Light-32px.png'

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar pure-menu pure-menu-horizontal">
          <div className="logo-holder">
            <div className="logo">
              <div style={{'backgroundColor': '#ff5935', height: '8px'}}></div>
              <div style={{'backgroundColor': 'white', height: '6px'}}></div>
              <div style={{'backgroundColor': '#17799d', height: '9px'}}></div>
            </div>
          </div>

          <a href="/" className="pure-menu-heading pure-menu-link"> Servésa </a>

          <ul className="pure-menu-list navbar-right">
            <li className="pure-menu-item">
              <a href="https://github.com/MagRelo/signingDemo" target="_blank" rel="noopener noreferrer" className="pure-menu-link">
                <img alt="github logo" className="header-logo" src={githubLogo}></img>
              </a>
            </li>
          </ul>
        </nav>

        <div className="container">
          
          {!this.props.web3 || !this.props.account ?         
              
            <Loader web3={this.props.web3} account={this.props.account} network={this.props.network} />            
              
          : 

            <div>{this.props.children}</div>

          }          

        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    web3: state.web3.instance,
    account: state.web3.accounts[0] || '',
    network: state.web3.network
  }
}

export default withRouter(connect(mapStateToProps)(App))



