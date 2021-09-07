/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react'; // ErrorBoundary isn't working. (It was supposed to be declared with "Component" and wrapped around the application <ErrorBoundary></ErrorBoundary>)
import store from './data/store.js';
import { Provider } from 'react-redux';

import './styles/App.css';

import Navigation from './components/navigation/Navigation.jsx';
import Content from './components/Content.jsx';
import MetaData from './components/MetaData.jsx';

const DEBUG = true;

class App extends Component {
  constructor(props) {
    super(props);
    const stateObject = {};
    this.state = stateObject;
  }

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    return (
      <>
        <Navigation />
        <main role="main">
          <div className="container-fluid">
            <Content />
          </div>
        </main>
        <MetaData />
      </>
    );
  }
}

export default App;
