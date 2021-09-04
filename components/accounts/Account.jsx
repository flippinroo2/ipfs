/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEBUG = false;

class Account extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.state = {};

    // this.bindedFunction = this.bindedFunction.bind(this);
  }

  componentDidMount() {
    // this.loadBlockchainData();
  }

  /*
  Function that is tied to state. See the "bind(this)" call in constructor above.
  */
  // bindedFunction() {
  //   this.setState({});
  // }

  render() {
    // const { account, loading } = this.state;
    return (
      <div className="wrapper">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/free-download"
            target="_blank"
            rel="noreferrer">
            Dapp University | Todo List
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small>
                <a className="nav-link" href="#">
                  <span id="account" />
                </a>
              </small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main
              role="main"
              className="col-lg-12 d-flex justify-content-center">
              {true ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <div>{'account'}</div>
              )}
            </main>
          </div>
        </div>
        {/* <MetaData styles={styles} scripts={scripts} /> */}
      </div>
    );
  }
}

Account.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// MetaData.defaultProps = {
//   styles: [''],
//   scripts: ['']
// };

export default Account;
