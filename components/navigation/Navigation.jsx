import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AccountPage from '../pages/Account.jsx';
import ContractPage from '../pages/Contracts.jsx';
import NavItem from './NavItem.jsx';

import menu from './menu.js';

const DEBUG = false;

const Navigation = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <nav className="navbar navbar-dark navbar-fixed-top bg-dark shadow">
      <Router>
        <Switch>
          <Route path={'/'}></Route>
          <Route path={'/accounts'}>
            <AccountPage />
          </Route>
          <Route path={'/contracts'}>
            <ContractPage />
          </Route>
        </Switch>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={'/'} rel="noreferrer">
              DApp
            </Link>
          </div>
          <ul className="nav navbar-nav" role="tablist">
            {menu.map((item, index) => {
              const { text, link } = item;
              return (
                <NavItem key={`nav-item-${index}`} text={text} link={link} />
              );
            })}
          </ul>
        </div>
      </Router>
    </nav>
  );
};

// Navigation.propTypes = {
//   menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
//   menuLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Navigation.defaultProps = {
//   menuItems: ['Home'],
//   menuLinks: ['#'],
// };

export default Navigation;
